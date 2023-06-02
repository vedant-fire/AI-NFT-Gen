const hre = require("hardhat");

async function main() {
  const NAME = "AI Generated NFT"
  const SYMBOL = "AINFT"
  const COST = ethers.utils.parseUnits("1", "ether") // 1 ETH

  const NFT = await hre.ethers.getContractFactory("NFT")
  const nf = await NFT.deploy(NAME, SYMBOL, COST)
  await nf.deployed()

  console.log(`Deployed NFT Contract at: ${nf.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
