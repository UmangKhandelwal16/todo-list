import React, { useState } from 'react';

export const TodoList = () => {
  const [activity, setActivity] = useState('');
  const [listdata, setListdata] = useState([]);

  const addActivity = () => {
    setListdata((prevListdata) => {
      const updatedList = [...prevListdata, { activity, completed: false }];
      setActivity('');
      return updatedList;
    });
  };

  const removeActivity = (i) => {
    const updatedListdata = listdata.filter((elem, id) => {
      return i !== id;
    });
    setListdata(updatedListdata);
  };

  const markCompleted = (i) => {
    const updatedListdata = [...listdata];
    updatedListdata[i].completed = true;
    setListdata(updatedListdata);
  };

  const removeAll = () => {
    setListdata([]);
  };

  return (
    <>
      <div className="container">
        <div className="header"> Todo List </div>
        <input
          type="text"
          placeholder="Add activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>

        {listdata.length > 0 && (
          <p className="List-heading">Here is your List :</p>
        )}

        {listdata.map((data, i) => {
          return (
            <div key={i}>
              <p className="listData">{data.activity}</p>
              <div className="btn-position">
                <button onClick={() => removeActivity(i)}>Remove</button>
                <button
                  onClick={() => markCompleted(i)}
                  disabled={data.completed}
                >
                  Completed
                </button>
              </div>
            </div>
          );
        })}

        {listdata.length > 1 && <button onClick={removeAll}>Remove All</button>}
      </div>
    </>
  );
};
