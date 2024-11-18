import "./UserDetails.css";
function UserDetails() {
  const users = {
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [
      {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
      },
      {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
      },
      {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg",
      },
      {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg",
      },
      {
        id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://reqres.in/img/faces/5-image.jpg",
      },
      {
        id: 6,
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://reqres.in/img/faces/6-image.jpg",
      },
    ],
    support: {
      url: "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
      text: "Tired of writing endless social media content? Let Content Caddy generate it for you.",
    },
  };

  const usersComponents = users.data.map((user) => {
    return (
      <div className="user">
        <img src={user.avatar} alt="Avatar" className="userImage" />
        <h3 className="nserName">{user.first_name + " " + user.last_name}</h3>
        <span className="userEmail">{user.email}</span>
      </div>
    );
  });

  return (
    <>
      <h1 className="userHeading">User Details</h1>
      <div className="userContainer">{usersComponents}</div>
    </>
  );
}

export default UserDetails;