import React from "react";

const Contacts = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-4 m-4">Contact Us</h1>
      <form action="">
        <input
          type="text"
          className="border border-black rounded-lg p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black rounded-lg p-2 m-2"
          placeholder="Message"
        />
        <button className="border border-black p-2 rounded-lg bg-gray-100 text-green-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contacts;
