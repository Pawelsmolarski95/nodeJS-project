
const fs = require('fs');

const gender = ['M','F'];
const femaleNames = ['Anna', 'Kasia', 'Ola', 'Asia', 'Kamila']
const maleNames = ['Andrzej', 'Jan',' Paweł', 'Piotr', 'Łukasz']
const lastNames = ['Jarosz' ,'Wolak' , 'Nowak', 'Obama']


const people = [];

const randChoice = arr => {
    const result = Math.floor(Math.random()*arr.length)
    return arr[result];
}

for (let i = 0; i <= 20 ; i++) {
    let singlePerson = {}
    singlePerson.gender = randChoice(gender);
    singlePerson.gender === 'F' ? singlePerson.name = randChoice(femaleNames)  
    : singlePerson.name = randChoice(maleNames);
    singlePerson.lastName = lastNames[Math.floor(Math.random()*lastNames.length)]
    singlePerson.age = Math.floor(Math.random()*(78 - 18) + 18);
    singlePerson.mail = (singlePerson.name + "." + singlePerson.lastName + "@gmail.com").toLowerCase();
    singlePerson.phoneNumber = Math.floor(Math.random() * (999999999 - 100000000) + 100000000);
    
    
    people.push(singlePerson)
}
const peopleJSON = JSON.stringify(people,null,2)

fs.writeFile('people.json', peopleJSON ,(err) => {
    if(err) throw err;
    console.log('The file has been saved!')
});
