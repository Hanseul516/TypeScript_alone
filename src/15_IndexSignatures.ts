// Index Signatures

// interface TransactionObj {
//     readonly [index: string]: number
// }

interface TransactionObj {
    readonly [index: string]: number;
    Pizza: number;
    Books: number;
    Job: number;
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};

console.log(todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 40; // 오류

console.log(todaysTransactions['Dave']); // undefined

///////////////////////////////////////

interface Student {
    // [Key: string]: string | number | number[] | undefined
    name: string;
    GPA: number;
    Classes?: number[];
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    Classes: [100, 200]
};

// console.log(Student.test); // 오류

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]);
});


const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA')

/////////////////////////////

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number | string> //Record<키의 타입, 값의 타입> 

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes){
    console.log(monthlyIncomes[revenue as keyof Incomes])
}
