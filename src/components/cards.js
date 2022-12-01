import React from 'react'

function Getb(){
    axios.get("http://localhost:4000/backend/getAllPost")
.then(data => {console.log(data.data);
<Makecards name={data.data}></Makecards>
})
.catch(error => console.log(error));
return " ";
}

export default function Cards() {
  return (
    <div>
      
    </div>
  )
}
