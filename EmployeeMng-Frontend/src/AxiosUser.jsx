import React from 'react'
import axios from 'axios';

export default function AxiosUser() {

    axios.get("https://jsonplaceholder.typicode.com/users/1")
    .then((res)=>{

        console.log(res);
    })
    .catch((error)=>{
        console.log("error"+error)
    })
  return (
    <div>
        {/* <h1>this is User axios page</h1> */}
    </div>
  )
}
