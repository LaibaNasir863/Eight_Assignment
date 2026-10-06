let student1 = {
    name: "Ali",
    class: "10th",
    chemistry: 85,
    mathematics: 90,
    urdu: 80,
    english: 88,

    calculateResult: function() {
        let total = this.chemistry + this.mathematics + this.urdu + this.english;
        let percentage = (total / 400) * 100;

        console.log(this.name + " Percentage: " + percentage + "%");
    }
};

// Display name and class
console.log("Name:", student1.name);
console.log("Class:", student1.class);

// Bracket notation
console.log("Chemistry Marks:", student1["chemistry"]);

// Call method
student1.calculateResult();


// Second student object

let student2 = {
    name: "Sara",
    class: "10th",
    chemistry: 75,
    mathematics: 82,
    urdu: 78,
    english: 85,

    calculateResult2: function() {
        let total = this.chemistry + this.mathematics + this.urdu + this.english;
        let percentage = (total / 400) * 100;

        console.log(this.name + " Percentage: " + percentage + "%");
    }
};
console.log("Name:", student2.name);
console.log("Class:", student2.class);
console.log("Chemistry Marks:", student2["chemistry"]);
// Call second student's method
student2.calculateResult2();

// Remove one property
console.log("Removing Urdu property from student2...");
delete student2.urdu;
// Display final object
console.log("Final Student Object:", student2);