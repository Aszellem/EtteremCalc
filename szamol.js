function szamol(){
    let osszeg = +document.getElementById("szamla").value;
    let szazalek = +document.getElementById("lista").value/100;
    let hany = +document.getElementById("fo").value;

    if (osszeg<=0 || hany<=0){
        alert ("Hibás adatok!")
        return ;
    }

    let fiz = Math.round(osszeg*(1+szazalek)/hany);

    document.getElementById("fizetendo").innerHTML = fiz +"Ft/fő";
}


document.getElementById("gomb").onclick = szamol;