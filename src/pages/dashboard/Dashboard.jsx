import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useContext, useEffect } from "react";
import Input from "../../components/Input";

import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import { createMempelai, getUsers } from "../../methods";
import "./dashboard.scss";

const Dashboard = () => {
  const [username, setUsername] = useState("");

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log(currentUser.uid);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const namaLengkap = e.target[0].value;
    const nama = e.target.np.value;
    console.log(namaLengkap, nama);
  };

  return (
    <div className="dashboard">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <span>Nama Lengkap</span>
          <input type="text" name="nl" />
        </div>
        <input type="text" name="np" />
        <button type="submit">send</button>
      </form>
      <h1>{username}</h1>
    </div>
  );
};

export default Dashboard;
