import "./Header.css";
import { BsSearch, BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { ImArrowUpRight2 } from "react-icons/im";
import Logo from "./Header/Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="wrap">
        <Logo />
        <div className="search__container">
          <div className="search">
            <form>
              <BsSearch className="searchIcon" />
              <input className="input" type="text" placeholder="Search" />
            </form>
          </div>
        </div>
        <div className="nav__container">
          <div className="nav">
            <ul className="nav--gnb">
              <Link to="/">
                <li>
                  <a href="/">
                    <AiOutlinePlayCircle className="icon" />
                    <span>Listen Now</span>
                  </a>
                </li>
              </Link>
              <Link to="/Browse">
                <li>
                  <a href="/">
                    <HiOutlineSquares2X2 className="icon" />
                    <span>Browse</span>
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="linkto__container">
          <div className="linkto">
            <a href="/">
              <BsMusicNoteBeamed className="note" />
              <span>Open in Music</span>
              <ImArrowUpRight2 />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
