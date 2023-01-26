import magazines from "../../data/data_magazine";
import "./Magazine.css";

function Magazine() {
  return (
    <div className="magazineWrapper">
      {magazines.map(magazine => {
        return (
          <div className="mag" key={magazine.title}>
            <p className="sub">{magazine.sub}</p>
            <h2 className="title">{magazine.title}</h2>
            <p className="category">{magazine.category}</p>
            <img src={magazine.img} alt={`magazine${magazine.id}`} />
          </div>
        );
      })}
    </div>
  );
}
export default Magazine;
