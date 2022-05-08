const user = {
  "name": "Sebastián",
  "lastname": "Carrillo",
  "age": 20,
  "nickname": "jscarrillo02",
  "hoobies": ["programming", "gaming", "eat"],
  "address": {
    "street": "123 Main St",
    "city": "London"
  },
  "married": false,
  // Functions
  greet() {
    return 'Hello';
  },
  something(){}
};

// console.log(user);

// !Convertir a un JSON valido
// console.log( JSON.stringify(user) );

// !Acceder

// console.log(user.name);
// console.log(user.lastname);
// console.log(user.hoobies);

// console.log( user.address.street )

// !Get Keys
// console.log(Object.keys(user))

// !Tipos no validos
console.log(user.greet()) // Functions are not valid
console.log( JSON.stringify(user) );



const friends = [
  { "name": "John Jairo", "nickname": "xJohn10x"},
  { "name": "Diego Alejandro", "nickname": "Byakuren"},
  { "name": "Juan David", "nickname": "Atypical"},
];

user.friends = friends;
console.log(user);
console.log(JSON.stringify(friends))


