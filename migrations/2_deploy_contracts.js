const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const SquareVerifier = artifacts.require("SquareVerifier.sol");
const SolnSquareVerifier = artifacts.require("SolnSquareVerifier.sol");

module.exports = function (deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);

  deployer.deploy(SquareVerifier);
  deployer.deploy(SolnSquareVerifier);
};
