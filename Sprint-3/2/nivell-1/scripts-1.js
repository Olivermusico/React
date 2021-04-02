/* Nivell-1 */

/* exercici 1 */
function ex1() {
    console.log("El nom és oliver")
    let myName = ['o', 'l', 'i', 'v', 'e', 'r'];

    for (let i = 0; i < myName.length; i++) {
        console.log(myName[i]);

    }
}
/* exercici 2 */
/* creació de mapa */




function ex2() {
    console.log("El nom és oliver")

    const vocals = new Map([
        ["a", "a"],
        ["e", "e"],
        ["i", "i"],
        ["o", "o"],
        ["u", "u"]
    ]);


    /* mi nombre con unos números en medio. */
    let myName = ['o', 'l', 'i', 'v', 'e', 3, 7, 'r'];
    for (let i = 0; i < myName.length; i++) {

        if (vocals.has(myName[i])) {
            console.log("He trobat la Vocal: " + myName[i]);
        } else if (typeof myName[i] == 'number') {
            console.log("Els noms de persona no contenen números com el " + myName[i]);

        } else {
            console.log("He trobat la Consonant " + myName[i]);
        }


    }



}
/* exercici 3 */
function ex3() {
    console.log("El nom és oliver")
    let myName = ['o', 'l', 'i', 'v', 'e', 'r', 'o'];
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
    console.log(mapName);

}
/* exercici 4 */

function ex4() {
    let nom = ['o', 'l', 'i', 'v', 'e', 'r'];
    let cognom = ['c', 'a', 'r', 'r', 'a', 's', 'c', 'o'];
    let nomCognom = [];
    for (let i = 0; i < nom.length; i++) {
        nomCognom.push(nom[i]);

    }
    nomCognom.push("");
    for (let i = 0; i < cognom.length; i++) {
        nomCognom.push(cognom[i]);

    }
    console.log(nomCognom);
}