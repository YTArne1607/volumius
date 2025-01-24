var r1 = document.getElementById("r1");
var r2 = document.getElementById("r2");
var r3 = document.getElementById("r3");
var r4 = document.getElementById("r4");
var r5 = document.getElementById("r5");
var r6 = document.getElementById("r6");
var r7 = document.getElementById("r7");
var r8 = document.getElementById("r8");
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var ausgabe = document.getElementById("ausgabe");
var ausgabe2 = document.getElementById("ausgabe2");
var ausgabe3 = document.getElementById("ausgabe3");
var ausgabe4 = document.getElementById("ausgabe4");

function berechnen() {
  var v1 = (4 / 3 * Math.PI * Math.pow(r1.value, 3));
  var v2 = (4 / 3 * Math.PI * Math.pow(r2.value, 3) / 2);
  var grZahl1 = Math.max(v1, v2);
  var klZahl1 = Math.min(v1, v2);
  ausgabe.innerHTML = (klZahl1 / grZahl1 * 100).toFixed(2) + "%";
  var v3 = (4 / 3 * Math.PI * Math.pow(r3.value, 3));
  var v4 = (1 / 3 * Math.PI * Math.pow(r4.value, 2) * h1.value);
  var grZahl2 = Math.max(v3, v4);
  var klZahl2 = Math.min(v3, v4);
  ausgabe2.innerHTML = (klZahl2 / grZahl2 * 100).toFixed(2) + "%";
  var v5 = (4 / 3 * Math.PI * Math.pow(r5.value, 3));
  var v6 = (1 / 3 * r6.value * h2.value);
  var grZahl3 = Math.max(v5, v6);
  var klZahl3 = Math.min(v5, v6);
  ausgabe3.innerHTML = (klZahl3 / grZahl3 * 100).toFixed(2) + "%";
}