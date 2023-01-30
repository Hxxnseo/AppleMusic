import Logo from "./Header/Logo";
import "./Main.css";
import MusicBar from "./Main/MusicBar";
// import { FaGreaterThan } from "react-icons/fa";

function Main() {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="main">
      <MusicBar />
      <div className="description">
        <Logo />
        <div className="h1">Discover new music every day.</div>
        <p>"Get playlists and albums inspired by the artists and genres you’re listening to. 1 month free, then $10.99/month."</p>
        <button type="button">Try it Free</button>
        <div className="learn">
          <a href="https://www.apple.com/apple-music/">Learn More &gt;</a>
        </div>
      </div>
      <img src={`${path}/images/main/applemusiic-macbook.webp`} alt="applemusiic-macbook" />
    </div>
  );
}
export default Main;
