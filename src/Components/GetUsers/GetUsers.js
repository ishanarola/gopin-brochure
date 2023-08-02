import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase";
const GetUsers = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if(users.length===0){
        const q = query(
            collection(firestore, "users"),
            orderBy("created_at", "desc")
          );
          onSnapshot(q, (querySnapshot) => {
            setUsers(
              querySnapshot.docs.map((doc) => {
                let document = doc.data();
                return {
                  id: doc.id,
                  mobile_number: document.mobile_number,
                  created_at: document.created_at,
                };
              })
            );
            // console.log("users", users);
          });
    }
  
  }, []);
  return <div></div>;
};
export default GetUsers;
