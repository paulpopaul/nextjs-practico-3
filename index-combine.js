students = [
    {
        name: "Paul",
        lastname: "Pineda",
        age: 33,
        course: "AI"
    },
    {
        name: "Camila",
        lastname: "Perez",
        age: 22,
        course: "Design"
    },
    {
        name: "Robert",
        lastname: "Aros",
        age: 50,
        course: "Math"
    },
    {
        name: "Rosa",
        lastname: "Figeroa",
        age:43,
        course: "Data Bases"
    }
]

const result = students.map(({name, lastname, age}) => ({
    student: `${name} ${lastname}`,
    age,

}))
.filter(student => student.age > 20)
.sort((a, b) => a.age - b.age)
.reduce((total, student) => total + student.age, 0 )

console.log(result)