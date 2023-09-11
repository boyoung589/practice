const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req);
  // TODO: 로그인 여부를 판단하고, Access token payload를 이용하여 응답을 제공하세요.
  // console.log("어스당!!!!!!!!!!리퀘스트 내놔라!!!!!!!!!!!!!", req)
  if(!accessTokenData){
    res.status(401).send({ data: null, message: 'not authorized' });
  } else{
    // console.log("디코드 된 값은???????/", accessTokenData)
    /*
    {
      id: 1,
      email: 'hoyong@codestates.com',
      username: 'hoyong',
      mobile: '010-1234-5678',
      createdAt: '2020-10-10T10:00:12.000Z',
      updatedAt: '2020-10-10T10:00:12.000Z',
      iat: 1641350147,
      exp: 1641353747
    }
    */
    const userInfo = await user.findOne({
      where: {
        email : accessTokenData.email
      }
    })
    const {id, email, username, mobile, createdAt, updatedAt} = userInfo.dataValues
    return res.status(200).json({
      data: {
        userInfo : {
          id: id, 
          email: email,
          username: username, 
          mobile: mobile, 
          createdAt: createdAt, 
          updatedAt: updatedAt
        }
      }
    })
    // console.log('유저인포를 내놓아라!!!!', userInfo)
    /*
    user {
      dataValues: {
        id: 1,
        email: 'hoyong@codestates.com',
        password: 'password',
        username: 'hoyong',
        mobile: '010-1234-5678',
        createdAt: 2020-10-10T10:00:12.000Z,
        updatedAt: 2020-10-10T10:00:12.000Z
      },
      _previousDataValues: {
        id: 1,
        email: 'hoyong@codestates.com',
        password: 'password',
        username: 'hoyong',
        mobile: '010-1234-5678',
        createdAt: 2020-10-10T10:00:12.000Z,
        updatedAt: 2020-10-10T10:00:12.000Z
      },
      uniqno: 1,
      _changed: Set(0) {},
      _options: {
        isNewRecord: false,
        _schema: null,
        _schemaDelimiter: '',
        raw: true,
        attributes: [
          'id',
          'email',
          'password',
          'username',
          'mobile',
          'createdAt',
          'updatedAt'
        ]
      },
      isNewRecord: false
    }
    */
  }
};
