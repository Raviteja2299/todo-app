import { useEffect, useState } from "react";
import "./index.css";

const TaskListt = (items) => {
  const [mode, setmode] = useState(false);

  const [theme, settheme] = useState('');

  useEffect(()=>{
    document.body.className = theme;
  } , [theme])
  
  return (
    <div className="darkmode">
      <div className="button">
        <button
        onClick={(e)=>{
          e.preventDefault();
          setmode(!mode)
          mode? settheme("Light") : settheme("Dark")
          console.log(theme);
        }}
        
        >{!mode? "Light" : "Dark"}</button>
      </div>
    </div>
  );
};

export default TaskListt;
