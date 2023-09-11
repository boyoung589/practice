require('dotenv').config();
const { sign, verify, JsonWebTokenError } = require('jsonwebtoken');
// const jwt = require('jsonwebtoken')
const accessKey = process.env.ACCESS_SECRET;

module.exports = {
  generateAccessToken: (data) => {
    // TODO: Access token으로 sign합니다.
    // HINT: 토큰을 리턴하세요. (공식 문서의 Synchronous한 방법을 사용합니다)
    const {id, email, username, mobile, createdAt, updatedAt} = data.dataValues;
    const accessToken = sign(
      {
        id, email, username, mobile, createdAt, updatedAt
      }, accessKey,{
        algorithm: 'HS256',
        expiresIn: '1h'
      }
    );
    return accessToken;
  },
  sendAccessToken: (res, accessToken) => {
    // TODO: JWT 토큰을 쿠키로 전달합니다.
    return res.cookie('jwt', accessToken)
  },
  isAuthorized: (req) => {
    // TODO: JWT 토큰 정보를 받아서 검증합니다.
    // HINT: jsonwebtoken 라이브러리의 verify 함수를 사용하여 decode된 payload를 리턴하세요. (공식 문서의 Synchronous한 방법을 사용합니다)
    // const headerAuth = req.headers.cookie.split('=')[1].split(';')[0];
    // console.log("리퀘스트가 뭔데!!!",req.cookies.jwt)
    /*
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJpZCI6MSwiZW1haWwiOiJob3lvbmdAY29k
    ZXN0YXRlcy5jb20iLCJ1c2VybmFtZSI6Imhv
    eW9uZyIsIm1vYmlsZSI6IjAxMC0xMjM0LTU2
    NzgiLCJjcmVhdGVkQXQiOiIyMDIwLTEwLTEw
    VDEwOjAwOjEyLjAwMFoiLCJ1cGRhdGVkQXQi
    OiIyMDIwLTEwLTEwVDEwOjAwOjEyLjAwMFoi
    LCJpYXQiOjE2NDEyODI1MDQsImV4cCI6MTY0
    MTI4MjUwNH0.OdcAvzywFVKow46-HOG_28ae
    HqxCMaqTSTWg5LjmKc0
    */
    const headerAuth = req.cookies.jwt
    
    if(!headerAuth){
      return null;
    } else{
      return verify(headerAuth, accessKey, (err, decoded) => {
        if(err){
          console.log("에러입니다.",err)
        } else{
          return decoded;
        }
      });
    }
  }
};
