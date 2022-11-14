const a: APIResponse = {
    foo: 1,
    bar: 2,
};
const b: APIResponseRecord = {
    zoo: 3,
    doo: 4,
};

type APIResponse = { [k: string]: string | number }
type APIResponseRecord = Record<string, string | number>

