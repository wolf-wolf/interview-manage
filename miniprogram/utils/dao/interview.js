const model = require("../model.js")
const constants = require("../constants.js")
const STORE_KEY = constants.STORE_KEY.INTERVIEW;

function add({ guideId, employerCompanyId, interDate, interTime, address, remark, jobDesc }) {
  let interInfo = new model.InterViewSchedule({
    guideId, employerCompanyId, interDate, interTime, address, remark, jobDesc
  })

  let interStore = JSON.parse(wx.getStorageSync(STORE_KEY) || "{}");

  interStore[interInfo.id] = Object.assign({}, interStore[interInfo.id], interInfo)
  wx.setStorageSync(STORE_KEY, JSON.stringify(interStore));
}

function updateById() {

}

function getById(id) {
  let interInfo = JSON.parse(wx.getStorageSync(STORE_KEY) || "{}");

  return interInfo[id];
}

module.exports.add = add;
module.exports.updateById = updateById;
module.exports.getById = getById;