import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/Mycomponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Helloworld i'm spiderman</p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
