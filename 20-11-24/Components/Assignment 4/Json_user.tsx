import { useState, useEffect } from "react";

const Json_User = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const getAllProfiles = async () => {
      const response = await fetch("http://localhost:3000/profile");
      const apiResponse = await response.json();

      console.log(apiResponse);

      setProfile(apiResponse);
    };

    getAllProfiles();
  }, []);

  return (
    <div>
      <h1>Profile using data from Json Server</h1>
      {profile ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Age: {profile.age}</p>
          <p>Designation: {profile.designation}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Json_User;
