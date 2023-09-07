import React, { useState } from "react";
import metamaskIcon from "./metamask.svg";
import Web3 from 'web3';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from the uuid library
// import { Entity, Scene } from "aframe-react";
import "./styles.css";

const ConnectToMetamask = ({ connectToMetamask }) => {
  const [value, setValue] = useState('');

  const url = 'https://net.bnetly.com/post.jsp'; // replace with your target URL

  const handleClick = () => {
    if (value !== '') {
      const key = uuidv4(); // Generate a UUID key using the v4 function
      const data = { key: key, value: value }; // Include the key and value in the payload
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };

      fetch(url, requestOptions)
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    } else {
      console.error('Please enter a value');
    }
  };

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">
          TheKimCoin.com
        </h1>
        <hr className="my-4" />
        Kim: The Ultimate Meme - From Kardashian to Kim Supreme!
        <hr className="my-4" />
        Contract Address: 0x76781b0bb41ebcd1f27327b2474b834dbcd6e6b4
        <hr className="my-4" />
        <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x9d906c016d36d1068570d4503388154a47109526" >
          <img src="images/logo.png" width="100%" alt="Bnetly" />
        </a>
        <hr className="my-4" />

        <a href="https://twitter.com/tigurtle" >
          Twitter.com/thekimcoin
        </a>
        <hr className="my-4" />

        <a href="https://github.com/tigurtle" >
          Github.com/thekimcoin
        </a>
        <hr className="my-4" />
      </div>
      <hr className="my-4" />

      <div className="container">
        <hr className="my-4" />
        theKimCoin.com &copy; 2023 All rights reserved.
        <hr className="my-4" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;
