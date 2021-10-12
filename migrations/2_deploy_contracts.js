const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
// const Verifier = artifacts.require("Verifier.sol");
// const SolnSquareVerifier = artifacts.require("SolnSquareVerifier.sol");

module.exports = async (deployer) => {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);

  // await deployer.deploy(Verifier);
  // await deployer.deploy(
  //   SolnSquareVerifier,
  //   Verifier.address,
  //   "ERC721MintableToken",
  //   "MG-TKN-007"
  // );
};
