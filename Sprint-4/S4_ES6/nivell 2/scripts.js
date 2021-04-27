/* Excercici 7 */
function taulaMulti() {
    let userNum1 = parseInt(prompt("Introdueix un número de l'1 al 10"));
    let userNum2 = parseInt(prompt(`Introdueix una altre número de l'1 al 10`));
    let taula = creaTaula(userNum1, userNum2);

    document.getElementById("resultat").innerHTML = taula;
}

const creaTaula = (num1, num2) => {
    let taula = [];
    for (let i = 0; i < num2; i++) {
        taula += num1 + " X " + (i + 1) + " = " + num1 * (i + 1) + '<br>';
    }
    return taula;
}



/* Excercici 8 */
function taulaForm() {

    let userNum11 = parseInt(document.getElementById("userNum1").value);
    let userNum12 = parseInt(document.getElementById("userNum2").value);
    let taula = creaTaulaHtml(userNum11, userNum12);
    console.log(taula);
    creaHtml(taula);

}

function creaTaulaHtml(num1, num2) {

    let taula = [];
    for (let i = 0; i < num2; i++) {
        taula.push({
            numero1: num1,
            numero2: i + 1,
            resultat: (num1 * (i + 1))
        });

    }

    return taula;

}

const creaHtml = (llista) => {


    let stringTaula = ` <thead>
                            <tr>
                                <th scope="col">Num 1</th>
                                <th scope="col">Num 2</th>
                                <th scope="col">Resultat</th>
                            </tr>
                        </thead>
                        <tbody></tbody>`

    for (let operacions of llista) {
        let fila = "<tr> <td>";
        fila += operacions.numero1;
        fila += "</td>";

        fila += "<td>";
        fila += operacions.numero2;
        fila += "</td>";

        fila += "<td>";
        fila += operacions.resultat;
        fila += "</td>";

        fila += "</tr>";

        stringTaula += fila;

    }

    document.getElementById("tablaMulti").innerHTML = stringTaula;
}