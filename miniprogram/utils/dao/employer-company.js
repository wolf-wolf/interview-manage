const model = require("../model.js")
const constants = require("../constants.js")
const STORE_KEY = constants.STORE_KEY.EMPLOYER_COMPANY;

function updateById() {

}

function add({ name }) {
  let companyInfo = new model.EmployerCompany({
    name
  });

  // 获取companyStore
  let companyStore = JSON.parse(wx.getStorageSync(STORE_KEY) || "{}");

  companyStore[companyInfo.id] = Object.assign({}, companyStore[companyInfo.id], companyInfo)
  wx.setStorageSync(STORE_KEY, JSON.stringify(companyStore));

  return companyInfo;
}

function getById(id) {
  let companyStore = JSON.parse(wx.getStorageSync(STORE_KEY) || "{}");

  return companyStore[id];
}

module.exports.add = add;
module.exports.updateById = updateById;
module.exports.getById = getById;