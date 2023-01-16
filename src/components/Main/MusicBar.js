import "./MusicBar.css";
import MetaControl from "./MusicBar/MetaControl";
import MusicLcd from "./MusicBar/MusicLcd";
import PlayerBar from "./MusicBar/PlayerBar";

function MusicBar() {
  return (
    <div>
      <div className="musicBar__wrapper">
        <div className="musicBar">
          <PlayerBar />
          <MusicLcd />
          <MetaControl />
        </div>
      </div>
    </div>
  );
}
export default MusicBar;
