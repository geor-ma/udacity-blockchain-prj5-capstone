// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

import "./ERC721Mintable.sol";
import "./verifier.sol";

// NOT needed - define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
// contract Verifier {
//     function verifyTx(
//         uint256[2] memory a,
//         uint256[2][2] memory b,
//         uint256[2] memory c,
//         uint256[2] memory input
//     ) public view returns (bool r);
// }

// define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721MintableComplete {
    Verifier private verifier;
    // define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address solAddress;
    }
    // define an array of the above struct
    Solution[] private solutions;

    // define a mapping to store unique solutions submitted
    mapping(uint256 => Solution) solutionsMap;

    // Create an event to emit when a solution is added
    event SolutionAdded(address solAddress);

    constructor(
        address verifierAddress,
        string memory name,
        string memory symbol
    ) public ERC721MintableComplete(name, symbol) {
        verifier = Verifier(verifierAddress);
    }

    // Create a function to add the solutions to the array and emit the event
    function addSolution(address solOwner) internal {
        //TODO - add solution
        emit SolutionAdded(solOwner);
    }

    // Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintNFT(
        address owner,
        uint256 tokenId,
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[2] memory input
    ) public {
        //check if this solution is used before
        //TODO

        //verfiy solution
        bool isVerified = verifier.verifyTx(a, b, c, input);
        require(isVerified, "solution is not verified. Cannot mint NFT");

        // mint only after solution is verified
        super.mint(owner, tokenId);

        //add solution
        addSolution(owner);
    }
}
