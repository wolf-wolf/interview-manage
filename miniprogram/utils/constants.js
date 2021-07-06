const INTERVIEW_STAGE = {
  SEND: Symbol('已投递'),
  FST_INTER: Symbol('一面'),
  SEC_INTER: Symbol('二面'),
  TRD_INTER: Symbol('三面'),
  FOR_INTER: Symbol('四面'),
  FiV_INTER: Symbol('五面'),
  SIX_INTER: Symbol('六面'),
  HR_INTER: Symbol('人力面'),
  FAIL: Symbol('未通过'),
  OFFER: Symbol('获取Offer'),
}
const INTERVIEW_STAGE_TXT = {
  [INTERVIEW_STAGE.SEND]:'已投递',
  [INTERVIEW_STAGE.FST_INTER]:'一面',
  [INTERVIEW_STAGE.SEC_INTER]:'二面',
  [INTERVIEW_STAGE.TRD_INTER]:'三面',
  [INTERVIEW_STAGE.FOR_INTER]:'四面',
  [INTERVIEW_STAGE.FiV_INTER]:'五面',
  [INTERVIEW_STAGE.SIX_INTER]:'六面',
  [INTERVIEW_STAGE.HR_INTER]:'人力面',
  [INTERVIEW_STAGE.FAIL]:'未通过',
  [INTERVIEW_STAGE.OFFER]:'获取Offer',
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
  GUIDE: 'guide-store',
  INTERVIEW: 'interview-store',
  EMPLOYER_COMPANY: 'employer-company-store',
}

module.exports.INTERVIEW_STAGE = INTERVIEW_STAGE;
module.exports.INTERVIEW_STAGE_TXT = INTERVIEW_STAGE_TXT;
module.exports.INTERVIEW_TYPE = INTERVIEW_TYPE;
module.exports.GUIDE_TYPE = GUIDE_TYPE;
module.exports.STORE_KEY = STORE_KEY;
