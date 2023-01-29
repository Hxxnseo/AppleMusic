import MusicBar from "./Main/MusicBar";
import "./Browse.css";
import Magazine from "./Main/Magazine";
import Albums from "./Main/Albums";
import Albums2 from "./Main/Albums2";
import Albums3 from "./Main/Albums3";

function Browse() {
  return (
    <div className="browse">
      <MusicBar />
      <div className="mainWrapper">
        <div className="browseH1">
          <h1>Browse</h1>
        </div>
        <Magazine />
        <Albums />
        <Albums2 />
        <Albums3 />
      </div>
    </div>
  );
}
export default Browse;
