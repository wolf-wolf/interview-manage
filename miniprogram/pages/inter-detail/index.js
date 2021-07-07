//index.js
const utils = require("../../utils/common.js")
const service = require("../../utils/service.js")
const dao = require("../../utils/dao/index")

const app = getApp()

Page({
  data: {
    interInfo: {}
  },
  onLoad: function (query) {
    console.log(query.id)
    this.setData({
      interInfo: { id: query.id }
      // fixme 调试使用
      // interInfo: {id: 'INffd80576-5847-4708-98a7-02fcf3ff8607'}
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
  goEdit() {
    service.goPage('interEdit', { params: { id: this.data.interInfo.id } })
  }
})
