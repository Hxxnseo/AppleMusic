import Logo from "./Header/Logo";
import "./Main.css";
import MusicBar from "./Main/MusicBar";

function Main() {
  return (
    <div className="main">
      <MusicBar />
      <div className="description">
        <Logo />
        <div className="h1">Discover new music every day.</div>
        <p>"Get playlists and albums inspired by the artists and genres you’re listening to. 1 month free, then $10.99/month."</p>
        <button type="button">Try it Free</button>
        <a href="https://www.apple.com/apple-music/">Learn More</a>
      </div>
      <img src="./images/main/applemusiic-macbook.webp" alt="applemusiic-macbook" />
    </div>
  );
}
export default Main;
