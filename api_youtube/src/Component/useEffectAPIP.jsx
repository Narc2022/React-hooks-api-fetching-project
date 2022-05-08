import React,{useEffect,useState} from 'react'

const useEffectAPIP1 = () => {
    const [user,setUser] = useState();


  const getUsers = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/10');
    setUser(await response.json());
    console.log(response)
    const dogs = dog.message;
    
  }

  useEffect(() => {
    getUsers();
  },[]);
    return(
      <>
      {
        user.map((data)=>{
          return(
          <img src={data.dogs} alt="" srcset="" />
          )
        })
      }
      </>
    )
   
}

export default useEffectAPIP1