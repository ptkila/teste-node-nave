const { check, validationResult } = require('express-validator')

const validationRules = (method) => {

switch (method) {
    case 'login': {
      return [
        check('email').exists().isEmail(),
        check('password').exists().notEmpty(),
      ]
    }
    case 'application-list-comments': {
      return [
        check('application_id').exists().isInt(),
      ]
    }
    case 'application-comment': {
      return [
        check('application_id').exists().isInt(),
        check('text').exists().not().isEmpty(),
      ]
    }
    case 'job-create': {
      return [
        check('name').exists().notEmpty(),
        check('description').exists().notEmpty(),
      ]
    }
    case 'job-apply': {
      return [
        check('candidate_id').exists().isInt(),
        check('job_id').exists().isInt(),
      ]
    }
    case 'admin-register': {
      return [
        check('email').exists().isEmail(),
        check('name').exists().isAlpha(),
        check('password').exists().notEmpty(),
        check('password_confirmation').exists().notEmpty(),
      ]
    }
    case 'candidate-register': {
      return [
        check('email').exists().isEmail(),
        check('password').exists().notEmpty(),
        check('password_confirmation').exists().notEmpty(),
        check('name').exists().isAlpha(),
        check('phone').exists().isNumeric(),
        check('cpf').exists().isNumeric(),
      ]
    }
  }
}


module.exports = {
  validationRules: validationRules,
  validationResult: validationResult
}