import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "./../../context/UserContext";
import { AddLinkForm } from "../AddLinkForm/AddLinkForm";

const Dashboard = props => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const headers = { token: props.token };

    axios
      .get(`${props.baseURL}/api/account/getUser`, {
        headers
      })
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, [user]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.email}</p>
      {console.log(user.links)}
      {user.links !== undefined
        ? user.links.map(link => {
            return (
              <div>
                <p>{link.linkName}</p>
                <p>{link.product}</p>
                <p>{link.promotions}</p>
                <p>{link.notes}</p>
                <p>{link.defaultUrl}</p>
                <p>{link.utmParameters}</p>
              </div>
            );
          })
        : null}

      <AddLinkForm />

      {console.log("user:", user)}
    </div>
  );
};

export default Dashboard;
