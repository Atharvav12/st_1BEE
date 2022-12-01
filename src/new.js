import React from 'react'
import axios from 'axios'

function Getb(){
    axios.get("http://localhost:4000/mongodb/getAllPost")
.then(data => {console.log(data.data);
// document.getElementById("root2").innerHTML=data.data[0].title
})
.catch(error => console.log(error));
return " ";
}

export default function ew() {
  return (
    <div>
      
    </div>
  )
}