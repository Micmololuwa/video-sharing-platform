import React from "react";
import Filter from "./Filter";
import SideBar from "./Sidebar";
import "./css/style.css";

export default function NavBar() {
  return (
    <div className="navbar-filter">
      <div className="navbar">
        <div className="left-side">
          <a href="#">
            <img className="logo" src="./images/youtube.svg" alt="youtube" />
          </a>
        </div>

        <div className="middle">
          <input placeholder="Search" />
          <img src="./images/search.svg" alt="search" className="search-icon" />
          <a href="#" className="nav--mic">
            <img className="voice-speech" src="./images/mic.svg" alt="mic" />
          </a>
        </div>

        <div className="right-side">
          <a href="#">
            <img className="video" src="./images/video.svg" alt="ad-video" />
          </a>
          <a href="#">
            {" "}
            <img
              className="bell"
              src="./images/bell.svg"
              alt="notification"
            />{" "}
          </a>
          <a href="#">
            {" "}
            <img
              className="profile"
              src="./images/profile.png"
              alt="profile-pics"
            />{" "}
          </a>
        </div>
      </div>
      <Filter />
    </div>
  );
}

// export default function NavBar() {
//   return (
//     <div className="navigations">
//       {/* <SideBar /> */}

//       <div className="navbar-filter">
//         <div className="navbar">
//           <div className="left-side">
//             <a href="#">
//               <img className="logo" src="./images/youtube.svg" alt="youtube" />
//             </a>
//           </div>

//           <div className="middle">
//             <input placeholder="Search" />
//             <img
//               src="./images/search.svg"
//               alt="search"
//               className="search-icon"
//             />
//             <a href="#" className="nav--mic">
//               <img className="voice-speech" src="./images/mic.svg" alt="mic" />
//             </a>
//           </div>

//           <div className="right-side">
//             <a href="#">
//               <img className="video" src="./images/video.svg" alt="ad-video" />
//             </a>
//             <a href="#">
//               {" "}
//               <img
//                 className="bell"
//                 src="./images/bell.svg"
//                 alt="notification"
//               />{" "}
//             </a>
//             <a href="#">
//               {" "}
//               <img
//                 className="profile"
//                 src="./images/profile.png"
//                 alt="profile-pics"
//               />{" "}
//             </a>
//           </div>
//         </div>
//         <Filter />
//       </div>
//     </div>
//   );
// }
