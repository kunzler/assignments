function Employee (name, title, salary, status) {
	this.name = name;
	this.title = title;
	this.salary = salary;
	this.status = status;
	// this.status ="full time"
}
Employee.prototype.printEmployeeForm = function () {
	console.log(this.name, this.title, this.salary, this.status);
};

let ben = new Employee('Ben', 'Manager', '34,000', 'full-time');
let tom = new Employee('Tom', 'Manager', '37,000', 'full-time');
let jerry = new Employee('Jerry', 'Manager', '77,000', 'full-time');
let employees = [ ben, tom, jerry ];
let newEmployees = [];
ben.status = 'part-time';

for (let i = 0; i < employees.length; i++) {
	// employees[i].printEmployeeForm();
	// console.log(employees[i].name);
	newEmployees.push(employees[i].name);
	// console.log(employees[i].salary)
}
console.log(newEmployees);
