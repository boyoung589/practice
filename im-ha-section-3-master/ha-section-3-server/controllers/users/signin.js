const { user } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  // TODO: 로그인 정보를 통해 사용자 인증 후 토큰 전달
  // console.log("리퀘스트가 뭔지 보자", req.body);
  const userInfo = await user.findOne({
    where: { email: req.body.email, password: req.body.password }
  });

  // console.log("유저 인포가 무엇인가???", userInfo);
  /*
  dataValues: {
    id: 1,
    email: 'hoyong@codestates.com',
    password: 'password',
    username: 'hoyong',
    mobile: '010-1234-5678',
    createdAt: 2020-10-10T10:00:12.000Z,
    updatedAt: 2020-10-10T10:00:12.000Z
  },
  */

  if(!userInfo){
    res.status(404).send('invalid user');
  } else {
    //유저인포가 있으면 req.body.email을 갖고 있는 사람이 있다는 것

    const accessToken = generateAccessToken(userInfo);

    sendAccessToken(res, accessToken)
    // console.log("쿠키이이이이이잉",res)
  
    return res.status(200).json({message: 'ok'})

    // console.log("데이터 벨류스",userInfo.dataValues)
    // console.log("어서오시오 토큰씨", generateAccessToken(userInfo))
  }
  // res.status(500).send('');
};
