const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  kittens.push(name);
}
destructivelyAppendKitten("Ralph");
console.log(kittens);

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
destructivelyPrependKitten("Bob");
console.log(kittens);

function destructivelyRemoveLastKitten(){
  kittens.pop();
}
destructivelyRemoveLastKitten();
console.log(kittens);

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
destructivelyRemoveFirstKitten();
console.log(kittens);

