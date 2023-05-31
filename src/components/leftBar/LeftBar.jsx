import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";


const itemMenu = [
  {
    imgIcon: Friends,
    text: "Friends",
    alt: ""

  },
  {
    imgIcon: Groups,
    text: "Groups",
    alt: ""
  },
  {
    imgIcon: Market,
    text: "Market",
    alt: ""
  },
  {
    imgIcon: Watch,
    text: "Watch",
    alt: ""
  },
  {
    imgIcon: Memories,
    text: "Memories",
    alt: ""
  },
]
const shortcuts = [
  {
    imgIcon: Events,
    text: "Events",
    alt:""
  },
  {
    imgIcon: Gaming,
    text: "Gaming",
    alt: ""
  },
  {
    imgIcon: Gallery,
    text: "Gallery",
    alt: ""
  },
  {
    imgIcon: Videos,
    text: "Videos",
    alt: ""
  },
  {
    imgIcon: Messages,
    text: "Messages",
    alt: ""
  },
]

const others = [
  {
    imgIcon: Fund,
    text: "Fundraiser",
    alt:""
  },
  {
    imgIcon: Tutorials,
    text: "Tutorials",
    alt: ""
  },
  {
    imgIcon: Courses,
    text: "Courses",
    alt: ""
  },
]

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span className="span__text">{currentUser.name}</span>
          </div>
          {itemMenu?.map((menu, index) => (<div className="item" key={index}>
            <img src={menu.imgIcon} alt={menu.alt} />
            <span className="span__text">{menu.text}</span>
          </div>))}
        </div>
        <hr />
        <div className="menu">
          <span  className="span__text">Your shortcuts</span>
          {shortcuts?.map((shortcut, index) => ( <div className="item" key={index}>
            <img src={shortcut.imgIcon} alt={shortcut.alt} />
            <span className="span__text">{shortcut.text}</span>
          </div>))}
        </div>
        <hr />
        <div className="menu">
          <span className="span__text">Others</span>
          {others?.map((other, index) =>  (<div className="item" key={index}>
            <img src={other.imgIcon} alt={other.alt} />
            <span className="span__text">{other.text}</span>
          </div>))}
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
