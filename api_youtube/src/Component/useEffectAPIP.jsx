import React,{useEffect,useState} from 'react'

const useEffectAPIP = () => {
    const [user,setUser] = useState([]);

  

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/10')
    .then((res)=>res.json())
    .then((data)=>{
      setUser(data.message);
      console.log(data.message);
    })
  },[]);
    return(
      <>
      <h2>List of Github User</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {
            user.map((items)=>{
              return(
                <div className="d-flex col-md-4">
                  <img src={items} alt="fdgd" width="100%" height="300"/>
                </div>
              );
            })
          }
         
        </div>
      </div>
  </>
    )
   
}

export default useEffectAPIP
