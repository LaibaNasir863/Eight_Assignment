let marks = [45, 78, 92, 61, 88, 54, 73, 95];

// Increase every mark by 5
let increasedMarks = marks.map(mark => mark + 5);

// Marks 70 or above
let passedMarks = marks.filter(mark => mark >= 70);

// First mark greater than 90
let firstHighMark = marks.find(mark => mark > 90);

// Total of all original marks
let totalMarks = marks.reduce((total, mark) => total + mark, 0);

console.log("Original Marks:", marks);
console.log("Marks Increased by 5:", increasedMarks);
console.log("Marks 70 or Above:", passedMarks);
console.log("First Mark Greater than 90:", firstHighMark);
console.log("Total Marks:", totalMarks);