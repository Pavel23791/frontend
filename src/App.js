import React, {useEffect, useState} from "react";
import axios from 'axios';

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    axios.get('http://localhost:5000/api/users')
    .then(res => {
      setUsers(res.data.users)
    })
    .catch(err => console.log(err.message))
  }

  return(
    <div>
      <ul>

        {
          users.map(user => <li><b>{user.name}</b> | {user.email}</li>)
        }
      </ul>
    
    </div>
  )
}

export default App;