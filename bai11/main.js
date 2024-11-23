class School{
    constructor(id, name, birthYear)
    {
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
    }

    //phuong thuc cua lop school
    calcAge(currentYear)
    {
        return currentYear - this.birthYear;
    }
}

class Student extends School{
        constructor(id, name, birthYear, major)
        {
            super(id, name, birthYear);
            this.major = major;
        }

        study()
        {
            console.log(`${this.name} is studying ${this.major} `);
        }
}

// tao doi tuong cua lop

const p1 = new School("P2001", "Jackey", 2000);

//truy cap thuoc tinh va phuong thuc cua School

console.log(p1.id);
console.log(p1.name);
console.log(p1.birthYear);
console.log(p1.calcAge(2024));

//tao doi tuong cua sub class student

const s1 = new Student("P20000001", "Jackeyyyy", 2001,"computer science");

console.log(s1.id);
console.log(s1.name);
console.log(s1.birthYear);
console.log(s1.calcAge(2024));

//truy cap thuoc tinh cua phuong thuc sub class

s1.study();
console.log(s1)