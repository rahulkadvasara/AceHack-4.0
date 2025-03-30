import React, { useState } from "react";
import { contract, signer } from "../web3";

const FundResearch = () => {
  const [paperId, setPaperId] = useState("");
  const [amount, setAmount] = useState("");

  const handleFund = async () => {
    const tx = await contract.fundPaper(paperId, { value: ethers.utils.parseEther(amount) });
    await tx.wait();
    alert("Research funded successfully!");
  };

  return (
    <div>
      <h2>Fund Research</h2>
      <input type="number" placeholder="Paper ID" onChange={(e) => setPaperId(e.target.value)} />
      <input type="text" placeholder="Amount (ETH)" onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleFund}>Fund</button>
    </div>
  );
};

export default FundResearch;
