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
        age: 20,
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

// let total = 0

// for (let i = 0 ; i < students.length; i ++){
//     total += students[i].age 
// }
// console.log(total)

// const result = students.reduce(function (total, student){
// return total + student.age;
// }, 0)

// const result = students.reduce((total, student) => total + student.age, 0)
// console.log(result)

const deve = [
    {
        name: "Luis",
        skills: ["HTML", "CSS", "JS"]
    },
    {
        name: "Juan",
        skills: ["HTML", "BD", "PYTHON"]
    },
    {
        name: "Rosa",
        skills: ["JS", "PHP", "AGULAR"]
    }
]

// const result = deve.reduce(function (allSkills, students){
// return [...allSkills, students.skills]
// }, [])

// const result = deve.reduce(function (allSkills, students){
//     return [...allSkills, ...students.skills]
//     }, [])


// const result = deve.reduce(function (allSkills, students){
//     return new Set([...allSkills, ...students.skills])
//     }, [])

const result = deve.reduce(function (allSkills, students){
    return Array.from (new Set([...allSkills, ...students.skills]))
    }, [])

console.log(result)