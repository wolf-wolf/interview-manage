const utils = require("./common.js")
function updateInterById() {

}

function addInter({ recruiterId, employerCompanyId, interDate, interTime }) {
  let interInfo = new model.InterViewSchedule({
    recruiterId, employerCompanyId, interDate, interTime
  })
  wx.setStorageSync(interInfo.id, JSON.stringify(interInfo))
}


function updateRecruiterById() {

}

function addRecruiter({ name }) {
  let interInfo = new model.InterViewSchedule({
    recruiterId, employerCompanyId, interDate, interTime
  })
  wx.setStorageSync(interInfo.id, JSON.stringify(interInfo))
}


function updateEmployerCompanyById() {

}

function addEmployerCompany({ name }) {
  let interInfo = new model.InterViewSchedule({
    recruiterId, employerCompanyId, interDate, interTime
  })
  wx.setStorageSync(interInfo.id, JSON.stringify(interInfo))
}

module.exports.addInter = addInter;
module.exports.updateInterById = updateInterById;