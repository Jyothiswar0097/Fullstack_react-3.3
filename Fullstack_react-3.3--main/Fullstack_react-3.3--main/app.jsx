import React from "react";

// Base Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student subclass
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  displayInfo() {
    return `${super.displayInfo()}, Course: ${this.course}`;
  }
}

// Teacher subclass
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  displayInfo() {
    return `${super.displayInfo()}, Subject: ${this.subject}`;
  }
}

function App() {
  // Create instances
  const student1 = new Student("Alice", 20, "Computer Science");
  const teacher1 = new Teacher("Mr. Smith", 40, "Mathematics");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Person Class Hierarchy Example</h1>

      <div style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc" }}>
        <h2>Student</h2>
        <p>{student1.displayInfo()}</p>
      </div>

      <div style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc" }}>
        <h2>Teacher</h2>
        <p>{teacher1.displayInfo()}</p>
      </div>
    </div>
  );
}

export default App;
