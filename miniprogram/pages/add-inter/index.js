//index.js
const utils = require("../../utils/common.js")
const dao = require("../../utils/dao/index")

const app = getApp()

Page({
  data: {
    companyName: '',
    guideName: '',
    // address: '',
    // interDate: utils.format(Date.now(), 'YYYY-MM-DD'),
    // interTime: utils.format(Date.now(), 'hh:mm'),
    remark: '',
    jobDesc: ''
  },

  addInter() {
    let guideInfo = dao.guide.add({ name: this.data.guideName });
    let companyInfo = dao.employerCompany.add({ name: this.data.companyName });

    dao.inter.add({
      employerCompanyId: companyInfo.id,
      guideId: guideInfo.id,
      // address: this.data.address,
      // interDate: this.data.interDate,
      // interTime: this.data.interTime,
      remark: this.data.remark,
      jobDesc: this.data.jobDesc,
    });

    wx.navigateTo({
      url: '/pages/index/index',
    })
  }
})
