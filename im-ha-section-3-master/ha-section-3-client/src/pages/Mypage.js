import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

function Mypage ({userinfo, handleLogout}) {
  /* TODO : props로 받은 유저정보를 화면에 표시하세요. */
  //console.log("유저인포가 뭘 받아오는 거야?", userinfo)
  /*
  {
    email: 'coding.kim@codestates.com',
    username: '김코딩',
    mobile: '010-1523-2342'
  }
  */
  console.log("유저인포가 안들어와", userinfo)
  // if(!userinfo){
  //   return null
  // } else
  return (
    <div>
      {userinfo && (
        <center>
          <h1>Mypage</h1>
            <div className='username'>{/* 이름 */userinfo.username}</div>
            <div className='email'>{/* 이메일 */userinfo.email}</div>
            <div className='mobile'>{/* 전화번호 */userinfo.mobile}</div>
            <button className='btn btn-logout' onClick={handleLogout}>
              logout
            </button>
        </center>
        )}
    </div>
  );

}

export default Mypage;
