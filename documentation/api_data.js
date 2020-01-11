define({ "api": [
  {
    "type": "get",
    "url": "/application/:application_id/comments",
    "title": "Lista comentários de uma candidatura",
    "group": "Application",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "application_comment",
            "description": "<p>Lista de comentários de uma candidatura</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta:",
          "content": "HTTP/1.1 200 OK\n {\n  \"message\": \"success\",\n \"application_comments\": [\n     {\n         \"id\": 1,\n         \"applicationId\": 1,\n         \"text\": \"bom teste\",\n         \"createdAt\": \"2020-01-11T02:36:58.000Z\",\n         \"updatedAt\": \"2020-01-11T02:36:58.000Z\",\n         \"deletedAt\": null\n     }\n   ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404 - NOTFOUND": [
          {
            "group": "404 - NOTFOUND",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ],
        "500 - SERVERERROR": [
          {
            "group": "500 - SERVERERROR",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ],
        "401 - UNAUTHORIZED": [
          {
            "group": "401 - UNAUTHORIZED",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./documentation.js",
    "groupTitle": "Application",
    "name": "GetApplicationApplication_idComments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth-Token",
            "description": "<p>Json Web Token. Deve seguir o padrão &quot;{{ token_admin }}&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo - Header:",
          "content": "{\n   \"Auth-Token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY2ODU5MjU3LCJleHAiOjE1NjY4NjQyNTd9.PW8LXAw1M0IDen5IeeC-crXo_YbHzWx8EVgpLZkm_J4\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/application/list",
    "title": "Lista as candidaturas",
    "group": "Application",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "applications",
            "description": "<p>Se autenticado como Admin mostra todas as candidaturas feitas, se candidato mostra todas deste</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta:",
          "content": "HTTP/1.1 200 OK\n {\n  \"message\": \"success\",\n  \"applications\": [\n     {\n         \"id\": 1,\n         \"candidateId\": 1,\n         \"jobId\": 7,\n         \"createdAt\": \"2020-01-11T02:24:15.000Z\",\n         \"updatedAt\": \"2020-01-11T02:24:15.000Z\",\n         \"deletedAt\": null\n     },\n   ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500 - SERVERERROR": [
          {
            "group": "500 - SERVERERROR",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ],
        "401 - UNAUTHORIZED": [
          {
            "group": "401 - UNAUTHORIZED",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./documentation.js",
    "groupTitle": "Application",
    "name": "GetApplicationList",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth-Token",
            "description": "<p>Json Web Token. Deve seguir o padrão &quot;{{ token }}&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo - Header:",
          "content": "{\n   \"Auth-Token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY2ODU5MjU3LCJleHAiOjE1NjY4NjQyNTd9.PW8LXAw1M0IDen5IeeC-crXo_YbHzWx8EVgpLZkm_J4\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/application/comment",
    "title": "Adiciona um comentário a candidatura",
    "group": "Application",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "application_id",
            "description": "<p>Id da candidatura</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Texto do comentário</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "application_comment",
            "description": "<p>Comentário criado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta:",
          "content": "HTTP/1.1 201 OK\n {\n  \"message\": \"success\",\n  \"application_comment\": {\n     \"id\": 1,\n     \"applicationId\": \"1\",\n     \"text\": \"Bom teste\",\n     \"updatedAt\": \"2020-01-11T02:36:58.308Z\",\n     \"createdAt\": \"2020-01-11T02:36:58.308Z\"\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "403 - FORBIDDEN": [
          {
            "group": "403 - FORBIDDEN",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ],
        "404 - NOTFOUND": [
          {
            "group": "404 - NOTFOUND",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ],
        "422 - UNPROCESSABLEENTITY": [
          {
            "group": "422 - UNPROCESSABLEENTITY",
            "optional": false,
            "field": "ValidationError.errors[]",
            "description": "<p>Listagem de campos inválidos</p>"
          }
        ],
        "500 - SERVERERROR": [
          {
            "group": "500 - SERVERERROR",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ],
        "401 - UNAUTHORIZED": [
          {
            "group": "401 - UNAUTHORIZED",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./documentation.js",
    "groupTitle": "Application",
    "name": "PostApplicationComment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth-Token",
            "description": "<p>Json Web Token. Deve seguir o padrão &quot;{{ token_admin }}&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo - Header:",
          "content": "{\n   \"Auth-Token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY2ODU5MjU3LCJleHAiOjE1NjY4NjQyNTd9.PW8LXAw1M0IDen5IeeC-crXo_YbHzWx8EVgpLZkm_J4\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do usuário</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT Token válido para futuras requisições</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Detalhes do usuário autenticado</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "candidate/",
            "description": "<p>admin Detalhes da atribuição do usuário autenticado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo - Resposta:",
          "content": "HTTP/1.1 200 OK\n {\n   \"token\": \"...\",\n   \"user\": {\n     \"id\": 1,\n     \"email\": \"tester@test.com\",\n     \"name\": \"Tester\"\n    },\n    \"candidate/ admin\": {\n     \"id\": 1,\n     \"email\": \"tester@test.com\",\n     ...\n    },\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404 - NOTFOUND": [
          {
            "group": "404 - NOTFOUND",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ],
        "422 - UNPROCESSABLEENTITY": [
          {
            "group": "422 - UNPROCESSABLEENTITY",
            "optional": false,
            "field": "ValidationError.errors[]",
            "description": "<p>Listagem de campos inválidos</p>"
          }
        ],
        "500 - SERVERERROR": [
          {
            "group": "500 - SERVERERROR",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./documentation.js",
    "groupTitle": "Authentication",
    "name": "PostLogin"
  },
  {
    "type": "post",
    "url": "/logout",
    "title": "Logout",
    "group": "Authentication",
    "success": {
      "fields": {
        "204 - NOCONTENT": [
          {
            "group": "204 - NOCONTENT",
            "optional": false,
            "field": "No",
            "description": "<p>content</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401 - UNAUTHORIZED": [
          {
            "group": "401 - UNAUTHORIZED",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ],
        "500 - SERVERERROR": [
          {
            "group": "500 - SERVERERROR",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./documentation.js",
    "groupTitle": "Authentication",
    "name": "PostLogout",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth-Token",
            "description": "<p>Json Web Token. Deve seguir o padrão &quot;{{ token }}&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo - Header:",
          "content": "{\n   \"Auth-Token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY2ODU5MjU3LCJleHAiOjE1NjY4NjQyNTd9.PW8LXAw1M0IDen5IeeC-crXo_YbHzWx8EVgpLZkm_J4\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/job/list",
    "title": "Lista vagas disponíveis",
    "group": "Job",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "jobs",
            "description": "<p>Lista de vagas cadastradas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"success\",\n  \"jobs\": [\n   {\n    \"id\": 1,\n    \"name\": \"Backend developer\",\n    \"description\": \"Backend developer things\",\n    \"createdAt\": \"2020-01-11T01:41:04.000Z\",\n    \"updatedAt\": \"2020-01-11T01:41:04.000Z\",\n    \"deletedAt\": null\n   },\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500 - SERVERERROR": [
          {
            "group": "500 - SERVERERROR",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ],
        "401 - UNAUTHORIZED": [
          {
            "group": "401 - UNAUTHORIZED",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./documentation.js",
    "groupTitle": "Job",
    "name": "GetJobList",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth-Token",
            "description": "<p>Json Web Token. Deve seguir o padrão &quot;{{ token }}&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo - Header:",
          "content": "{\n   \"Auth-Token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY2ODU5MjU3LCJleHAiOjE1NjY4NjQyNTd9.PW8LXAw1M0IDen5IeeC-crXo_YbHzWx8EVgpLZkm_J4\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/job/apply",
    "title": "Se candidata a uma vaga",
    "group": "Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "candidate_id",
            "description": "<p>Id do candidato</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "job_id",
            "description": "<p>Id da vaga</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "application",
            "description": "<p>Candidatura criada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta:",
          "content": "HTTP/1.1 201 OK\n{\n \"message\": \"success\",\n \"application\": {\n     \"id\": 1,\n     \"candidateId\": \"1\",\n     \"jobId\": \"7\",\n     \"updatedAt\": \"2020-01-11T02:24:15.686Z\",\n     \"createdAt\": \"2020-01-11T02:24:15.686Z\"\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "403 - FORBIDDEN": [
          {
            "group": "403 - FORBIDDEN",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ],
        "404 - NOTFOUND": [
          {
            "group": "404 - NOTFOUND",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ],
        "422 - UNPROCESSABLEENTITY": [
          {
            "group": "422 - UNPROCESSABLEENTITY",
            "optional": false,
            "field": "ValidationError.errors[]",
            "description": "<p>Listagem de campos inválidos</p>"
          }
        ],
        "500 - SERVERERROR": [
          {
            "group": "500 - SERVERERROR",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ],
        "401 - UNAUTHORIZED": [
          {
            "group": "401 - UNAUTHORIZED",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./documentation.js",
    "groupTitle": "Job",
    "name": "PostJobApply",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth-Token",
            "description": "<p>Json Web Token. Deve seguir o padrão &quot;{{ token_candidato }}&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo - Header:",
          "content": "{\n   \"Auth-Token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY2ODU5MjU3LCJleHAiOjE1NjY4NjQyNTd9.PW8LXAw1M0IDen5IeeC-crXo_YbHzWx8EVgpLZkm_J4\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/job/create",
    "title": "Cria vagas de emprego",
    "group": "Job",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da vaga</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descrição da vaga</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "job",
            "description": "<p>Vaga criada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta:",
          "content": "HTTP/1.1 201 OK\n{\n \"message\": \"success\",\n \"job\": {\n     \"id\": 21,\n     \"name\": \"Backend developer\",\n     \"description\": \"Backend developer things\",\n     \"updatedAt\": \"2020-01-11T01:41:08.431Z\",\n     \"createdAt\": \"2020-01-11T01:41:08.431Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "403 - FORBIDDEN": [
          {
            "group": "403 - FORBIDDEN",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ],
        "422 - UNPROCESSABLEENTITY": [
          {
            "group": "422 - UNPROCESSABLEENTITY",
            "optional": false,
            "field": "ValidationError.errors[]",
            "description": "<p>Listagem de campos inválidos</p>"
          }
        ],
        "500 - SERVERERROR": [
          {
            "group": "500 - SERVERERROR",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ],
        "401 - UNAUTHORIZED": [
          {
            "group": "401 - UNAUTHORIZED",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./documentation.js",
    "groupTitle": "Job",
    "name": "PostJobCreate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth-Token",
            "description": "<p>Json Web Token. Deve seguir o padrão &quot;{{ token_admin }}&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo - Header:",
          "content": "{\n   \"Auth-Token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY2ODU5MjU3LCJleHAiOjE1NjY4NjQyNTd9.PW8LXAw1M0IDen5IeeC-crXo_YbHzWx8EVgpLZkm_J4\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/register-admin",
    "title": "Cadastro de admin",
    "group": "Register",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário para exibição</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>Repetição da senha do usuário</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Detalhes do usuário criado</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "admin",
            "description": "<p>Detalhes do admin criado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta:",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"success\",\n  \"user\": {\n    \"id\": 1,\n    \"email\": \"tester@test.com\",\n    \"password\": \"$2a$10$W2a2kE5Q4g8u6nBDBjIpbead52yBP58uAAEESB1AvfBEXsPbE/2L.\",\n    \"name\": \"Tester\",\n    \"role\": \"App\\\\Admin\",\n    \"updatedAt\": \"2020-01-11T01:21:20.046Z\",\n    \"createdAt\": \"2020-01-11T01:21:20.046Z\"\n   },\n   \"admin\": {\n     \"id\": 6,\n     \"name\": \"dasdasd\",\n     \"userId\": 12,\n     \"updatedAt\": \"2020-01-11T02:05:45.918Z\",\n     \"createdAt\": \"2020-01-11T02:05:45.918Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "403 - FORBIDDEN": [
          {
            "group": "403 - FORBIDDEN",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ],
        "422 - UNPROCESSABLEENTITY": [
          {
            "group": "422 - UNPROCESSABLEENTITY",
            "optional": false,
            "field": "ValidationError.errors[]",
            "description": "<p>Listagem de campos inválidos</p>"
          }
        ],
        "500 - SERVERERROR": [
          {
            "group": "500 - SERVERERROR",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ],
        "401 - UNAUTHORIZED": [
          {
            "group": "401 - UNAUTHORIZED",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./documentation.js",
    "groupTitle": "Register",
    "name": "PostRegisterAdmin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Auth-Token",
            "description": "<p>Json Web Token. Deve seguir o padrão &quot;{{ token }}&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo - Header:",
          "content": "{\n   \"Auth-Token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY2ODU5MjU3LCJleHAiOjE1NjY4NjQyNTd9.PW8LXAw1M0IDen5IeeC-crXo_YbHzWx8EVgpLZkm_J4\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/register-candidate",
    "title": "Cadastro de usuário",
    "group": "Register",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuário para exibição</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>Repetição da senha do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>Telefone do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cpf",
            "description": "<p>Repetição da senha do usuário</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Detalhes do usuário criado</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "candidate",
            "description": "<p>Detalhes do candidato criado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta:",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"success\",\n  \"user\": {\n   \"id\": 3,\n     \"email\": \"candidate@candidate.com\",\n     \"password\": \"$2a$10$TRxDGtzfv/TE9XSeQmfVo.mTbyEN31Nv68RVArECEiu5sxf4ik.5G\",\n     \"role\": \"App\\\\Candidate\",\n     \"updatedAt\": \"2020-01-11T01:23:30.941Z\",\n     \"createdAt\": \"2020-01-11T01:23:30.941Z\"\n   },\n   \"candidate\": {\n     \"id\": 3,\n     \"name\": \"candidate\",\n     \"userId\": 14,\n     \"phone\": \"41241241\",\n     \"cpf\": \"3423423411\",\n     \"updatedAt\": \"2020-01-11T02:08:23.063Z\",\n     \"createdAt\": \"2020-01-11T02:08:23.063Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "422 - UNPROCESSABLEENTITY": [
          {
            "group": "422 - UNPROCESSABLEENTITY",
            "optional": false,
            "field": "ValidationError.errors[]",
            "description": "<p>Listagem de campos inválidos</p>"
          }
        ],
        "500 - SERVERERROR": [
          {
            "group": "500 - SERVERERROR",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Mensagem contendo a razão</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./documentation.js",
    "groupTitle": "Register",
    "name": "PostRegisterCandidate"
  }
] });
