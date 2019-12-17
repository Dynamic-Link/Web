import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "./../../context/UserContext";

export const AddLinkForm = () => {
  const { user, setUser } = useContext(UserContext);

  const baseURL = "http://localhost:8080";
  let [linkName, setLinkName] = useState("");
  let [product, setProduct] = useState("");
  let [promotions, setPromotions] = useState("");
  let [notes, setNotes] = useState("");
  let [defaultUrl, setDefaultUrl] = useState("");
  let [utmParmeters, setUtmParameters] = useState("");

  const onChangeLinkName = e => {
    setLinkName(e.target.value);
  };

  const onChangeProduct = e => {
    setProduct(e.target.value);
  };

  const onChangePromotions = e => {
    setPromotions(e.target.value);
  };

  const onChangeNotes = e => {
    setNotes(e.target.value);
  };

  const onChangeDefaultUrl = e => {
    setDefaultUrl(e.target.value);
  };

  const onChangeUtmParameters = e => {
    setUtmParameters(e.target.value);
  };

  const onSubmit = () => {
    axios
      .post(
        `${baseURL}/api/addLink`,
        {
          email: user.email,
          linkName,
          product,
          promotions,
          notes,
          defaultUrl,
          utmParmeters
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2>Add Link</h2>
      <input
        type="text"
        placeholder="Link Name"
        value={linkName}
        onChange={onChangeLinkName}
      />
      <input
        type="text"
        placeholder="Product"
        value={product}
        onChange={onChangeProduct}
      />
      <input
        type="text"
        placeholder="Promotions"
        value={promotions}
        onChange={onChangePromotions}
      />
      <input
        type="text"
        placeholder="Notes"
        value={notes}
        onChange={onChangeNotes}
      />
      <input
        type="text"
        placeholder="Default URL"
        value={defaultUrl}
        onChange={onChangeDefaultUrl}
      />
      <input
        type="text"
        placeholder="UTM Parameters"
        value={utmParmeters}
        onChange={onChangeUtmParameters}
      />
      <button onClick={() => onSubmit()}>Add Link</button>
    </div>
  );
};
