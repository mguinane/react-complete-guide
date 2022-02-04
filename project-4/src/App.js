import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userage) => {
    console.log(username + " " + userage);
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: username, age: userage, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </>
  );
}

export default App;
