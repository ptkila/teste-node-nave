const TokenService = require('../../services/TokenService');

const authenticateUser = async (req, res, next) => {
  try {
    const responseExtractToken = extractJwtToken(req);
    if (responseExtractToken.error) {
      return res.json({
        message: responseExtractToken.message
      });
    }

    const token = responseExtractToken.token;
    const responseValidateToken = await TokenService.validateToken(token);

    if (responseValidateToken.error) {
      return res.json({
        message: responseValidateToken.message,
      });
    }

    var user = responseValidateToken.user;

    req.user = user;
    req.isAdmin = isAdmin(user);

    next();

  } catch (error) {
    return res.json({
      message: error.message
    });
  }
}

const extractJwtToken = req => {
  if (!Reflect.ownKeys(req.headers).includes('authorization')) {
    return {
      message: 'Header "authorization" not found',
      error: 1,
      token: null
    };
  }
  const token = req.headers['authorization'];
  return {
    message: 'Token found',
    error: 0,
    token: token,
  };
}

const isAdmin = () => {
  return user.role == 'App//Admin'
}

module.exports = {
  authenticateUser: authenticateUser,
};