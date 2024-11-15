import "./App.css";
import GreetingAny from "./Components/01.Props_any_Greeting";
import UserDetails from "./Components/Assignment_1/UserDetails";
import CRUD_Operations from "./Components/Assignment_2/CRUD_Operations";
import ToDoList from "./Components/Assignment_3/ToDoList";
import Greetings from "./Components/Greeting";

function App() {
  // let user1: string = "Ravi";
  // let user2: string = "Ragu";

  // let usersArray: string[] = ["Alex", "Alen", "Amar", "Ameen"];

  // let results: JSX.Element[] = usersArray.map((user: string) => {
  //   return <Greetings uname={user} textColor="blue" />;
  // });

  return (
    <div>
      {/* <h3>Developing Web Apps using React with TypeScript</h3>
      <hr />
      <GreetingAny uname="Narasimha" textColor="green" />
      <Greetings uname="Scott" textColor="red" />
      <hr />
      <Greetings uname={user1} textColor="green" />
      <Greetings uname={user2} textColor="red" />
      <hr />

      {results} */}
      <UserDetails />
      <hr />
      <CRUD_Operations />
      <hr />
      <ToDoList />
    </div>
  );
}

export default App;
