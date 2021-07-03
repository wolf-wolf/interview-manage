const model = require("./model.js")
function updateInterById() {

}

function addInter({ recruiterId, employerCompanyId, interDate, interTime, address, reamark }) {
  let interInfo = new model.InterViewSchedule({
    recruiterId, employerCompanyId, interDate, interTime, address, reamark
  })
  wx.setStorageSync(interInfo.id, JSON.stringify(interInfo))
}

function updateGuideById() {

}

function addGuide({ name, type }) {
  let guideInfo = new model.Guide({
    name
  });

  wx.setStorageSync(guideInfo.id, JSON.stringify(guideInfo));

  return guideInfo;
}

function updateEmployerCompanyById() {

}

function addEmployerCompany({ name }) {
  let companyInfo = new model.EmployerCompany({
    name
  });

  wx.setStorageSync(companyInfo.id, JSON.stringify(companyInfo));

  return companyInfo;
}

module.exports.addInter = addInter;
module.exports.updateInterById = updateInterById;

module.exports.addGuide = addGuide;
module.exports.updateGuideById = updateGuideById;

module.exports.addEmployerCompany = addEmployerCompany;
module.exports.updateEmployerCompanyById = updateEmployerCompanyById;