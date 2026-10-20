// Задача 1012: A < B < C или A < B > C
function solve() {
  var sa = document.getElementById('a').value.replace(',', '.');
  var sb = document.getElementById('b').value.replace(',', '.');
  var sc = document.getElementById('c').value.replace(',', '.');
  var out = document.getElementById('result');
  if (sa.trim() === '' || sb.trim() === '' || sc.trim() === '' || isNaN(Number(sa)) || isNaN(Number(sb)) || isNaN(Number(sc))) {
    out.innerText = 'Введите три числа.';
    return;
  }
  var a = Number(sa), b = Number(sb), c = Number(sc);
  if (a < b && b < c) {
    out.innerText = 'Выполняется A < B < C';
  } else if (a < b && b > c) {
    out.innerText = 'Выполняется A < B > C';
  } else {
    out.innerText = 'Не выполняется ни одно из неравенств';
  }
}
document.getElementById('solve-btn').addEventListener('click', solve);
