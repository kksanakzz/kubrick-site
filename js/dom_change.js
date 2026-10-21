function swapNodes() {
  
  var p = document.getElementsByTagName('p');

 
  if (p[0]) p[0].childNodes[1].innerText = 'GU MVD Rossii po g. SPB';
  
  
  if (p[2]) p[2].childNodes[1].innerText = 'Egorova';
  
  
  if (p[3]) p[3].childNodes[1].innerText = 'Ksenia';
  
  
  if (p[4]) p[4].childNodes[1].innerText = 'Sergeevna';
  

  if (p[7]) p[7].childNodes[1].innerText = 'g. SPB';

 
  if (p[8]) p[8].childNodes[1].innerText = 'g. SPB, ul. Tverskaya, d. 1, kv. 1';
}


document.getElementById('swap-btn').addEventListener('click', swapNodes);
