// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ResearchFunding {
    struct Research {
        address author;
        string title;
        uint256 fundingReceived;
    }

    Research[] public researchPapers;

    function submitResearch(string memory _title) public {
        researchPapers.push(Research(msg.sender, _title, 0));
    }

    function fundResearch(uint256 index) public payable {
        require(msg.value > 0, "Funding must be greater than 0");
        researchPapers[index].fundingReceived += msg.value;
    }
}
