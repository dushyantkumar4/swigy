import React,{useState} from "react";

const User = () => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="border border-black p-10">
      <h1> count = {count}</h1>
      <h1>count2 = {count2}</h1>
      <h2>Dushyant</h2>
      <h3>mainpuri</h3>
      <h4>contact:dushyantkumar4</h4>
    </div>
  );
};

export default User;
