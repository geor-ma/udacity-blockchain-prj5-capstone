var ERC721MintableComplete = artifacts.require("ERC721MintableComplete");

contract("TestERC721Mintable", (accounts) => {
  const account_one = accounts[0];
  const account_two = accounts[1];

  describe("match erc721 spec", function () {
    beforeEach(async function () {
      this.contract = await ERC721MintableComplete.new("token-1", "TKN-1", {
        from: account_one,
      });

      //mint multiple tokens
      await this.contract.mint(account_one, 1, { from: account_one });
      await this.contract.mint(account_two, 2, { from: account_one });
    });

    it("should return total supply", async function () {
      let totalSupply = await this.contract.totalSupply.call({
        from: account_one,
      });
      assert.equal(totalSupply, 2, "total supply should be 2");
    });

    it("should get token balance", async function () {
      let hasError = false;
      try {
        await this.contract.balanceOf.call(account_one, {
          from: account_one,
        });
      } catch (error) {
        hasError = true;
      }

      assert.equal(hasError, false, "should get token balance");
    });

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it("should return token uri", async function () {
      let expectedURI =
        "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1";

      let actualURI = await this.contract.tokenURI.call(1, {
        from: account_one,
      });
      //console.log("actual URI is - ", actualURI);
      assert.equal(expectedURI, actualURI, "should return token uri");
    });

    it("should transfer token from one owner to another", async function () {
      await this.contract.transferFrom(account_one, account_two, 1, {
        from: account_one,
      });
      let newOwner = await this.contract.ownerOf(1);
      assert.equal(
        newOwner,
        account_two,
        "should transfer token from one owner to another"
      );
    });
  });

  describe("have ownership properties", function () {
    beforeEach(async function () {
      this.contract = await ERC721MintableComplete.new("token-1", "TKN-1", {
        from: account_one,
      });
    });

    it("should fail when minting when address is not contract owner", async function () {
      let canMintToken = false;
      try {
        await this.contract.mint(account_one, 1, { from: account_two });
        canMintToken = true;
      } catch (error) {}

      assert.isFalse(
        canMintToken,
        "should fail when minting when address is not contract owner"
      );
    });

    it("should return contract owner", async function () {
      await this.contract.mint(account_one, 1, { from: account_one });
      await this.contract.transferFrom(account_one, account_two, 1, {
        from: account_one,
      });
      let newOwner = await this.contract.ownerOf(1);
      assert.equal(
        newOwner,
        account_two,
        "should transfer token from one owner to another"
      );
    });
  });
});
