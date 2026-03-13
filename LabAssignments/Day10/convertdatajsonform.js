let user = {
    name: "Pratibha",
    age: 28,
    city: "Pune"
};

let jsonData = JSON.stringify(user);
console.log("JSON Format:", jsonData);

let objectData = JSON.parse(jsonData);
console.log("Object Format:", objectData);