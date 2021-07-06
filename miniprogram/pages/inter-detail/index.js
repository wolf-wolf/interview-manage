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
    this.setData({
      interInfo: { id: query.id }
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
