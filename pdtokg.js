function weightConverter(wt) {
  wt /= 2.2046;
  var n = wt.toFixed(0);
  document.getElementById("outputKilograms").innerHTML = n;
}