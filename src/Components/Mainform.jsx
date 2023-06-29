import React, { useContext, useState } from "react";

const getId = () => {
  return new Date().getTime().toString();
};

const Mainform = () => {
  let taskCompleted = [];
  const [mainData, setMainData] = useState([]);
  const [taskname, setTaskname] = useState("");
  const [taskdescription, setTaskDescription] = useState("");

  const [Completed, setCompleted] = useState([]);

  const handleDone = (id) => {
    const pendingdata = mainData.filter((itm) => {
      if (itm.id !== id) {
        return itm;
      }
    });
    setMainData(pendingdata);
    const com = mainData.find((itm) => {
      return itm.id === id;
    });

    setCompleted([...Completed, com]);
  };

  const handleDelete = (id)=>{
    setCompleted(Completed.filter(item=>{
      return item.id !==id
    }))
  }

  return (
    <React.Fragment>
      <h1 className="heading">To-Do App</h1>
      <React.Fragment>
        <div className="head">
          <div>
            <input
              type="text"
              placeholder="Task Name"
              value={taskname}
              onChange={(e) => {
                setTaskname(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Description"
              value={taskdescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
            />
          </div>
          <div className="btn">
            <input
              type="button"
              value="Submit"
              onClick={(e) => {
                e.preventDefault();
                setMainData([
                  ...mainData,
                  {
                    name: taskname,
                    description: taskdescription,
                    id: getId(),
                  },
                ]);

                setTaskDescription("");
                setTaskname("");
              }}
            />
          </div>
        </div>
      </React.Fragment>

      <div className="todobg">
        <div className="left">
          <h1>Pending Tasks : {mainData.length}</h1>

          {mainData.map((item) => {
            const { name, description, id } = item;
            return (
              <div className="card" key={id}>
                <div className="item">
                  <h2>Task : {name}</h2>{" "}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDone(id);
                    }}
                  >
                    Done
                  </button>
                </div>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
        <div className="right">
          <h1>Completed Tasks : {Completed.length}</h1>
          {Completed.map((item) => {
            const { name, description, id } = item;
            return (
              <div className="card" key={id}>
                <div className="item">
                  <h2>Task : {name}</h2>{" "}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(id);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Mainform;
