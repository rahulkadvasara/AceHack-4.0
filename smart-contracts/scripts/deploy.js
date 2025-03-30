const { ethers } = require("hardhat");

async function main() {
    const ResearchFunding = await ethers.getContractFactory("ResearchFunding");
    const contract = await ResearchFunding.deploy();
    console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
