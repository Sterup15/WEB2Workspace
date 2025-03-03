function createPerson(name, age) {
    return {
        getName: () => name,
        setName: newName => (name = newName),
        getAge: () => age,
        setAge: newAge => (age = newAge),
        toString: () => `Name: ${name}, Age: ${age}`,
        equals: person => person.getName() === name && person.getAge() === age,
    }
}

function createEmployee({ name, age, salary }) {
    const person = createPerson(name, age)

    return {
        ...person,
        getSalary: () => salary,
        setSalary: newSalary => (salary = newSalary),
        toString: () => `${person.toString()}, Salary: ${salary}`,
        equals: employee => person.equals(employee) && employee.getSalary() === salary,
    }
}

const santa = createEmployee({ name: "Santa Clause", age: 1752, salary: 0 })
console.log(santa.toString())
// → Name: Santa Clause, Age: 1752, Salary: 0