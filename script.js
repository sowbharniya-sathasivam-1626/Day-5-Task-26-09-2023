// For the given JSON iterate over all loops(for, for in, for of, forEach).
// for loop:
var jsonObj = `{
    "name": "Sowbharniya",
    "age": 24,
    "address": "Nurani, Palakkad, Kerala.",
    "date": "16.01.2023",
    "batch": "B52 WD Tamil",
    "course": "Full Stack Development"
}`
var student = JSON.parse(jsonObj);
var value = Object.keys(student);
for (var i = 0; i < value.length; i++) {
    var res = value[i];
    var result = student[res];
    console.log(`${res}: ${result}`);
}


//for in loop:
var jsonObj = `{
    "name": "Sowbharniya",
    "age": 24,
    "address": "Nurani, Palakkad, Kerala.",
    "date": "16.01.2023",
    "batch": "B52 WD Tamil",
    "course": "Full Stack Development"
}`;
var student = JSON.parse(jsonObj);
for (var key in student) {
    var result = student[key];
    console.log(`${key}: ${result}`);
}

//for of:
var jsonObj = `{
    "name": "Sowbharniya",
    "age": 24,
    "address": "Nurani, Palakkad, Kerala.",
    "date": "16.01.2023",
    "batch": "B52 WD Tamil",
    "course": "Full Stack Development"
}`
var student = JSON.parse(jsonObj)
for (var [key,value] of Object.entries(student)){
    console.log(`${key}: ${value}`);
}


//forEach:
var jsonObj = `{
    "name": "Sowbharniya",
    "age": 24,
    "address": "Nurani, Palakkad, Kerala.",
    "date": "16.01.2023",
    "batch": "B52 WD Tamil",
    "course": "Full Stack Development"
}`;
var student = JSON.parse(jsonObj);
Object.entries(student).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});