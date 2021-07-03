//index.js
const utils = require("../../utils/common.js")
const app = getApp()

Page({
  data: {
    interDate: utils.format(Date.now(), 'YYYY-MM-DD'),
    interTime: utils.format(Date.now(), 'hh:mm')
  },
})
