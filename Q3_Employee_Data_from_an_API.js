let employees = [
    { name: "Ali", department: "IT", salary: 80000 },
    { name: "Sara", department: "HR", salary: 70000 },
    { name: "Ahmed", department: "IT", salary: 95000 },
    { name: "Ayesha", department: "Finance", salary: 85000 }
];

// Only IT department employees
let itEmployees = employees.filter(employee => employee.department === "IT");

// First employee with salary greater than 90000
let highSalaryEmployee = employees.find(employee => employee.salary > 90000);

// List of employee names
let employeeNames = employees.map(employee => employee.name);

// Total salary of all employees
let totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("Employees Data:", employees);
console.log("IT Employees:", itEmployees);
console.log("First Employee with Salary Greater than 90000:", highSalaryEmployee);
console.log("Employee Names:", employeeNames);
console.log("Total Salary:", totalSalary);