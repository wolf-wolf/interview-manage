//index.js
const utils = require("../../utils/common.js")
const service = require("../../utils/service.js")
const model = require("../../utils/model.js")

const app = getApp()

Page({
  data: {
    companyName: '',
    guideName: '',
    address: '',
    interDate: utils.format(Date.now(), 'YYYY-MM-DD'),
    interTime: utils.format(Date.now(), 'hh:mm')
  },

  addInter() {
    let guideInfo = service.addGuide({ name: this.data.guideName });
    let companyInfo = service.addEmployerCompany({ name: this.data.companyName });

    service.addInter({
      employerCompanyId: companyInfo.id,
      recruiterId: guideInfo.id,
      address: this.data.address,
      interDate: this.data.interDate,
      interTime: this.data.interTime,
    })
  }
})
