// 1
// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 },
//     { name: "Diana", age: 40 }
// ];
// const userNames = users.map(user => user.name);
// console.log(userNames);

// 2
// const users = [
//     { name: "Alice", eyeColor: "blue" },
//     { name: "Bob", eyeColor: "brown" },
//     { name: "Charlie", eyeColor: "blue" },
//     { name: "Diana", eyeColor: "green" }
// ];
// const blueEyedUsers = users.filter(user => user.eyeColor === "blue");
// console.log(blueEyedUsers);

// 3
// const users = [
//     { name: "Alice", gender: "female" },
//     { name: "Bob", gender: "male" },
//     { name: "Charlie", gender: "male" },
//     { name: "Diana", gender: "female" }
// ];
// const maleNames = users
//     .filter(user => user.gender === "male")
//     .map(user => user.name);
// console.log(maleNames);
// const femaleNames = users
//     .filter(user => user.gender === "female")
//     .map(user => user.name);
// console.log(femaleNames); 

// 4
// const users = [
//     { name: "Alice", isActive: true },
//     { name: "Bob", isActive: false },
//     { name: "Charlie", isActive: false },
//     { name: "David", isActive: true }
// ];
// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);

// 5
// const users = [
//     { name: "Alice", email: "alice@example.com" },
//     { name: "Bob", email: "bob@example.com" },
//     { name: "Charlie", email: "charlie@example.com" }
// ];
// const emailToFind = "bob@example.com";
// const user = users.find(user => user.email === emailToFind);
// console.log(user);

// 6
// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 },
//     { name: "Diana", age: 40 },
//     { name: "Eve", age: 45 }
// ];
// const minAge = 30;
// const maxAge = 40;
// const ageRangeUsers = users.filter(user => user.age >= minAge && user.age <= maxAge);
// console.log(ageRangeUsers);
