const company = {
    name : 'Rocket Company',
    age : 6,
    role : 'Rocket banano',
    owner : {
        name : 'AAzmi',
        habit : 'reading books',
        age : 3
    },
    duration : '200 years'
}

const makeString = JSON.stringify(company);
// console.log(makeString)
const makeLikeObject = JSON.parse(makeString);
console.log(makeLikeObject)