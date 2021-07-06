//index.js
const utils = require("../../utils/common.js")
const dao = require("../../utils/dao/index")

const app = getApp()

Page({
  data: {
    companyName: '',
    guideName: '',
    address: '',
    interDate: utils.format(Date.now(), 'YYYY-MM-DD'),
    interTime: utils.format(Date.now(), 'hh:mm'),

    isShowOpPanel: false
  },

  toggleOpPanel() {
    this.setData({
      isShowOpPanel: !this.data.isShowOpPanel
    })
  }
})
