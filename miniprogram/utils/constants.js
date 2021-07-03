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

module.exports.INTERVIEW_STAGE = INTERVIEW_STAGE;
module.exports.INTERVIEW_TYPE = INTERVIEW_TYPE;
