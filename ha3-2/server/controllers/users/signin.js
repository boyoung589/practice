const { user } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = (req, res) => {
  // TODO: 로그인 정보를 통해 사용자 인증 후 토큰 전달
  /*
  console.log("리퀘스트가 뭐가 들었지?", req.body)
  { email: 'hoyong@codestates.com', password: 'password' }
  1. req.body.email, password === db.email, password
     ok메시지와 상태코드 200이 응답에 포함되어야 합니다.

  2. 잘못된 경우 invalid user 메시지와 404응답

  3. 로그인 성공시 쿠키로 jwt토큰을 전달
  */

  res.status(500).send('');
};
