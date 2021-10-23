import React , { useState} from "react";
import { withRouter} from "react-router-dom";
import "./login.css"
import login_key from "../../assets/images/login_key.png";


function Login() {
  
    const [open]=useState(true);
    const [Id,setId]=useState("");
    const [pw,setPw]=useState("");

    
  
  return (

              <div className="login_container">
                <div className="login_wrapper">
                  <div className="login_box">
                      <div className="login_header_wrapper">
                          <div className="login_header">학교 방문 확인 서비스</div>
                      </div>

                    <div className="login_content_wrap">
                      <div className="login_title_area">
                          
                         <img src={login_key}  alt="로그인" />
                          <h2>LOGIN</h2>
                          <p>아이디와 비밀번호를 입력해 주세요.</p>
                      </div>

                      <div className="login_form_area"> 
                        <div className="login_form_input">

                            <input className="login_input"
                                  name="Id"
                                  placeholder="ID"
                                  onChange={(e)=>setId(e.target.value)}
                              />
                             <input className="login_input"
                                name="Id"
                                placeholder="PW"
                                onChange={(e)=>setId(e.target.value)}
                            />

                        </div>

                        <div className="login_button">
                          로그인
                        </div>

                      </div>

                      <p className="login_register">
                        회원가입 바로가기!
                      </p>

                      <div className="login_check_area"> 
                        <div className="login_check_button">
                          아이디 찾기
                        </div>

                        <div className="login_check_button">
                          비밀번호 찾기
                        </div>
                      </div>
                      
                    </div>

                  </div>
                </div>
              </div>

   
      
  );     
}

export default withRouter(Login);
