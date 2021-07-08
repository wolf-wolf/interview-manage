//index.js
const utils = require("../../utils/common.js")
const service = require("../../utils/service.js")
const dao = require("../../utils/dao/index")

const app = getApp()

Page({
  data: {
    interInfo: {},
    delDialog: {
      show: false,
      btns: [{ id: 'cancel', text: '取消' }, { id: 'confirm', text: '确定' }]
    }
  },
  onLoad: function (query) {
    console.log(query.id)
    this.setData({
      interInfo: { id: query.id }
      // fixme 调试使用
      // interInfo: {id: 'INccde49bd-d97c-452f-9a57-73c83bf103e8"'}
    })
  },
  onShow: function () {
    this.initData(this.data.interInfo.id);
  },
  initData(interId) {
    let interInfo = dao.inter.getById(interId);
    let employerCompany = dao.employerCompany.getById(interInfo.employerCompanyId);
    let guideInfo = dao.guide.getById(interInfo.guideId);
    this.setData({
      interInfo: {
        ...interInfo,
        employerCompany,
        guideInfo
      }
    })
  },
  showDelDialog() {
    this.toggleDelDialg(true)
  },
  toggleDelDialg(show) {
    this.setData({
      delDialog: {
        ...this.data.delDialog,
        show: show
      }
    })
  },
  delDialogTapHandler(e) {
    console.log(e)
    if (e.detail.item.id === 'confirm') {
      console.log('删除本条记录')
    }

    this.toggleDelDialg(false);
  },
  goEdit() {
    service.goPage('interEdit', { params: { id: this.data.interInfo.id } })
  }
})
