const constants = require("./constants.js")
const utils = require("./common.js")

// 面试阶段
class InterViewStage {
  constructor({ type, status }) {
    this.type = type;
    this.status = status;
  }
}
// 面试日程
class InterViewSchedule {
  constructor({ guideId, employerCompanyId, interDate, interTime, address, remark, jobDesc }) {
    this.guideId = guideId;
    this.employerCompanyId = employerCompanyId;
    this.interDate = interDate;
    this.interTime = interTime;
    this.address = address;
    this.remark = remark;
    this.jobDesc = jobDesc;
    this.stage = [new InterViewStage({
      type: constants.INTERVIEW_TYPE.UNKOWN,
      status: constants.INTERVIEW_STAGE.SEND
    })];
    this.id = 'IN' + utils.getUUId();
  }
}
// 对接人
class Guide {
  constructor({ name, type }) {
    this.name = name;
    this.id = 'RE' + utils.getUUId();
    this.type = type || constants.GUIDE_TYPE.RECRUITER; // 默认为猎头
  }
}

// 面试公司
class EmployerCompany {
  constructor({ name }) {
    this.name = name;
    this.id = 'EC' + utils.getUUId();
  }
}

module.exports.Guide = Guide;
module.exports.EmployerCompany = EmployerCompany;
module.exports.InterViewSchedule = InterViewSchedule;