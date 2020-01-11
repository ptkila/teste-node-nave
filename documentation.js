/**
 * @apiDefine AuthorizationToken
 * @apiHeader {String} Auth-Token Json Web Token. Deve seguir o padrão "{{ token }}"
 * @apiHeaderExample {json} Exemplo - Header:
 * {
 *    "Auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY2ODU5MjU3LCJleHAiOjE1NjY4NjQyNTd9.PW8LXAw1M0IDen5IeeC-crXo_YbHzWx8EVgpLZkm_J4"
 * }
 * @apiError (401 - UNAUTHORIZED) Unauthorized Mensagem contendo a razão
 * @apiError (500 - SERVERERROR) ServerError Mensagem contendo a razão
*/

/**
 * @apiDefine AuthorizationTokenAdmin
 * @apiHeader {String} Auth-Token Json Web Token. Deve seguir o padrão "{{ token_admin }}"
 * @apiHeaderExample {json} Exemplo - Header:
 * {
 *    "Auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY2ODU5MjU3LCJleHAiOjE1NjY4NjQyNTd9.PW8LXAw1M0IDen5IeeC-crXo_YbHzWx8EVgpLZkm_J4"
 * }
 * @apiError (401 - UNAUTHORIZED) Unauthorized Mensagem contendo a razão
 * @apiError (500 - SERVERERROR) ServerError Mensagem contendo a razão
*/

/**
 * @apiDefine AuthorizationTokenCandidate
 * @apiHeader {String} Auth-Token Json Web Token. Deve seguir o padrão "{{ token_candidato }}"
 * @apiHeaderExample {json} Exemplo - Header:
 * {
 *    "Auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY2ODU5MjU3LCJleHAiOjE1NjY4NjQyNTd9.PW8LXAw1M0IDen5IeeC-crXo_YbHzWx8EVgpLZkm_J4"
 * }
 * @apiError (401 - UNAUTHORIZED) Unauthorized Mensagem contendo a razão
 * @apiError (500 - SERVERERROR) ServerError Mensagem contendo a razão
 * 
*/

/** Authentication */

 /**
 * @api {post} /login Login
 * @apiGroup Authentication
 * 
 * @apiParam {String} email E-mail do usuário
 * @apiParam {String} password Senha do usuário
 * 
 * @apiSuccess {String} token JWT Token válido para futuras requisições
 * @apiSuccess {Object} user Detalhes do usuário autenticado
 * @apiSuccess {Object} candidate/ admin Detalhes da atribuição do usuário autenticado
 * 
 * @apiSuccessExample {json} Exemplo - Resposta:
 * HTTP/1.1 200 OK
 *  {
 *    "token": "...",
 *    "user": {
 *      "id": 1,
 *      "email": "tester@test.com",
 *      "name": "Tester"
 *     },
 *     "candidate/ admin": {
 *      "id": 1,
 *      "email": "tester@test.com",
 *      ...
 *     },
 *  }
 * 
 * @apiError (404 - NOTFOUND) NotFound Mensagem contendo a razão
 * @apiError (422 - UNPROCESSABLEENTITY) ValidationError.errors[] Listagem de campos inválidos
 * @apiError (500 - SERVERERROR) ServerError Mensagem contendo a razão
 */

 /**
 * @api {post} /logout Logout
 * @apiGroup Authentication
 * @apiUse AuthorizationToken
 * @apiSuccess (204 - NOCONTENT) No content
 * @apiError (401 - UNAUTHORIZED) Unauthorized Mensagem contendo a razão
 * @apiError (500 - SERVERERROR) ServerError Mensagem contendo a razão
 */

/** Register */

/**
 * @api {post} /register-admin Cadastro de admin
 * @apiGroup Register 
 * @apiUse AuthorizationToken
 * 
 * @apiParam {String} email E-mail do usuário
 * @apiParam {String} name Nome do usuário para exibição
 * @apiParam {String} password Senha do usuário
 * @apiParam {String} password_confirmation Repetição da senha do usuário
 * 
 * @apiSuccess {String} message success
 * @apiSuccess {Object} user Detalhes do usuário criado
 * @apiSuccess {Object} admin Detalhes do admin criado
 * 
 * @apiSuccessExample {json} Resposta:
 *  HTTP/1.1 201 Created
 *  {
 *    "message": "success",
 *    "user": {
 *      "id": 1,
 *      "email": "tester@test.com",
 *      "password": "$2a$10$W2a2kE5Q4g8u6nBDBjIpbead52yBP58uAAEESB1AvfBEXsPbE/2L.",
 *      "name": "Tester",
 *      "role": "App\\Admin",
 *      "updatedAt": "2020-01-11T01:21:20.046Z",
 *      "createdAt": "2020-01-11T01:21:20.046Z"
 *     },
 *     "admin": {
 *       "id": 6,
 *       "name": "dasdasd",
 *       "userId": 12,
 *       "updatedAt": "2020-01-11T02:05:45.918Z",
 *       "createdAt": "2020-01-11T02:05:45.918Z"
 *      }
 *  }
 * 
 * @apiError (403 - FORBIDDEN) Forbidden Mensagem contendo a razão
 * @apiError (422 - UNPROCESSABLEENTITY) ValidationError.errors[] Listagem de campos inválidos
 * @apiError (500 - SERVERERROR) ServerError Mensagem contendo a razão
 */

 /**
 * @api {post} /register-candidate Cadastro de usuário
 * @apiGroup Register 
 * @apiParam {String} email E-mail do usuário
 * @apiParam {String} name Nome do usuário para exibição
 * @apiParam {String} password Senha do usuário
 * @apiParam {String} password_confirmation Repetição da senha do usuário
 * @apiParam {Number} phone Telefone do usuário
 * @apiParam {Number} cpf Repetição da senha do usuário
 * 
 * @apiSuccess {String} message success
 * @apiSuccess {Object} user Detalhes do usuário criado
 * @apiSuccess {Object} candidate Detalhes do candidato criado
 * 
 * @apiSuccessExample {json} Resposta:
 *  HTTP/1.1 201 Created
 *  {
 *    "message": "success",
 *    "user": {
 *     "id": 3,
 *       "email": "candidate@candidate.com",
 *       "password": "$2a$10$TRxDGtzfv/TE9XSeQmfVo.mTbyEN31Nv68RVArECEiu5sxf4ik.5G",
 *       "role": "App\\Candidate",
 *       "updatedAt": "2020-01-11T01:23:30.941Z",
 *       "createdAt": "2020-01-11T01:23:30.941Z"
 *     },
 *     "candidate": {
 *       "id": 3,
 *       "name": "candidate",
 *       "userId": 14,
 *       "phone": "41241241",
 *       "cpf": "3423423411",
 *       "updatedAt": "2020-01-11T02:08:23.063Z",
 *       "createdAt": "2020-01-11T02:08:23.063Z"
 *      }
 *  }
 * 
* @apiError (422 - UNPROCESSABLEENTITY) ValidationError.errors[] Listagem de campos inválidos
* @apiError (500 - SERVERERROR) ServerError Mensagem contendo a razão
*/

/** Job */

/**
 * @api {get} /job/list Lista vagas disponíveis
 * @apiGroup Job
 * @apiUse AuthorizationToken
 * 
 * @apiSuccess {String} message success
 * @apiSuccess {Object} jobs Lista de vagas cadastradas
 * 
 * @apiSuccessExample {json} Resposta:
 *  HTTP/1.1 200 OK
 *  {
 *    "message": "success",
 *    "jobs": [
    *     {
    *      "id": 1,
    *      "name": "Backend developer",
    *      "description": "Backend developer things",
    *      "createdAt": "2020-01-11T01:41:04.000Z",
    *      "updatedAt": "2020-01-11T01:41:04.000Z",
    *      "deletedAt": null
    *     },
 *     ]
 *  }
 * 
 * @apiError (500 - SERVERERROR) ServerError Mensagem contendo a razão
*/

/**
 * @api {post} /job/create Cria vagas de emprego
 * @apiGroup Job
 * @apiUse AuthorizationTokenAdmin
 * 
 * @apiParam {String} name Nome da vaga
 * @apiParam {String} description Descrição da vaga
 * 
 * @apiSuccess {String} message success
 * @apiSuccess {Object} job Vaga criada
 * 
 * @apiSuccessExample {json} Resposta:
 *  HTTP/1.1 201 OK
 *  {
 *   "message": "success",
 *   "job": {
 *       "id": 21,
 *       "name": "Backend developer",
 *       "description": "Backend developer things",
 *       "updatedAt": "2020-01-11T01:41:08.431Z",
 *       "createdAt": "2020-01-11T01:41:08.431Z"
 *    }
 *  }
 * @apiError (403 - FORBIDDEN) Forbidden Mensagem contendo a razão
 * @apiError (422 - UNPROCESSABLEENTITY) ValidationError.errors[] Listagem de campos inválidos
 * @apiError (500 - SERVERERROR) ServerError Mensagem contendo a razão
*/

/**
 * @api {post} /job/apply Se candidata a uma vaga
 * @apiGroup Job
 * @apiUse AuthorizationTokenCandidate
 * 
 * @apiParam {Number} candidate_id Id do candidato
 * @apiParam {Number} job_id Id da vaga
 * 
 * @apiSuccess {String} message success
 * @apiSuccess {Object} application Candidatura criada
 * 
 * @apiSuccessExample {json} Resposta:
 *  HTTP/1.1 201 OK
 *  {
 *   "message": "success",
 *   "application": {
 *       "id": 1,
 *       "candidateId": "1",
 *       "jobId": "7",
 *       "updatedAt": "2020-01-11T02:24:15.686Z",
 *       "createdAt": "2020-01-11T02:24:15.686Z"
 *    }
*    }
 * @apiError (403 - FORBIDDEN) Forbidden Mensagem contendo a razão
 * @apiError (404 - NOTFOUND) NotFound Mensagem contendo a razão
 * @apiError (409 - CONFLICT) Conflict Mensagem contendo a razão
 * @apiError (422 - UNPROCESSABLEENTITY) ValidationError.errors[] Listagem de campos inválidos
 * @apiError (500 - SERVERERROR) ServerError Mensagem contendo a razão
*/

/** Application */

/**
 * @api {get} /application/list Lista as candidaturas
 * @apiGroup Application
 * @apiUse AuthorizationToken
 * 
 * @apiSuccess {String} message success
 * @apiSuccess {Object} applications Se autenticado como Admin mostra todas as candidaturas feitas, se candidato mostra todas deste
 * 
 * @apiSuccessExample {json} Resposta:
 *  HTTP/1.1 200 OK
 *   {
 *    "message": "success",
 *    "applications": [
 *       {
 *           "id": 1,
 *           "candidateId": 1,
 *           "jobId": 7,
 *           "createdAt": "2020-01-11T02:24:15.000Z",
 *           "updatedAt": "2020-01-11T02:24:15.000Z",
 *           "deletedAt": null
 *       },
 *     ]
 *    }
 * @apiError (500 - SERVERERROR) ServerError Mensagem contendo a razão
*/

/**
 * @api {post} /application/comment Adiciona um comentário a candidatura
 * @apiGroup Application
 * @apiUse AuthorizationTokenAdmin
 * 
 * @apiParam {Number} application_id Id da candidatura
 * @apiParam {String} text Texto do comentário
 * 
 * @apiSuccess {String} message success
 * @apiSuccess {Object} application_comment Comentário criado
 * 
 * @apiSuccessExample {json} Resposta:
 *  HTTP/1.1 201 OK
 *   {
 *    "message": "success",
 *    "application_comment": {
 *       "id": 1,
 *       "applicationId": "1",
 *       "text": "Bom teste",
 *       "updatedAt": "2020-01-11T02:36:58.308Z",
 *       "createdAt": "2020-01-11T02:36:58.308Z"
 *      }
 *    }
 * @apiError (403 - FORBIDDEN) Forbidden Mensagem contendo a razão
 * @apiError (404 - NOTFOUND) NotFound Mensagem contendo a razão
 * @apiError (422 - UNPROCESSABLEENTITY) ValidationError.errors[] Listagem de campos inválidos
 * @apiError (500 - SERVERERROR) ServerError Mensagem contendo a razão
*/

/**
 * @api {get} /application/:application_id/comments Lista comentários de uma candidatura
 * @apiGroup Application
 * @apiUse AuthorizationTokenAdmin
 * 
 * @apiSuccess {String} message success
 * @apiSuccess {Object} application_comment Lista de comentários de uma candidatura
 * 
 * @apiSuccessExample {json} Resposta:
 *  HTTP/1.1 200 OK
 *   {
 *    "message": "success",
 *   "application_comments": [
 *       {
 *           "id": 1,
 *           "applicationId": 1,
 *           "text": "bom teste",
 *           "createdAt": "2020-01-11T02:36:58.000Z",
 *           "updatedAt": "2020-01-11T02:36:58.000Z",
 *           "deletedAt": null
 *       }
 *     ]
 *    }
 * @apiError (404 - NOTFOUND) NotFound Mensagem contendo a razão
 * @apiError (500 - SERVERERROR) ServerError Mensagem contendo a razão
*/

