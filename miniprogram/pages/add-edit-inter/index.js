//index.js
const service = require("../../utils/service.js")
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

  onLoad: function (query) {
    let interInfo = dao.inter.getById(query.id);
    console.log(interInfo)
    let employerCompany = dao.employerCompany.getById(interInfo.employerCompanyId);
    let guideInfo = dao.guide.getById(interInfo.guideId);
    let fullInfo = {
      ...interInfo,
      employerCompany,
      guideInfo
    };

    console.log('fullInfo', fullInfo)
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

    service.goPage('home');
  }
})
