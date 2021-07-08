const model = require("../model.js");
const constants = require("../constants.js");
const guideDao = require('./guide');
const employerCompanyDao = require('./employer-company');
const STORE_KEY = constants.STORE_KEY.INTERVIEW;

function add({ guideId, employerCompanyId, interDate, interTime, address, remark, jobDesc }) {
  let interInfo = new model.InterViewSchedule({
    guideId, employerCompanyId, interDate, interTime, address, remark, jobDesc
  })

  let interStore = JSON.parse(wx.getStorageSync(STORE_KEY) || "{}");

  interStore[interInfo.id] = Object.assign({}, interStore[interInfo.id], interInfo)
  wx.setStorageSync(STORE_KEY, JSON.stringify(interStore));
}

function updateById(id, { interDate, interTime, address, remark, jobDesc }) {
  let interStore = JSON.parse(wx.getStorageSync(STORE_KEY) || "{}");

  interStore[id] = {
    ...interStore[id],
    interDate, interTime, address, remark, jobDesc
  };

  wx.setStorageSync(STORE_KEY, JSON.stringify(interStore));
}

function delById(id, delRelation = true) {
  let interStore = JSON.parse(wx.getStorageSync(STORE_KEY) || "{}");
  if (delRelation) {
    guideDao.delById(interStore[id].guideId);
    employerCompanyDao.delById(interStore[id].employerCompanyId);
  }

  delete interStore[id];

  wx.setStorageSync(STORE_KEY, JSON.stringify(interStore));
}

function getById(id) {
  let interStore = JSON.parse(wx.getStorageSync(STORE_KEY) || "{}");

  return interStore[id];
}

module.exports.add = add;
module.exports.delById = delById;
module.exports.updateById = updateById;
module.exports.getById = getById;