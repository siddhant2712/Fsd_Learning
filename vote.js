// Sample data
const people = [
    { name: "vishnu", age: 22 },
    { name: "shivam", age: 19 },
    { name: "zohadur", age: 21 },
    { name: "siddharth", age: 15 },
    { name: "saurabh", age: 16 },
    { name: "sachin", age: 12 },
    { name: "rohit", age: 15 },
    { name: "vineet", age: 19 },
    { name: "suniti", age: 27 }
];

const votingAge = 18;

let eligibleVoters = [];
for (let i = 0; i < people.length; i++) {
    if (people[i].age >= votingAge) {
        eligibleVoters.push(people[i]);
    }
}

let eligibleVoterNames = [];
for (let i = 0; i < eligibleVoters.length; i++) {
    eligibleVoterNames.push(eligibleVoters[i].name);
}

let eligibleVoterAges = [];
for (let i = 0; i < eligibleVoters.length; i++) {
    eligibleVoterAges.push(eligibleVoters[i].age);
}

let eligibleVoterCount = eligibleVoters.length;

let eligibleVoterDetails = [];
for (let i = 0; i < eligibleVoters.length; i++) {
    eligibleVoterDetails.push({
        name: eligibleVoters[i].name,
        age: eligibleVoters[i].age
    });
}

console.log("Eligible Voter Names: " + eligibleVoterNames.join(", "));
console.log("Eligible Voter Ages: " + eligibleVoterAges.join(", "));
console.log("Eligible Voter Count: " + eligibleVoterCount);
console.log("Eligible Voter Details: " + JSON.stringify(eligibleVoterDetails));
