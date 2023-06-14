import React from "react";
import { useState } from "react";

const getId = () => {
  return new Date().getTime().toString();
};

const InputForm = () => {
  const [data, setdata] = useState([]);
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  const [edit, setedit] = useState({ state: false, id: "" });

  return (
    <div className="container">
      <div className="center">
        <h1>To - Do list</h1>

        <form>
          <div className="inputbox">
            <input
              type="text"
              required
              placeholder="Enter Task Title"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div className="inputbox">
            <input
              type="text"
              id=""
              placeholder="Enter Task Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          {edit.state ? (
            <div className="inputbox">
              <input
                type="button"
                value="Edit"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Edit function");
                const temp =  data.map((item)=>{
                  if (item.id === edit.id) {
                    console.log(edit);
                    console.log('if');
                    return {
                      ... data,
                    name : name,
                    desc : description,
                    
                    }
                  }
                  else{
                    console.log('else');
                    return item
                  }
                 
                 })
                 console.log("temp" ,temp);
                 setdata(temp)
                 setedit({...edit , state:false})
                 setname('')
                 setDescription('')
                }}
              />
            </div>
          ) : (
            <div className="inputbox">
              <input
                type="button"
                value="Add"
                onClick={(e) => {
                  e.preventDefault();

                  let temp = {
                    id: getId(),
                    name: name,
                    desc: description,
                  };
                  if (name !== "") {
                    data.push(temp);
                  }

                  setDescription("");
                  setname("");
                }}
              />
            </div>
          )}
        </form>
      </div>
      <hr />

      {data.length === 0 ? (
        <h1 style={{ color: "Blue" }}>No Tasks</h1>
      ) : (
        <div className="items">
          <ul>
            {data.map((item) => {
              const { name, desc, id } = item;
              return (
                <div className="item" key={id}>
                  <li>
                    <span>{name}</span>
                    <span>{desc}</span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();

                        const temp = data.filter((item) => {
                          if (item.id !== id) {
                            return item;
                          }
                        });
                        setdata(temp);
                      }}
                    >
                      Done
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setedit({state:true , id : id})
                        console.log(edit);
                        const temp = data.find((obj) =>{
                          if(obj.id === id){
                            return obj
                          }
                        })
                      setname(temp.name)
                      setDescription(temp.desc)
                      }}
                    >
                      Edit
                    </button>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputForm;
