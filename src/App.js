/*eslint-disable */
import "./App.css";
import Browse from "./components/Browse";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <wrapper className="wrapper">
        <Header />
        {/* <Main /> */}
        <Browse />
      </wrapper>
    </div>
  );
}

export default App;
