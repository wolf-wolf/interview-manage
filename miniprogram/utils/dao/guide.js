const model = require("../model.js")
const constants = require("../constants.js")
const STORE_KEY = constants.STORE_KEY.GUIDE;

function updateById() {

}

function add({ name, type }) {
  let guideInfo = new model.Guide({
    name
  });

  let guideStore = JSON.parse(wx.getStorageSync(STORE_KEY) || "{}");

  guideStore[guideInfo.id] = Object.assign({}, guideStore[guideInfo.id], guideInfo)
  wx.setStorageSync(STORE_KEY, JSON.stringify(guideStore));

  return guideInfo;
}

function getById(id) {
  let guideInfo = JSON.parse(wx.getStorageSync(STORE_KEY) || "{}");

  return guideInfo[id];
}

module.exports.add = add;
module.exports.updateById = updateById;
module.exports.getById = getById;