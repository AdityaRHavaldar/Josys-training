import "./App.css";
// import TodoApp from "./Components/Examples/Reduser";
import { AuthProvider } from "./Components/Assignment 1/AuthProvider";
import UserProfile from "./Components/Assignment 1/UserProfile";
import Reduser_Bank from "./Components/Assignment 2/Reduser_Bank";
import ReactQuery from "./Components/Assignment 3/ReactQuery";
import Json_User from "./Components/Assignment 4/Json_user";
function App() {
  return (
    <div className="App">
      {/* <div>
      <TodoApp />
    </div> */}
      <div>
        <label>Assignment 1</label>
        <AuthProvider>
          <UserProfile />
        </AuthProvider>
      </div>

      <div>
        <label>Assignment 2</label>
        <Reduser_Bank />
      </div>
      <hr />
      <div>
        <label>Assignment 3</label>
        <ReactQuery />
      </div>
      <hr />
      <div>
        <label>Assignment 4</label>
        <Json_User />
      </div>
    </div>
  );
}

export default App;
