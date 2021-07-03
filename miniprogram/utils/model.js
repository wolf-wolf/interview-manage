const constants = require("./constants.js")
class InterViewStage {
  constructor({ type, status }) {
    this.type = type;
    this.status = status;
  }
}
class InterViewSchedule {
  constructor({ recruiterId, employerCompanyId, interDate, interTime, address, reamark }) {
    this.recruiterId = recruiterId;
    this.employerCompanyId = employerCompanyId;
    this.interDate = interDate;
    this.interTime = interTime;
    this.address = address;
    this.reamark = reamark;
    this.status = [new InterViewStage({
      type: constants.INTERVIEW_TYPE.UNKOWN,
      status: constants.INTERVIEW_STAGE.SEND
    })];
    this.id = 'IN' + utils.getUUId();
  }
}
class Recruiter {
  constructor({ name }) {
    this.name = name;
    this.id = 'RE' + utils.getUUId();
  }
}

class EmployerCompany {
  constructor({ name }) {
    this.name = name;
    this.id = 'EC' + utils.getUUId();
  }
}

module.exports.Recruiter = Recruiter;
module.exports.EmployerCompany = EmployerCompany;
module.exports.InterViewSchedule = InterViewSchedule;