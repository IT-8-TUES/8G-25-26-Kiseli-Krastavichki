function presmetniCena() {
  var torta = parseInt(document.getElementById("kol-torta").value) || 0;
  var biskviti = parseInt(document.getElementById("kol-biskviti").value) || 0;
  var cenaTorta = 12.00;
  var cenaBiskviti = 1.80;
  var obshto = (torta * cenaTorta) + (biskviti * cenaBiskviti);
  var rezultat = document.getElementById("rezultat");

  if (obshto === 0) {
    rezultat.textContent = "Моля, въведи поне един продукт!";
    rezultat.style.color = "#e91e8c";
  } else {
    rezultat.textContent = "Общата цена е: " + obshto.toFixed(2) + " €";
    rezultat.style.color = "#c2185b";
  }
}