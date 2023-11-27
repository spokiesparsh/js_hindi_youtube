const chai = {
    name: "ice tea",
    price: 220,
    isAvail: true,
};

// Object.defineProperty(chai, 'name', { writable: false });

const desc = Object.getOwnPropertyDescriptor(chai, 'name');
console.log(desc);


chai.name = "ice coffee";


for(const [key, value] of Object.entries(chai)){
    console.log(`${key} : ${value}`);
}

