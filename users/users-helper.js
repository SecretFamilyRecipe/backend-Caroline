module.exports = {
    isValid,
  };
  
  function isValid(user) {
    return Boolean(user.user_username && user.user_password );
  }
  