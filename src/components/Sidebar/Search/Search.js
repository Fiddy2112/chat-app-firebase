import React, { useContext, useState } from "react";
import avatar from "../../../assets/image/avatar.png";
import {
  collection,
  query,
  where,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../config/firebase";
import { AuthContext } from "../../../context/AuthProvider";
import "./Search.css";

function Search() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  // context
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );
    try {
      const querySnapshot = await getDoc(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    // check any group(chats in firestore) exists, if not create

    try {
      const combineId =
        currentUser.uid > user.uid
          ? currentUser.uid + user.uid
          : user.uid + currentUser.uid;

      const response = await getDoc(db, "chats", combineId);
      if (!response.exists()) {
        // create a chat in chats collection
        await setDoc(doc(db, "chats", combineId), { message: [] });

        // create user chats
        // userChats: {
        //   userId: {
        //     combineId:{
        //       userInfo{
        //         displayName,
        //         img,
        //         id,
        //       },
        //       lastMessage:"",
        //       date: Date.now()
        //     }
        //   }
        // }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combineId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combineId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}
    // create user chats
  };
  return (
    <div className="search">
      <div className="search-form">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKey}
          value={userName}
        />
      </div>
      {user && (
        <div className="user-chat" onClick={handleSelect}>
          <img src={user.photoURL} alt="avt-userChat" />
          <div className="user-chat__info">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
