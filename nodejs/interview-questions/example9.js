//   Write a function that will recursively merge two objects with the following conditions:

const mergeObjects = (objA = {}, objB = {}) => {
    const result = objA;
    const entriesB = Object.entries(objB);

    for (const [ key, value ] of entriesB) {
        const isElemExist = Boolean(result[key]);
        if (!isElemExist) {
            result[key] = value;
        }
        // 2.) If a[field] is an array an b[field] exists but is undefined or null, set a[field] to an empty array
        else if (Array.isArray(result[key]) && (typeof value === 'undefined' || typeof value === 'null')) {
            result[key] = [];
        }
        // 4.) If a[field] exists and b[field] exists but is undefined, delete a[field]
        else if (result[key] && typeof value === 'undefined') {
            delete result[key];
        }

        // 1.) If a[field] is an array, and b[field] is defined and is not an array, add b[field] to the array
        else if (Array.isArray(result[key]) && !Array.isArray(value)) {
            result[key] = [...result[key], value];
        }

        // 3.) If a[filed] is an array and b[field] is an array, set a[field] to b[field]
        else if (Array.isArray(result[key]) && Array.isArray(value)) {
            result[key] = value;
        }

        // 5.) If b[field] is a non-complex type (number, string, boolean, et cetera), copy to a[field]
        else if (Array.isArray(result[key]) && typeof value !== 'object') {
            result[key] = [...result[key], value];
        }
        else if (Object.is(result[key]) && typeof value !== 'object') {
            result[key][value] =  value;
        }
        else if (typeof result[key] !== 'object' && typeof value !== 'object') {
            result[key] = value;
        }
        else if (typeof result[key] === 'object' && typeof value === 'object') {
            result[key] = mergeObjects(result[key], value);
        }
    }
    return result;
};

var a = {
    first_name: "Bob",
    last_name: "Jones",

    email: "bob@gmail.com",

    address: {
        line_1: "1234 Main St",
        line_2: "Apt 413",
        city: "Los Angeles",
        state: "CA",
        zip: "90048"
    },

    logins: [
        { date: "10/22/2012", ip: "192.168.0.1" },
        { date: "10/21/2012", ip: "192.168.0.1" }
    ],

    photos: ["IMG-1985.jpg", "IMG-1987.jpg"]
};

var b = {
    last_name: "Jones",
    active: true,

    address: {
        line_1: "2143 South Main St",
        line_2: undefined
    },

    logins: { date: "10/23/2012", ip: "192.168.0.1" },

    photos: undefined
};

var Result = {
    first_name: "Bob",
    last_name: "Jones",

    active: true,
    email: "bob@gmail.com",

    address: {
        line_1: "2143 South Main St",
        city: "Los Angeles",
        state: "CA",
        zip: "90048"
    },

    logins: [
        { date: "10/22/2012", ip: "192.168.0.1" },
        { date: "10/21/2012", ip: "192.168.0.1" },
        { date: "10/23/2012", ip: "192.168.0.1" }
    ],

    photos: []
};
console.log(mergeObjects(b, a));