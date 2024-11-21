import "./App.css";
// import DeptsCrud from "./Components/Examples/DeptsCrud";
import UsersCrud from "./Components/Assignment 1/UsersCrud";
import TopPurchases from "./Components/Assignment 2/TopPurchases";
function App() {
  return (
    <div className="App">
      {/* <DeptsCrud /> */}
      <UsersCrud />
      <hr />
      <TopPurchases />
    </div>
  );
}

export default App;
