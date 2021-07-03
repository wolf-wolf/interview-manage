//index.js
const utils = require("../../utils/common.js")
const service = require("../../utils/service.js")
const model = require("../../utils/model.js")

const app = getApp()

Page({
  data: {
    company: '',
    recruiter: '',
    interDate: utils.format(Date.now(), 'YYYY-MM-DD'),
    interTime: utils.format(Date.now(), 'hh:mm')
  },

  addInter() {
    

    service.addInter({
      company: this.data.company,
      recruiter: this.data.recruiter,
      interDate: this.data.interDate,
      interTime: this.data.interTime,
    })
  }
})
