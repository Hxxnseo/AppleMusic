import "./Albums.css";
import albums from "../../data/data_albums3";

function Albums3() {
  return (
    <div className="albumWrapper">
      <h2>New Music &gt;</h2>
      <div className="albums">
        {albums.map(album => {
          return (
            <div className="album">
              <img src={album.img} alt={`album${album.id}`} />
              <p className="title">{album.title}</p>
              <p className="category">{album.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Albums3;
