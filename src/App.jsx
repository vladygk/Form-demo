import React, { useEffect, useState } from "react";
import Main from "./Main"
import Header from "./Header"
export default function App() {
  
    const [theme,setTheme] = useState("light");
    function changeHandler(event){
       const {value} = event.target;
       setTheme(value);
       console.log(theme);
    }
    const mainClassName = theme === "light"? "light" : "dark";

    return <>
<Header changeHandler={changeHandler} />
<Main className={mainClassName}/>
    </>
}
