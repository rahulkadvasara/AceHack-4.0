import { ethers } from "ethers";
import ResearchFunding from "./contracts/ResearchFunding.json";

const getEthereumContract = async () => {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            "YOUR_CONTRACT_ADDRESS",
            ResearchFunding.abi,
            signer
        );
        return contract;
    }
    alert("Ethereum wallet is not connected!");
};

export default getEthereumContract;
