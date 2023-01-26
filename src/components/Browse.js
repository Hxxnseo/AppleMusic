import MusicBar from "./Main/MusicBar";
import "./Browse.css";
import Magazine from "./Main/Magazine";
import Albums from "./Main/Albums";

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
      </div>
    </div>
  );
}
export default Browse;
