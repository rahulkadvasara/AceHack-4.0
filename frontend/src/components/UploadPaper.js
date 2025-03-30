import React, { useState } from "react";
import { contract } from "../web3";

const UploadPaper = () => {
  const [title, setTitle] = useState("");
  const [ipfsHash, setIpfsHash] = useState("");

  const handleUpload = async () => {
    await contract.uploadPaper(title, ipfsHash);
    alert("Paper uploaded successfully!");
  };

  return (
    <div>
      <h2>Upload Research Paper</h2>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="IPFS Hash" onChange={(e) => setIpfsHash(e.target.value)} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadPaper;
