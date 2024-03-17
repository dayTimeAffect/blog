// 横向瀑布流
class WaterfallFlowRow {
  constructor ({container, baseHeight, imgList, bottomInfoRender}) {
    this.bottomInfoRender = bottomInfoRender
    // 请求并发数
    this.requestMax = 5
    this.requestCount = 0
    this.requestArr = []
    // 行数据
    this.rowList = []
    this.currentRowIndex = -1

    this.imgList = []
    this.container = container
    this.containerWidth = container.offsetWidth
    this.baseHeight = baseHeight || 200
    this.redundancy = 100
    this.imgHash = {}
    this.ImgLisToHash = []
    this.init(imgList)
  }
  init (imgList) {
    this.imgList = []
    this.initRow()
    this.addImgList(imgList)
  }
  addImgList (imgList) {
    if (!imgList.length) return
    Array.from(document.getElementsByClassName('empty-dom')).forEach(dom => {
      dom.parentNode.remove()
    })
    this.imgList.push(...imgList)
    imgList.forEach((imgUrl, index) => {
      this.requestArr.push(() => {
        this.getImgSize(imgUrl).then(() => {
          this.addImgToRow(imgUrl)
          if (index === imgList.length - 1) {
            this.renderRow(this.currentRowIndex, true)
          }
        }).then(() => {
          if (this.requestArr.length) {
            this.requestArr.shift()()
          }
        })
      })
    })
    this.requestArr.shift()()
  }

  // 获取图片宽高
  getImgSize (imgUrl) {
    if (this.imgHash[imgUrl]) {
      return Promise.resolve(this.imgHash[imgUrl])
    }
    this.requestCount++
    return new Promise((resolve, reject) => {
        let img = new Image()
        img.src = imgUrl
        img.onload = () => {
            resolve({width: img.width, height: img.height, error: false})
        }
        img.onerror = () => {
            resolve({width: this.baseHeight, height: this.baseHeight, error: true})
        }
    }).then(({width, height, error}) => {
        this.imgHash[imgUrl] = { url: imgUrl, width, height, error}
        this.requestCount--
        return ({width, height, error})
    })
  }
  // 初始化一行
  initRow () {
    this.rowList.push({
      list: [],
      remainingWidth: this.containerWidth
    })
    this.currentRowIndex++
  }
  addImgToRow (img) {
    const row = this.rowList[this.currentRowIndex]
    const { width, height } = this.imgHash[img]
    const scale = this.baseHeight / height
    const imgWidth = width * scale
    if (row.remainingWidth < 0 || (row.remainingWidth + this.redundancy) < imgWidth) {
      this.fillRow(this.currentRowIndex)
      this.initRow()
      return this.addImgToRow(img)
    }
    row.list.push({ url: img, width: imgWidth, height: this.baseHeight })
    row.remainingWidth -= imgWidth + 12
  }
  fillRow (rowIndex) {
    let { list } = this.rowList[rowIndex]
    const widthCount = list.reduce((prev, current) => prev + current.width, 0)
    const scale = widthCount / (this.containerWidth - list.length * 12)
    list.forEach((img, index) => {
      img.width = Math.floor(img.width / scale)
      img.height = Math.floor(img.height / scale)
    })
    this.renderRow(rowIndex)
  }
  renderRow (rowIndex, last) {
    const rowDom = document.createElement('div')
    rowDom.className = 'row-dom'
    rowDom.style.display = 'flex'
    rowDom.style.alignItems = 'center'
    rowDom.style.justifyContent = 'space-between'
    this.rowList[rowIndex].list.forEach((img, index) => {
      const imgContainer = document.createElement('div')
      const imgDom = document.createElement('img')
      imgContainer.className = 'img-container'
      imgDom.src = img.url
      imgDom.style.width = img.width + 'px'
      imgDom.style.height = img.height + 'px'
      if (index !== 0) {
        imgDom.style.marginLeft = '12px'
      }
      imgContainer.appendChild(imgDom)
      if (this.bottomInfoRender){
        const imgOtherInfo = document.createElement('div')
        imgOtherInfo.className = 'img-other-info'
        imgOtherInfo.innerHTML = this.bottomInfoRender(img)
        imgContainer.appendChild(imgOtherInfo)
      }
      rowDom.appendChild(imgContainer)
    })
    if (last) {
      const emptyDom = document.createElement('div')
      emptyDom.className = 'empty-dom'
      emptyDom.style.flex = '1'
      rowDom.appendChild(emptyDom)
    }
    this.container.appendChild(rowDom)
  }
  destroy () {
    this.container.innerHTML = '';
    this.rowList = []
    this.imgList = []
    this.imgHash = {}
    this.requestArr = []
  }
  // 监听窗口变化
  resize () {
    // 防抖
    window.addEventListener('resize', () => {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.container.innerHTML = '';
        this.containerWidth = this.container.offsetWidth
        this.rowList = []
        this.currentRowIndex = -1
        this.init(this.imgList)
      }, 200)
    })
  }
}