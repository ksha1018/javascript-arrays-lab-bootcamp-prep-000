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

