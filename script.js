var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var btn = document.getElementById("btn");
var erw_input = document.getElementById("erw-input");
var erw_input2 = document.getElementById("erw-input2");
var volumen_out = document.getElementById("volumen-out");
var volumen_out2 = document.getElementById("volumen-out2");


const koerper = ["zylinder", "kegel", "kugel", "würfel", "quader", "pyramide"];


var foundInput1 = koerper.includes(input1.value.toLowerCase());

btn.addEventListener("click", function() {
  if (koerper.includes(input1.value.toLowerCase())) {
    for (var i1 = 0; i1 < koerper.length; i1++) {
      if (koerper[i1] == input1.value.toLowerCase()) {
        if (koerper[i1] == koerper[0]) {
          zylinder();
        }
        if (koerper[i1] == koerper[1]) {
          kegel();
        }
        if (koerper[i1] == koerper[2]) {
          kugel();
        }
        if (koerper[i1] == koerper[3]) {
          wuerfel();
        }
        if (koerper[i1] == koerper[4]) {
          quader();
        }
        if (koerper[i1] == koerper[5]) {
          pyramide();
        }
      }
    }
  } else {
    console.log("falsch");
  }

  if (koerper.includes(input2.value.toLowerCase())) {
    for (var i2 = 0; i2 < koerper.length; i2++) {
      if (koerper[i2] == input2.value.toLowerCase()) {
        if (koerper[i2] == koerper[0]) {
          zylinderZwei();
        }
        if (koerper[i2] == koerper[1]) {
          kegelZwei();
        }
        if (koerper[i2] == koerper[2]) {
          kugelZwei();
        }
        if (koerper[i2] == koerper[3]) {
          wuerfelZwei();
        }
        if (koerper[i2] == koerper[4]) {
          quaderZwei();
        }
        if (koerper[i2] == koerper[5]) {
          pyramideZwei();
        }
      }
    }
  } else {
    console.log("falsch");
  }
  
});

function zylinder() {
  erw_input.innerHTML = "<h4>Radius 1:</h4> " + "<input required type='text' placeholder='Radius Zylinder' id='rZyl'>" + "<br>" + "<h4>Höhe 1:</h4> " + "<input type='text' placeholder='Höhe Zylinder' id='hZyl'>";
}

function kegel() {
  erw_input.innerHTML = "<h4>Radius 1:</h4> " + "<input required type='text' placeholder='Radius Kegel' id='rKeg'>" + "<br>" + "<h4>Höhe 1:</h4> " + "<input type='text' placeholder='Höhe Kegel' id='hKeg'>";
}

function kugel() {
  erw_input.innerHTML = "<h4>Radius 1:</h4> " + "<input required type='text' placeholder='Radius Kugel' id='rKug'>"
}

function wuerfel() {
  erw_input.innerHTML = "<h4>Grundkante a 1:</h4> " + "<input required type='text' placeholder='Grundkante a' id='kanteAwuerfel'>" + "<br>" + "<h4>Höhe 1:</h4> " + "<input type='text' placeholder='Höhe Würfel' id='hWue'>";
}

function quader() {
  erw_input.innerHTML = "<h4>Grundkante a 1:</h4> " + "<input required type='text' placeholder='Grundkante a' id='kanteAquader'>" + "<h4>Grundkante b 2:</h4> " + "<input type='text' placeholder='Grundkante b' id='kanteBquader'>" + "<br>" + "<h4>Höhe 2:</h4> " + "<input type='text' placeholder='Höhe Quader' id='hQua'>";
}

function pyramide() {
    erw_input.innerHTML = "<h4>Grundkante a 1:</h4> " + "<input required type='text' placeholder='Grundkante a' id='kanteApyr'>" + "<br>" + "<h4>Höhe 1:</h4> " + "<input type='text' placeholder='Höhe Pyramide' id='hPyr'>";
}




function zylinderZwei() {
  erw_input2.innerHTML = "<h4>Radius 2:</h4> " + "<input required type='text' placeholder='Radius Zylinder' id='rZyl2'>" + "<br>" + "<h4>Höhe 2:</h4> " + "<input type='text' placeholder='Höhe Zylinder' id='hZyl2'>";
}

function kegelZwei() {
  erw_input2.innerHTML = "<h4>Radius 2:</h4> " + "<input required type='text' placeholder='Radius Kegel' id='rKeg2'>" + "<br>" + "<h4>Höhe 2:</h4> " + "<input type='text' placeholder='Höhe Kegel' id='hKeg2'>";
}

function kugelZwei() {
  erw_input2.innerHTML = "<h4>Radius 2:</h4> " + "<input required type='text' placeholder='Radius Kugel' id='rKug2'>";
}

function wuerfelZwei() {
  erw_input2.innerHTML = "<h4>Grundkante a 2:</h4> " + "<input required type='text' placeholder='Grundkante a' id='kanteAwuerfel2'>" + "<br>" + "<h4>Höhe 2:</h4> " + "<input type='text' placeholder='Höhe Würfel' id='hWue2'>";
}

function quaderZwei() {
  erw_input2.innerHTML = "<h4>Grundkante a 2:</h4> " + "<input required type='text' placeholder='Grundkante a' id='kanteAquader2'>" + "<h4>Grundkante b 2:</h4> " + "<input type='text' placeholder='Grundkante b' id='kanteBquader2'>" + "<br>" + "<h4>Höhe 2:</h4> " + "<input type='text' placeholder='Höhe Quader' id='hQua2'>";
}

function pyramideZwei() {
    erw_input2.innerHTML = "<h4>Grundkante a 2:</h4> " + "<input required type='text' placeholder='Grundkante a' id='kanteApyr2'>" + "<br>" + "<h4>Höhe 2:</h4> " + "<input type='text' placeholder='Höhe Pyramide' id='hPyr2'>";
}


document.getElementById("berechnen").addEventListener("click", function() {
  if (input1.value.toLowerCase() == koerper[0]) {
  var erg_zyl = Math.PI * Math.pow(rZyl.value, 2) * hZyl.value;
  volumen_out.innerHTML = "Volumen 1 - Zylinder: <br>" + "V = G &#183; h <br>" + "V = &#960; &#183 " + rZyl.value + "&#178; " + "&#183; " + hZyl.value + "<br>" + "V = " + erg_zyl.toFixed(2) + " cm&#179";
}
  if (input1.value.toLowerCase() == koerper[1]) {
    var erg_keg = 1 / 3 * Math.PI * Math.pow(rKeg.value, 2) * hKeg.value;
    volumen_out.innerHTML = "Volumen 1 - Kegel: <br> " + "V = 1 &#247; 3 &#183; G &#183; h <br>" + "V = 1 &#247; 3 &#183; &#960; &#183; " + rKeg.value + "&#178;" + " &#183; " + hKeg.value + "<br>" + "V = " + erg_keg.toFixed(2) + " cm&#179";
  }
  if (input1.value.toLowerCase() == koerper[2]) {
    var erg_kug = 4 / 3 * Math.PI * Math.pow(rKug.value, 3);
    volumen_out.innerHTML = "Volumen 1 - Kugel: <br>" + "V = 4 &#247; 3 &#183; &#960; &#183; r&#179; <br>" + "V = 4 &#247; 3 &#183; &#960; &#183; " + rKug.value + "&#179; <br>" + "V = " + erg_kug.toFixed(2) + " cm&#179";
  }
  if (input1.value.toLowerCase() == koerper[3]) {
    var erg_wue = Math.pow(kanteAwuerfel.value, 2) * hWue.value;
    volumen_out.innerHTML = "Volumen 1 - Würfel: <br>" + "V = a&#178; &#183; h <br>" + "V = " + kanteAwuerfel.value + "&#178; &#183; " + hWue.value + "<br>" + "V = " + erg_wue.toFixed(2) + " cm&#179";
  }
  if (input1.value.toLowerCase() == koerper[4]) {
    var erg_qua = kanteAquader.value * kanteBquader.value * hQua.value;
    volumen_out.innerHTML = "Volumen 1 - Quader: <br>" + "V = a &#183; b &#183; h <br>" + "V = " + kanteAquader.value + " &#183; " + kanteBquader.value + " &#183; " + hQua.value + "<br>" + "V = " + erg_qua.toFixed(2) + " cm&#179";
  }
  if (input1.value.toLowerCase() == koerper[5]) {
    var erg_pyr = 1 / 3 * Math.pow(kanteApyr.value, 2) * hPyr.value;
    volumen_out.innerHTML = "Volumen 1 - Pyramide: <br>" + "V = 1 &#247; 3 &#183; a&#178; &#183; h <br>" + "V = 1 &#247; 3 &#183; " + kanteApyr.value + "&#178; &#183; " + hPyr.value + "<br>" + "V = " + erg_pyr.toFixed(2) + " cm&#179";
  }


  

  if (input2.value.toLowerCase() == koerper[0]) {
    var erg_zyl2 = Math.PI * Math.pow(rZyl2.value, 2) * hZyl2.value;
    volumen_out2.innerHTML = "Volumen 2 - Zylinder: <br>" + "V = G &#183; h <br>" + "V = &#960; &#183 " + rZyl2.value + "&#178; " + "&#183; " + hZyl2.value + "<br>" + "V = " + erg_zyl2.toFixed(2) + " cm&#179";
  }
    if (input2.value.toLowerCase() == koerper[1]) {
      var erg_keg2 = 1 / 3 * Math.PI * Math.pow(rKeg2.value, 2) * hKeg2.value;
      volumen_out2.innerHTML = "Volumen 2 - Kegel: <br> " + "V = 1 &#247; 3 &#183; G &#183; h <br>" + "V = 1 &#247; 3 &#183; &#960; &#183; " + rKeg2.value + "&#178;" + " &#183; " + hKeg2.value + "<br>" + "V = " + erg_keg2.toFixed(2) + " cm&#179";
    }
    if (input2.value.toLowerCase() == koerper[2]) {
      var erg_kug2 = 4 / 3 * Math.PI * Math.pow(rKug2.value, 3);
      volumen_out2.innerHTML = "Volumen 2 - Kugel: <br>" + "V = 4 &#247; 3 &#183; &#960; &#183; r&#179; <br>" + "V = 4 &#247; 3 &#183; &#960; &#183; " + rKug2.value + "&#179; <br>" + "V = " + erg_kug2.toFixed(2) + " cm&#179";
    }
    if (input2.value.toLowerCase() == koerper[3]) {
      var erg_wue2 = Math.pow(kanteAwuerfel2.value, 2) * hWue2.value;
      volumen_out2.innerHTML = "Volumen 2 - Würfel: <br>" + "V = a&#178; &#183; h <br>" + "V = " + kanteAwuerfel2.value + "&#178; &#183; " + hWue2.value + "<br>" + "V = " + erg_wue2.toFixed(2) + " cm&#179";
    }
    if (input2.value.toLowerCase() == koerper[4]) {
      var erg_qua2 = kanteAquader2.value * kanteBquader2.value * hQua2.value;
      volumen_out2.innerHTML = "Volumen 2 - Quader: <br>" + "V = a &#183; b &#183; h <br>" + "V = " + kanteAquader2.value + " &#183; " + kanteBquader2.value + " &#183; " + hQua2.value + "<br>" + "V = " + erg_qua2.toFixed(2) + " cm&#179";
    }
    if (input2.value.toLowerCase() == koerper[5]) {
      var erg_pyr2 = 1 / 3 * Math.pow(kanteApyr2.value, 2) * hPyr2.value;
      volumen_out2.innerHTML = "Volumen 2 - Pyramide: <br>" + "V = 1 &#247; 3 &#183; a&#178; &#183; h <br>" + "V = 1 &#247; 3 &#183; " + kanteApyr2.value + "&#178; &#183; " + hPyr2.value + "<br>" + "V = " + erg_pyr2.toFixed(2) + " cm&#179";
      
    }
  
  /*var grZahl = Math.max(erg_zyl, erg_keg, erg_kug, erg_wue, erg_qua, erg_pyr, erg_zyl2, erg_keg2, erg_kug2, erg_wue2, erg_qua2, erg_pyr2);
  var klZahl = Math.min(erg_zyl, erg_keg, erg_kug, erg_wue, erg_qua, erg_pyr, erg_zyl2, erg_keg2, erg_kug2, erg_wue2, erg_qua2, erg_pyr2);*/

  let volume1Text = volumen_out.innerHTML || ""; // Fallback zu leerem String
  let volume2Text = volumen_out2.innerHTML || ""; // Fallback zu leerem String

  // Versuche, die Volumenwerte mit Regex zu extrahieren
  let volume1Match = volume1Text.match(/V\s*=\s*([\d.]+)\s*cm³/);
  let volume2Match = volume2Text.match(/V\s*=\s*([\d.]+)\s*cm³/);

  // Stelle sicher, dass beide Werte gefunden wurden
  if (volume1Match && volume2Match) {
    // Wandle die extrahierten Werte in Zahlen um
    let volume1 = parseFloat(volume1Match[1]);
    let volume2 = parseFloat(volume2Match[1]);

    // Bestimme das größere und kleinere Volumen
    let großesVolumen = Math.max(volume1, volume2);
    let kleinesVolumen = Math.min(volume1, volume2);

    // Berechne den prozentualen Unterschied
    let prozentUnterschied = ((großesVolumen - kleinesVolumen) / großesVolumen) * 100;

    // Zeige den prozentualen Unterschied im HTML
    document.getElementById("prozent").innerHTML =
      "Prozentualer Unterschied = " + prozentUnterschied.toFixed(2) + "%";
  } else {
    // Falls ein Fehler auftritt, zeige eine Fehlermeldung
    console.error("Konnte Volumenwerte nicht extrahieren.");
    document.getElementById("prozent").innerHTML =
      "Fehler: Volumenwerte konnten nicht berechnet werden.";
  }
  
});