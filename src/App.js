import React,{ useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUser = (uName, utext) =>{
    
    setUsersList((prevUserList)=>{
      return [...prevUserList, { name: uName, text: utext}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUser}/>
      <UserList users={usersList} />
    </div>
  );
}

export default App;
 