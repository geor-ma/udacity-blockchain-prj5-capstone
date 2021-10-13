const Verifier = artifacts.require("Verifier.sol");
const SolnSquareVerifier = artifacts.require("SolnSquareVerifier.sol");

module.exports = async (deployer) => {
  await deployer.deploy(Verifier);
  await deployer.deploy(
    SolnSquareVerifier,
    Verifier.address,
    "ERC721MintableToken",
    "MG-TKN-007"
  );
};
