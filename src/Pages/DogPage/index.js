import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


export default function Dog() {
  const [dog, setDog] = useState();

  const [status, setStatus] = useState(false);

  const getDog = () => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      console.log(response.data.message);
      setDog(response.data.message);
      setStatus(true);
    });
  };

  return (
    <>
      <h1>Dog Page</h1>
      <p>Chega mais, se prepare e clique no botão!</p>
      <Link to="/">
        <p>Home</p>
      </Link>
      <button
        onClick={() => {
          getDog();
        }}
      >
        Clique aqui
      </button>

      {status && <Img src={dog} alt="Foto de doguinho" />}
    </>
  );
}
