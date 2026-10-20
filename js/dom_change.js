// Замена кириллицы на латиницу по клику на кнопку
var MAP = {'А':'A','Б':'B','В':'V','Г':'G','Д':'D','Е':'E','Ё':'E','Ж':'Zh','З':'Z','И':'I','Й':'Y','К':'K','Л':'L','М':'M','Н':'N','О':'O','П':'P','Р':'R','С':'S','Т':'T','У':'U','Ф':'F','Х':'Kh','Ц':'Ts','Ч':'Ch','Ш':'Sh','Щ':'Shch','Ъ':'','Ы':'Y','Ь':'','Э':'E','Ю':'Yu','Я':'Ya'};

function translit(text) {
  var result = '';
  for (var i = 0; i < text.length; i++) {
    var ch = text[i];
    var up = ch.toUpperCase();
    if (up in MAP) {
      result += (ch === up) ? MAP[up] : MAP[up].toLowerCase();
    } else {
      result += ch;
    }
  }
  return result;
}

function toRoman(n) {
  var table = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
  var r = '';
  for (var i = 0; i < table.length; i++) {
    while (n >= table[i][0]) { r += table[i][1]; n -= table[i][0]; }
  }
  return r;
}

function swap() {
  var p = document.getElementsByTagName('p');
  var surname = p[2].childNodes[1];
  var name = p[3].childNodes[1];
  var year = p[6].childNodes[1];
  surname.innerText = translit(surname.innerText);
  name.innerText = translit(name.innerText);
  if (/^[0-9]+$/.test(year.innerText)) {
    year.innerText = toRoman(parseInt(year.innerText, 10));
  }
}

document.getElementById('swap-btn').addEventListener('click', swap);
