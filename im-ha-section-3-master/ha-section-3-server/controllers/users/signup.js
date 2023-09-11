const { user } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.
  // console.log("회원가입 요청이 왔대!!!!!!",req.body)
  /*{
      email: 'testuser@gmail.com',
      password: 'test',
      username: 'testuser',
      mobile: '010-0987-6543'
    }
  */
  const {username, email, password, mobile} = req.body;
 
  if(!username || !email || !password || !mobile){
   //username, email, password, mobile 파라미터 중 하나라도 요청에서 제공되지 않았다면 
   //422(unprocessable entity) 상태코드로 응답을 돌려줘야 합니다.
   res.status(422).send('insufficient parameters supplied');
  } else {
    //해당 유저 email이 이미 데이터베이스에 존재한다면 409(conflict) 상태코드로 응답을 돌려줘야 합니다.
    await user.findOrCreate({
      where: {email},
      defaults: {
        username, email, password, mobile,
      }
    }).then(([users, created]) => {
      console.log("데이터베이스에 잘 추가됐나???", users)
      if(!created){
        return res.status(409).send('email exists');
      } else{
        //회원가입 요청이 성공하면 상태코드 201와 JWT 토큰이 응답에 포함되어야 합니다
        const tokenMade =  generateAccessToken(users);
        sendAccessToken(res, tokenMade);
        return res.status(201).json({message: 'ok'})
      }
    }).catch((err => {
      console.log("에러입니디ㅏ",err)
    }))
  }
  // try{
  //   //전달받은 유저 정보
  //   const { username, password, mobile, email } = req.body;
  //   //하나라도 놓치는 경우
  //   if(!username || !password || !mobile || !email){
  //     return res.status(422).send("insufficient parameters supplied");
  //   } else { //다 충족한 경우
  //     await user.findOrCreate({ //findOrCreate 사용
  //       where: { email: email }, //해당 유저 이메일과 일치하는 정보 찾기
  //       defaults: { //만약에 못 찾으면 아래 필드들 가지고 새롭게 생성
  //         username: username, 
  //         password: password, 
  //         mobile: mobile, 
  //         email: email 
  //       }
  //     }).then(([result, created]) => { //성공하면
  //       if(!created) { //이미 존재하는 경우
  //         return res.status(409).send("email exists");
  //       } else { //새로 생성한 경우
  //         console.log("결과값은 뭐야???????", result)
  //         console.log("새로 만들어진 값은 뭐야??",created)
  //         const accessToken = generateAccessToken(result);
  //         return res.status(201).cookie("jwt", accessToken).json({ message: 'ok' })
  //       }
  //     })
  //   }
  // } catch(err){ //오류 난 경우
  //   return null;
  // }  
};
