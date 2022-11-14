/*
    Exercise:
    Define type PowerUser which should have all fields from both User and Admin (except for type),
    and also have type 'powerUser' without duplicating all the fields in the code.
*/

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type PowerUser = Omit<User & Admin, 'type'> & { type: 'powerUser' };