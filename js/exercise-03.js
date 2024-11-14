/* 
    1. Define function 'getTypeOf', which receives a value as paramenter and returns the type of this value
        Use typeof to ckech the types for each of the main 5 primitive types (string, number, boolean, null, undefined)
    2. Log the result of any function call.
*/
function getTypeOf(value) {
    return typeof value;
}

const S = "Arnau";
console.log({ user: getTypeOf(S) });

const N = 26;
console.log({ salary: getTypeOf(N) });

const B = true;
console.log({ isVisible: getTypeOf(B) });

const Nl = null;
console.log({ userData: getTypeOf(Nl) });

const U = undefined;
console.log({ userState: getTypeOf(U) });
