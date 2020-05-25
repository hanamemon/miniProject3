var question = document.getElementById("name");
var sub = document.getElementById("sub");
var arr = new Array(
  "Zebra 🦓",
  "Giraffe 🦒",
  "Porcupine 🦔",
  "Dinasaur 🦖",
  "Gorilla 🦧",
  "Llama 🦙",
  "Flamingo 🦩",
  "Skunk 🦨",
  "Otter 🦦",
  "Rat 🐀",
  "Cow 🐄",
  "Tiger 🐅");

sub.addEventListener("click", answer)

function answer(event) {
  event.preventDefault();
  var ans = document.getElementById("ans");
  var num = document.getElementById("num").value;
  console.log(arr[num - 1]);
  var str = "";
  document.getElementById("ans").innerHTML = arr[num - 1];
  //ans.text(arr[num-1]);
  return arr[num - 1];
}
