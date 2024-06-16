// Exercise 1: გაფილტრეთ/გამოიტანეთ მხოლოდ ლუწი რიცხვები
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  `Exercise 1: ${numbers1.filter((value, index, array) => {
    return index % 2;
  })}`
);

// Exercise 2: გაფილტრეთ/გამოიტანეთ მხოლოდ ის ხალხი რომელიც 18 წელზე მეტისაა
const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 30 },
];

const results = people.filter((value) => {
  return value.age >= 18;
});

console.log("Exercise 2: ", results);

// Exercise 3: გაფილტრეთ/გამოიტანეთ მხოლოდ ის პროდუქტები, რომლებიც მარაგშია
const products1 = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: false },
  { name: "Tablet", inStock: true },
  { name: "Monitor", inStock: false },
];

const productsInStock = products1.filter((value) => {
  return value.inStock === true;
});

console.log("Exercise 3: ", productsInStock);

// Exercise 4: გაფილტრეთ/გამოიტანეთ მხოლოდ ის ქალაქები სადაც მოსახლეობა 1 მილიონზე ნაკლებია
const cities1 = [
  { name: "City A", population: 500000 },
  { name: "City B", population: 1500000 },
  { name: "City C", population: 800000 },
  { name: "City D", population: 2500000 },
];

const lessThenMillion = cities1.filter((value) => {
  return value.population <= 1000000;
});

console.log("Exercise 5: ", lessThenMillion);

// Exercise 5: გაფილტრეთ/გამოიტანეთ მხოლოდ ის სიტყვები რომლების სიგრძეც 5-ზე ნაკლებია
const words1 = ["apple", "cat", "banana", "dog", "elephant"];
// Filter out all the words that have less than 5 characters.

const lessthen5 = words1.filter((value) => {
  return value.length <= 5;
});

console.log("Exercise 6: ", lessthen5);

// Sort მეთოდის სავარჯიშო
// Exercise 6: დაალაგეთ ზრდადობის მიხედვით
const numbers2 = [5, 3, 8, 1, 2, 7];

const zrdadoba = numbers2.sort(function (a, b) {
  //xd
  return a - b;
});

console.log("Exercise 6: ", zrdadoba);

// Exercise 7: დაალაგეთ ანბანის მიხედვით
const fruits = ["banana", "apple", "cherry", "date"];

const anbanismixedvit = fruits.sort();

console.log("Exercise 7: ", anbanismixedvit);

// Exercise 8: დაალაგეთ მომხმარებლების ასაკის კლებადობის მიხედვით
const people2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
];

const asakikleb = people2.sort(function (a, b) {
  return b.age - a.age;
});

console.log("Exercise 8: ", asakikleb);

// Exercise 9: დაალაგეთ პროდუქტის ფასის ზრდადობის მიხედვით
const products2 = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 200 },
];

const fasizrdad = products2.sort(function (a, b) {
  return a.price - b.price;
});

console.log("Exercise 9: ", fasizrdad);

// Exercise 10: დაალაგეთ სათაურები ანბანის მიხედვით
const books1 = [
  { title: "The Great Gatsby" },
  { title: "Moby Dick" },
  { title: "To Kill a Mockingbird" },
  { title: "1984" },
];

const sataurebi = books1.sort((a, b) => {
  return (a.title > b.title) - (a.title < b.title);
});

console.log("Exercise 10: ", sataurebi);

// Map მეთოდის სავარჯიშოები

// Exercise 11: შექმენით ცვლადი, სადაც შეინახავთ მოცემული მასივის კვადრატულ მნიშვნელობებს (ანუ: [1, 4, 9, 16, 25])
const numbers3 = [1, 2, 3, 4, 5];

const kvadrati = numbers3.map((value) => {
  return value * value;
});

console.log("Exercise 11: ", kvadrati);

// Exercise 12: შექმენით ცვლადი, სადაც შეინახავთ ხილის დასახელების სიგრძეებს (ანუ: [5, 6, 6, 4]);
const words2 = ["apple", "banana", "cherry", "date"];

const xilis_sigrdzeebi = words2.map((value) => {
  return value.length;
});

console.log("EX. 12:", xilis_sigrdzeebi);

// Exercise 13: შექმენით ცვლადი, სადაც შეინახავთ თითოეულ სახელს დიდი ასოებით ჩაწერილს (ანუ: [ALICE, BOB, CHARLIE, DAVID])
const people3 = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Charlie" },
  { name: "David" },
];

const didi_saxelebi = people3.map((value, index, array) => {
  return value.name.toUpperCase();
});

console.log("Ex.13: ", didi_saxelebi);

// Exercise 14: შექმენით ცვლადი, სადაც შეინახავთ თითოეული პროდუქტის ფასს, ოღონდ 10%-ით დაქვითულს ანუ: 800-ის ნაცვლად უნდა შეინახოთ 720; 500-ის ნაცვლად 450 და ა.შ...
const products3 = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 200 },
];

const daqvituli_fasebi = products3.map((value) => {
  return value.price - (value.price * 10) / 100;
});

console.log("Ex.14: ", daqvituli_fasebi);

// Exercise 15: შექმენით ცვლადი, სადაც შეინახავთ თითოეული წევრის პირველ ასო ბგერას (ანუ: ['a', 'b', 'c', 'd'])
const words3 = ["apple", "banana", "cherry", "date"];
// Create a new array with the first letter of each word.

const asoebi = words3.map((value) => {
  return value.charAt(0);
});

console.log("Ex. 15: ", asoebi);

//კომბინირებულები:

// Exercise 16: გაფილტრეთ/გამოიტანეთ კენტი რიცხვები, და აიყვანეთ კვადრატში. ანუ filter მეთოდს უნდა მიაბათ map მეთოდი
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const kentikvadrati = numbers4.filter((value, index, array) => {
  return (index % 2) - 1;
});

console.log("Ex. 16: ", kentikvadrati);

// Exercise 17: დაალაგეთ პროდუქტები ფასის კლებადობის მიხედვით, შემდეგ კი გამოიტანეთ ამ პროდუქტების მხოლოდ დასახელებები (sort და map)
const products4 = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 200 },
];

const byprice = products4.sort((a, b) => {
  return b.price - a.price;
});

console.log("Ex. 17: ", byprice);

// Exercise 18: გაფილტრეთ 20+ ხალხი, შემდეგ დაალაგეთ ზრდადობის მიხედვით, შემდეგ დააბრუნეთ მხოლოდ მათი სახელები
const people4 = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 30 },
  { name: "Eve", age: 20 },
];

const xalxizrdadobit = people4.filter((value) => {
  return value.age >= 20
}).sort((a,b) => {
  return a.age - b.age
})

console.log("Ex. 18:", xalxizrdadobit);

// Exercise 19: დაალაგეთ წიგნები ანბანის მიხედვით, იპოვენთ ის წიგნები, რომლებიც "T"-თი იწყება და გამოიტანეთ მათი სახელები დიდი ასოებით ჩაწერილი - მაგ: THE GREAT GATSBY
const books2 = [
  { title: "The Great Gatsby" },
  { title: "Moby Dick" },
  { title: "To Kill a Mockingbird" },
  { title: "1984" },
];

const bookswithT = books2.filter((value, index, array) => {
  return value.title.charAt(0) === "T"
}).sort((a, b) => {
  return (a.title > b.title) - (a.title < b.title);
})

console.log("Ex. 19:", bookswithT);

// Exercise 20: გაფილტრეთ ქალაქები, სადაც მოსახლეობა 1 მილიონზე მეტია, დაალაგეთ კლებადობის მიხედვით, და გამოიტანეთ ამ ქალაქების დასახელებები (filter, sort, map)
const cities2 = [
  { name: "City A", population: 500000 },
  { name: "City B", population: 1500000 },
  { name: "City C", population: 800000 },
  { name: "City D", population: 2500000 },
];

const qalaqebi = cities2.filter((value, index) => {
  return value.population >= 1000000
}).sort((a,b) => {
  return b.population - a.population
})

console.log("Ex. 20:", qalaqebi);

// ახლები:

// Exercise 21:  შეამოწმეთ შემდეგი პირობა: ყველა წევრი 18 წელზე მეტისაა (every)
const people5 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
];

console.log(`Ex.21: ${people5.every(person => person.age > 18)}`)

// Exercise 22: შეამოწმეთ შემდეგი პირობა: მასივის ყველა წევრი ლუწია (every)
const numbers5 = [2, 4, 6, 8, 10];

console.log(`Ex. 22: ${numbers5.every(number => number % 2 === 0)}`)

// Exercise 23: შეამოწმეთ შემდეგი პირობა: მასივის ზოგიერთი წევრი 'a' ასოთი იწყება (some)
const fruits1 = ["apple", "banana", "cherry", "date"];

console.log('Ex. 23: ', fruits1.some(fruit => fruit.charAt(0) === "a"));

// Exercise 24: შეამოწმეთ შემდეგი პირობა: მასივის ზოგიერთი წევრი 18 წელზე ნაკლებისაა (some)
const people6 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
];

console.log('Ex. 24: ', people6.some(people => people.age < 18));

// Exercise 25: reduce მეთოდის დახმარებით გადააბით შემდეგი სიტყვები, მათ შორის ჩასმული უნდა იყოს დეფისი ჩასმული (ანუ ასე გამოიტანეთ: apple - banana - cherry - mango)
const words4 = ["apple", "banana", "cherry", "mango"];

console.log('Ex. 24:', words4.reduce((before, after) => before + ' - ' + after));

// Exercise 26: გამოითვალეთ პროდუქტების ჯამური რაოდენობა, არ დაგავიწყეთ initial values მინიჭება, ანუ: sale.reduce(() => {}, 0) - აი ეს ნული არ დაგავიწყდეთ,

const sales = [
  { product: "Laptop", amount: 1000 },
  { product: "Phone", amount: 500 },
  { product: "Tablet", amount: 800 },
];

console.log('Ex. 26: ', sales.reduce((a, b) => a + b.amount, 0));

// Exercise 27: გამოითვალეთ პროდუქტების ჯამური ღირებულება (არ ფასი და რაოდენობა უნდა გაამრავლოთ ერთმანეთზე), არ დაგავიწყეთ initial values მინიჭება, ანუ: sale.reduce(() => {}, 0) - აი ეს ნული არ დაგავიწყდეთ,
const sales2 = [
  { product: "Laptop", amount: 10, price: 100 },
  { product: "Phone", amount: 50, price: 100 },
  { product: "Tablet", amount: 80, price: 10 },
];

console.log('Ex. 27: ', sales2.reduce((a, b) => a + (b.amount * b.price), 0));