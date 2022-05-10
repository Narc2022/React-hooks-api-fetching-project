import React, { useEffect ,useState } from 'react'
import "./table.css"

const UseEffectTable = () => {

    const [users,setUsers] = useState([]);


  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    setUsers(await response.json());
    
  }

  useEffect(() => {
    getUsers();
  },[]);
  return (
    <>
        <h2>List of Github table</h2>
        <table border="1px">
            
            <thead>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Website</th>
            </thead>
            
            {
              users.map((data)=>{
                return(
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.website}</td>
                  </tr>
                 
                )
              })
            }
           </table>
    </>
  )
}

export default UseEffectTable