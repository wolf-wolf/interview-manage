//index.js
const app = getApp()
const dao = require("../../utils/dao/index")
const constants = require("../../utils/constants.js")

Page({
  data: {
    comingInter: [],
    finishInter: [],
    underwayInter: [],
  },

  goAddPage() {
    wx.navigateTo({
      url: '/pages/add-edit-inter/index',
    })
  },

  init() {
    let interviews = wx.getStorageSync(constants.STORE_KEY.INTERVIEW);

    if (!interviews) {
      interviews = []
    } else {
      interviews = JSON.parse(interviews);

      let now = Date.now();
      let comingInter = []; // 待开始
      let finishInter = [];  // 已完成
      let underwayInter = [];  // 已完成

      Object.keys(interviews).map(item => {
        let interInfo = interviews[item]
        let employerCompany = dao.employerCompany.getById(interInfo.employerCompanyId);
        let guideInfo = dao.guide.getById(interInfo.guideId);
        return {
          ...interInfo,
          employerCompany,
          guideInfo
        };
      }).sort((a, b) => {
        return (new Date(b.interDate + ' ' + b.interTime).getTime()) - new Date(a.interDate + ' ' + a.interTime).getTime()
      }).forEach(info => {
        let timestamp = new Date(info.interDate + ' ' + info.interTime).getTime()
        if (timestamp >= now && timestamp - now < 60 * 60 * 1000) {
          underwayInter.push(info);
        } else if (timestamp < now) {
          finishInter.push(info);
        } else {
          comingInter.push(info);
        }
      })

      this.setData({
        comingInter: comingInter,
        finishInter: finishInter,
        underwayInter: underwayInter,
      })
    }
  },
  onShow() {
    this.init();
  }
})
