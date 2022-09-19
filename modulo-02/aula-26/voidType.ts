// ----------------
function logError(errorMessage: string) {
    console.log(errorMessage);
}

logError('required field: Name')

// ----------------
const logError2 = (errorMessage: string) => {
    console.log(errorMessage);
}

logError2('Required field missing')

// ----------------
let exVoid: void;

// exVoid = 1;
exVoid = null;  //nao da erro devido ao "strictNullChecks": false, no tsconfig

console.log(exVoid);
