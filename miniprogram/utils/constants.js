const INTERVIEW_STAGE = {
  SEND: Symbol('interview-send'),
  FST_INTER: Symbol('fisrt-interview'),
  SEC_INTER: Symbol('second-interview'),
  TRD_INTER: Symbol('third-interview'),
  FOR_INTER: Symbol('four-interview'),
  FiV_INTER: Symbol('five-interview'),
  SIX_INTER: Symbol('six-interview'),
  HR_INTER: Symbol('human-resource-interview'),
  FAIL: Symbol('failure'),
  OFFER: Symbol('offer'),
}

const INTERVIEW_TYPE = {
  PHONE: Symbol('phone interview'),
  VIDEO: Symbol('video interview'),
  ON_SITE: Symbol('on-site interview'),
  UNKOWN: Symbol('unkonw type')
}

const GUIDE_TYPE = {
  HR: Symbol('HR'),
  RECRUITER: Symbol('Recruiter'),
}

const STORE_KEY = {
  GUIDE:Symbol('guide-store'),
  INTERVIEW:Symbol('interview-store'),
  EMPLOYER_COMPANY:Symbol('empolyer-company-store'),
}

module.exports.INTERVIEW_STAGE = INTERVIEW_STAGE;
module.exports.INTERVIEW_TYPE = INTERVIEW_TYPE;
module.exports.GUIDE_TYPE = GUIDE_TYPE;
module.exports.STORE_KEY = STORE_KEY;
