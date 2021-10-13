const SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
const Verifier = artifacts.require("Verifier");
const Proof = require("./proof.json");

contract("SolnSquareVerifier", (accounts) => {
  const account_one = accounts[0];
  const account_two = accounts[1];
  const tokenId_one = 1;

  describe("Test SolnSquareVerifier", function () {
    beforeEach(async function () {
      let verifierContract = await Verifier.new({
        from: account_one,
      });

      this.solnSquareVerifierContract = await SolnSquareVerifier.new(
        verifierContract.address,
        "ERC721MintableToken",
        "MG-TKN-1",
        { from: account_two }
      );
    });

    // Test if a new solution can be added for contract - SolnSquareVerifier
    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier

    it("Test mint token with solution added", async function () {
      let isTokenMinted = false;
      try {
        //console.log(this.solnSquareVerifierContract);
        isTokenMinted = await this.solnSquareVerifierContract.mintNFT.call(
          tokenId_one,
          Proof.proof.a,
          Proof.proof.b,
          Proof.proof.c,
          Proof.inputs,
          {
            from: account_two,
          }
        );
        console.log("isTokenMinted 1 :", isTokenMinted);
      } catch (error) {
        console.log(error);
      }
      assert.isTrue(
        isTokenMinted,
        "test of minting a token with solution added failed."
      );
    });
  });
});
