import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useContext, useEffect } from "react";

import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import { createMempelai, getUsers } from "../../methods";
import "./dashboard.scss";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log(currentUser.uid);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "waktu"), {
      tgl: e.target[0].value,
    });
    console.log("Document written with ID: ", docRef.id);
    console.log(typeof e.target[0].value);
  };

  return (
    <div className="dashboard">
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />
        <button type="submit">send</button>
      </form>
      <button onClick={() => getUsers()}>Get Users</button>
      <button onClick={() => createMempelai()}>Create Mempelai</button>
    </div>
  );
};

export default Dashboard;
