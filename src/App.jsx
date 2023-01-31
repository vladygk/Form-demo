import React, { useState } from "react";

export default function App() {
  const [ formData, setFormData ] = useState({
    fName: "",
    sName: "",
    gender: "",
    isCool: false,
  });

function handleForm(event){
    
    const {value,name,type,checked} = event.target;
    setFormData((prevFormData)=>{
        return ({...prevFormData,
            [name]: type==="checkbox" ? checked : value
        });
    });
}

function sumbitHandler(event){
    event.preventDefault();
    const message = formData.fName === formData.sName ? "YES" : "NO";
    console.log(message);
}

  return (
    <form onSubmit={sumbitHandler} id="form" action="">
      <label htmlFor="fName"></label>
      <input onChange={handleForm} name="fName" id="fName" type="text" value={formData.fName}  />
      <label name="" htmlFor="sName"></label>
      <input onChange={handleForm} name="sName" id="sName" type="text"  value={formData.sName}/>

      <input onChange={handleForm} name="gender" type="radio" value="Male" />
      <input onChange={handleForm} name="gender" type="radio"  value="Female"/>
      <input onChange={handleForm} name="gender" type="radio" value="Other" />
      <input onChange={handleForm} name="isCool" type="checkbox" checked={formData.isCool} />
      <button>Submit</button>
    </form>
  );
}
