/* exercici 1 */
function ex1n3() {
    let myName = document.getElementById("nom1").value;
    nom = [];
    for (let i = 0; i < myName.length; i++) {
        console.log(myName[i]);
        nom += myName[i] + '<br>';
        document.getElementById("ex1n3").innerHTML = nom;

    }
}
/* exercici 2 */
/* creació de mapa */




function ex2n3() {
    const vocals = new Map([
        ["a", "a"],
        ["e", "e"],
        ["i", "i"],
        ["o", "o"],
        ["u", "u"]
    ]);
    const numbers = new Map([
        ['0'],
        ['1'],
        ['2'],
        ['3'],
        ['4'],
        ['5'],
        ['6'],
        ['7'],
        ['8'],
        ['9']
    ]);

    let myName = document.getElementById("nom2").value;
    let myNameLower = myName.toLowerCase();
    console.log(myNameLower)
    nom = [];
    for (let i = 0; i < myNameLower.length; i++) {

        if (vocals.has(myNameLower[i])) {
            console.log("He trobat la Vocal: " + myNameLower[i]);
            nom.push("He trobat la Vocal: " + '<b>' + myNameLower[i] + '</b>' + '.' +
                '<br>');
        } else if (numbers.has(myNameLower[i])) {
            console.log("Els noms de persona no contenen números com el " + myNameLower[i]);
            nom.push("Els noms de persona no contenen números com el " +
                '<b>' + myNameLower[i] + '</b>' + '.' + '<br>');
        } else {
            console.log("He trobat la Consonant " + myNameLower[i]);
            nom.push("He trobat la Consonant " + '<b>' + myNameLower[i] + '</b>' + '.' + '<br>');
        }



    }
    document.getElementById('ex2n3').innerHTML = nom.join('');



}
/* exercici 3 */
function ex3n3() {
    let myName = document.getElementById("nom3").value;
    let mapName = new Map();
    for (let i = 0; i < myName.length; i++) {

        let v = 1;
        if (mapName.has(myName[i])) {
            v = mapName.get(myName[i]);
            mapName.set(myName[i], v + 1);
        } else {
            mapName.set(myName[i], v)
        }

    }
    let resultat = "";
    for (let [key, value] of mapName) {
        resultat += (key + ' = ' + value + "<br>");
    }
    document.getElementById('ex3n3').innerHTML = resultat;

}
/* exercici 4 */

function ex4n3() {
    let nom = document.getElementById("nom4").value;
    let cognom = document.getElementById("cognom4").value;
    let nomCognom = [];
    for (let i = 0; i < nom.length; i++) {
        nomCognom.push(nom[i]);

    }
    nomCognom.push("--");
    for (let i = 0; i < cognom.length; i++) {
        nomCognom.push(cognom[i]);

    }
    document.getElementById("ex4n3").innerHTML = nomCognom.join(", ");
}

function ex5n3() {
    let resultat = ex5();

    document.getElementById("ex5n3").innerHTML = resultat.join("<br>");

}