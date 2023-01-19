let quastion = confirm("Привет давай игарть");
let num = Math.random() * (10 - 0);
let okr = Math.round(num);


if (quastion == true) {
  alert("Игра зкалючается в том чтобы ты отгодал число");
  let otgoday = prompt("отгадай число от 1 до 10");
  if (okr == otgoday) {
    alert("Красава подолжай в томже духе");
  } else alert("жаль но ты не отгодал");
} else {
  alert("Все понятно с тобой токсик");
}
