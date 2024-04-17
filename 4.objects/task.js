function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if ((!this.hasOwnProperty('marks')) || (this.marks.length === 0)) {
    return 0;
  }
  return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

let first = new Student("Alex", "male", 23);
first.setSubject("Geography");
first.addMarks(4, 5, 4, 3, 5);
console.log(first.getAverage());
console.log(first);
let second = new Student("Mike", "male", 21);
second.setSubject("Chemistry");
second.addMarks(3, 5, 5, 4, 5);
console.log(second.getAverage());
console.log(second);
let third = new Student("Ann", "female", 24);
third.setSubject("Physics");
third.addMarks(5, 4, 4);
console.log(third.getAverage());
console.log(third);

