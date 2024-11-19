import { useContext } from "react";
import { contexObj, User } from "../../App";

const GrandChild: React.FC = () => {
  // 3. Context Consumer
  const contextData: User | null = useContext(contexObj);

  return (
    <div style={{ margin: "10px", border: "2px solid Blue" }}>
      <h3>This is Grand Child Component</h3>
      <hr />

      <div>
        <h3> User Details : </h3>
        <p>
          User Id : {contextData?.id} <br />
          User Name : {contextData?.name} <br />
          User Email : {contextData?.email}
        </p>
      </div>
    </div>
  );
};

export default GrandChild;
