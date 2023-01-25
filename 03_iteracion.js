const aData = [10, 20, 30, 40];

const userName = 'Elefante';

console.log(aData[1]);
console.log(userName[2]);
// No reasignable
// aData = [1, 2, 3, 4];

aData[1] = 56;
console.log(aData[1]);

// Est0 da un TypeError
// UserName[2] = 'a';

// No reasignable
// userName = 'Elafante';

console.log(userName[2]);

for (let i = 0; i < aData.length; i++) {
  aData[i] = aData[i] / 10;
}

console.log(aData);

// Const aDatafreeze = Object.freeze(aData);
// aDatafreeze[2] = 3;

const answer = true;
// Answer.opposite = false;
// Console.log(answer.opposite);

const a = 'juan';
console.log(a.slice(2));

