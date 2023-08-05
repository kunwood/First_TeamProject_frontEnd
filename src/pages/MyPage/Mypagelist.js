import React from "react";
import "../../assets/css/mystyle.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Mypagelist() {
    const [id, setId] = useState("")

    const [userName, setUserName] = useState("")


    useEffect(() => {
        let localuser = JSON.parse(localStorage.getItem("user"));
        console.log(localuser.id);
        setId(localuser.id);
        setUserName(localuser.username);
      
      }, []);


  return (
   

      <div className="myPageContents">
        <div className="myPageList">
          <div className="myName">
            <p>{userName}님</p>
          </div>
          <div className="myListDetail">
            <div>
              <h2> 예약확인</h2>
              <p>
                <Link to={"/rmypage/" + id}>
                  객실 &middot; 패키지 예약 내역
                </Link>
              </p>
              <p>
                {/* <Link to={"/rmypage/dmypage/" + id}>다이닝 예약 내역</Link> */}
                {/* <Link to={"/rmypage/dmypage/"+id}>다이닝 예약 내역</Link> */}
              </p>
            </div>
            <div>
              <h2> 관심리스트 </h2>
              <p>
                <Link to={"/rmypage/likeroom/" + id}> 객실 &middot; 패키지 리스트</Link>
              </p>
           
            </div>
            <div>
              <h2> 개인정보관리</h2>
              <p>
                <Link to={"/rmypage/editmember/" + id}>회원정보 수정</Link>
              </p>
              
              <p>
                <Link to={"/rmypage/withdrawal/" + id}>회원 탈퇴</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Mypagelist;
