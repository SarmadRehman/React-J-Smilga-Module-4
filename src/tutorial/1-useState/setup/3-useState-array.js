import React from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  //people is now on default having the array of 'data'
  const removeItem = (id) => {
    // this will filter out the array for the exception of given id
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            {/* arrow function so that to trigger when clicked */}
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {/* setting the state of 'people' to an empty array, clearing everything */}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
