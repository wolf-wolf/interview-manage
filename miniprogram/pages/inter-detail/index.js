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
    console.log(query)
    let interInfo = dao.inter.getById(query.id);
    let employerCompany = dao.employerCompany.getById(interInfo.employerCompanyId);
    let guideInfo = dao.guide.getById(interInfo.guideId);
    console.log({
      ...interInfo,
      employerCompany,
      guideInfo
    })
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
