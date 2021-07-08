//index.js
const service = require("../../utils/service.js")
const dao = require("../../utils/dao/index")
const utils = require("../../utils/common")
const app = getApp()

Page({
  data: {
    interInfo: {
      address: '',
      interDate: utils.format(Date.now(), 'YYYY-MM-DD'),
      interTime: '',
      remark: '',
      jobDesc: '',
    },
    employerCompanyName: '',
    employerCompany: { name: '' },
    guideInfo: { name: '' },
    isEdit: false
  },

  onLoad: function (query) {
    if (query && query.id) {
      let interInfo = dao.inter.getById(query.id);
      let employerCompany = dao.employerCompany.getById(interInfo.employerCompanyId);
      let guideInfo = dao.guide.getById(interInfo.guideId);

      console.log('interInfo', interInfo)
      this.setData({
        employerCompanyName: employerCompany.name,
        employerCompany: {
          ...this.data.employerCompany,
          ...employerCompany
        },
        guideInfo: {
          ...this.data.guideInfo,
          ...guideInfo
        },
        interInfo: {
          ...this.data.interInfo,
          ...interInfo
        },
        isEdit: true
      });
    }
  },
  save() {
    const { isEdit, guideInfo, interInfo, employerCompany, employerCompanyName } = this.data;
    if (!isEdit) {
      // let guideInfo = dao.guide.add({ name: guideInfo.guideName });
      // let companyInfo = dao.employerCompany.add({ name: employerCompany.companyName });

      // dao.inter.add({
      //   employerCompanyId: companyInfo.id,
      //   guideId: guideInfo.id,
      //   ...interInfo
      // });

      console.log(isEdit, guideInfo, interInfo, employerCompany, employerCompanyName)

    } else {
      console.log('update', guideInfo, interInfo, employerCompany, employerCompanyName)
      dao.guide.updateById(guideInfo.id, { name: guideInfo.name });
      dao.employerCompany.updateById(employerCompany.id, { name: employerCompany.name });

      dao.inter.updateById(interInfo.id, {
        ...interInfo
      });
    }

    // todo 添加添加成功的toast反馈
    // service.goPage('home');
  }
})
