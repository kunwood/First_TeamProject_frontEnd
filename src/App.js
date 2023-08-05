import './App.css';
import './assets/css/style.css'
import { Route, Routes, Link, useLocation } from 'react-router-dom';
// 공유저장소를 위한 import
import { useDispatch, useSelector } from "react-redux";
// 액션함수를 위한 import
import { logout } from "./store/actions/auth";
import { clearMessage } from "./store/actions/message";
// react 라이브러리 import
import { useState, useEffect, useCallback } from "react";
// bootstrap css import
import "bootstrap/dist/css/bootstrap.min.css";




import Main from './pages/Main';
import Room from './pages/Room/Room';
// import Nav from './components/common/Nav.js';
// import Footer from './components/common/Footer';
import Package from './pages/Package/Package';
import Detailpages1 from './pages/Package/Detailpages1';
import Detailpages2 from './pages/Package/Detailpages2';
import Detailpages3 from './pages/Package/Detailpages3';
import Detailpages4 from './pages/Package/Detailpages4';
import Detailpages5 from './pages/Package/Detailpages5';
import Detailpages6 from './pages/Package/Detailpages6';
import Reserve from './pages/Reserve';
import RoomDetail from './pages/Room/roomDetail/RoomDetail';
import Facilities from './pages/Facilities/Facilities';
import Outpool from './pages/Facilities/Outpool';
import Pool from './pages/Facilities/Pool';
import Fitness from './pages/Facilities/Fitness';
import Sauna from './pages/Facilities/Sauna';
import Spa from './pages/Facilities/Spa';
import Kidszone from './pages/Facilities/Kidszone';
import Booking from './pages/Booking';
import Dining from './pages/Dining/Dining';
import Dmypage from './pages/MyPage/Dmypage';
import Ndata1 from './pages/Notice/Ndata1';
import Ndata2 from './pages/Notice/Ndata2';
import Ndata3 from './pages/Notice/Ndata3';
import Ndata4 from './pages/Notice/Ndata4';
import Notice from './pages/Notice/Notice';
import Rmypage from './pages/MyPage/Rmypage';
import Cafe from './pages/Dining/diningDetail/Cafe';
import Japanese from './pages/Dining/diningDetail/Japanese';
import Korea from './pages/Dining/diningDetail/Korea';
import Loungebar from './pages/Dining/diningDetail/Loungebar';
import Western from './pages/Dining/diningDetail/Western';
import RoomDetail1 from './pages/Room/roomDetail/RoomDetail1';
import RoomDetail2 from './pages/Room/roomDetail/RoomDetail2';
import RoomDetail3 from './pages/Room/roomDetail/RoomDetail3';
import BoardAdmin from './pages/login/BoardAdmin';
import BoardUser from './pages/login/BoardUser';
import Home from './pages/login/Home';
import Login from './pages/login/Login';
import Profile from './pages/login/Profile';
import Register from './pages/login/Register';
import Mypagelist from './pages/MyPage/Mypagelist';
// import AboutUs from './pages/AboutUs'
import Withdrawal from './pages/MyPage/Withdrawal';
import Likeroom from './pages/MyPage/Likeroom';
import Editmember from './pages/Editmember';
import Lightslider from './pages/Lightslider';



function App() {

    // 변수 정의
  // showAdminBoard = true 이면 어드민 메뉴 보이게하고,
  // 아니면 (false) 안보이게 하는 변수
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  // 공유저장소 의 user 객체 정보 가져오기 
  // currentUser = 공유저장소user(현재 로그인한 유저)
  const { user: currentUser } = useSelector((state) => state.auth);
  // 공유저장소의 액션함수를 실행하기 위한 함수 정의 
  const dispatch = useDispatch();

  // 현재 페이지의 url 정보를 가져오는 훅함수
  let location = useLocation();

  // 화면 시작 이벤트 함수
  // dispatch, location 변경여부 감시해서 변경되면 재실행
  useEffect(() => {
    // 현재 url 정보 : location.pathname
    // 현재 url 정보가 /login , /register 이면
    // 화면에 에러메세지를 지우기 실행
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  // 로그아웃 함수 : 공유저장소의 액션함수(logout()) 호출
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  // 화면 시작하면 실행되는 이벤트 함수
  // currentUser, logOut 변경여부 감시 재실행
  useEffect(() => {
    // currentUser(로그인한 유저)
    if (currentUser) {
      // ROLE_ADMIN 권한 있는지 체크해서 있으면 
      // showAdminBoard = true 저장
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      // ROLE_ADMIN 권한 없으면 , false 저장
      setShowAdminBoard(false);
    }
  }, [currentUser, logOut]);

  const background = location.state && location.state.background;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        {/* <Route path="/package" element={<Package />} /> */}
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/room" element={<Room />} />
        <Route path="/package" element={<Package />} />
        <Route path="/roomdetail" element={<RoomDetail />} />
        <Route path="/roomdetail1" element={<RoomDetail1 />} />
        <Route path="/roomdetail2" element={<RoomDetail2 />} />
        <Route path="/roomdetail3" element={<RoomDetail3 />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/booking" element={<Booking />}/>
        <Route path="/booking/checkIn/:checkInShot/checkOut/:checkOutShot/rtype/:roomType" element={<Booking />} />
        <Route path="/reserve/rtype/:rtype/checkIn/:checkIn/checkOut/:checkOut" element={<Reserve />} />

        <Route path="/dining" element={<Dining />}/>
        <Route path="/cafe" element={<Cafe />}/>
        <Route path="/japanese" element={<Japanese />}/>
        <Route path="/korea" element={<Korea />}/>
        <Route path="/loungebar" element={<Loungebar />}/>
        <Route path="/western" element={<Western />}/>

        <Route path="/dmypage" element={<Dmypage />}/>
        <Route path="/rmypage" element={<Rmypage />}/>
        {/* <Route path="/aboutus" element={<AboutUs />}/> */}
        <Route path="/ndata1" element={<Ndata1 />}/>
        <Route path="/ndata2" element={<Ndata2 />}/>
        <Route path="/ndata3" element={<Ndata3 />}/>
        <Route path="/ndata4" element={<Ndata4 />}/>
        <Route path="/notice" element={<Notice />}/>


        <Route path="/detailpages1" element={<Detailpages1 />} />
        <Route path="/detailpages2" element={<Detailpages2 />} />
        <Route path="/detailpages3" element={<Detailpages3 />} />
        <Route path="/detailpages4" element={<Detailpages4 />} />
        <Route path="/detailpages5" element={<Detailpages5 />} />
        <Route path="/detailpages6" element={<Detailpages6 />} />
      

        <Route path="/lightslider" element={<Lightslider />} />
        <Route path="/boardadmin" element={<BoardAdmin />} />
        <Route path="/boarduser" element={<BoardUser />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />


        <Route path="/outpool" element={<Outpool />} />
        <Route path="/pool" element={<Pool />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/sauna" element={<Sauna />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/kidszone" element={<Kidszone />} />
        <Route path="/mypagelist" element={<Mypagelist />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/likeroom" element={<Likeroom />} />
        <Route path="/editmember" element={<Editmember />} />
        </Routes>
        {/* <Footer /> */}

              {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
}

export default App;
