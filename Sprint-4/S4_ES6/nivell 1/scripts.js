/* Excercici 1 */

/* function multiply(num1, num2) {
    return num1 * num2;
} */
const multply = (num1, num2) => {
        return num1 * num2;
    }
    /* exemple */
let result = multply(2, 3);
console.log(`El resultat és ${result}`);


/* function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
} */

const toCelsius = (fahrenheit) => {
        return (5 / 9) * (fahrenheit - 32);
    }
    /* exemple */
let celsius = toCelsius(93);
console.log(`93 graus Farenheit són ${celsius} graus Celsius.`)

/* // This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
} */
const padZeros = (num, totalLen) => {
        var numStr = num.toString();
        var numZeros = totalLen - numStr.length;
        for (var i = 1; i <= numZeros; i++) {
            numStr = "0" + numStr;
        }
        return numStr;
    }
    /* exemple */
let numStr = padZeros(50, 5)
console.log(numStr);


/* function power(base, exponent) {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
} */

const power = (base, exponent) => {
        return Math.pow(base, exponent);
    }
    /* exemple */

let powerNumber = power(2, 3);
console.log(powerNumber);

/* function greet(who) {
    console.log("Hello " + who);
} */

const greet = (who) => {
        return `Hello ${who}`;
    }
    /* exemple */
let saludo = greet("Felipe");
console.log(saludo);

/* Excercici 2 */

var users = [{
        firstName: 'Homer',
        lastName: 'Simpson'
    },
    {
        firstName: 'Marge',
        lastName: 'Simpson'
    },
    {
        firstName: 'Bart',
        lastName: 'Simpson'
    },
    {
        firstName: 'Lisa',
        lastName: 'Simpson'
    },
    {
        firstName: 'Maggie',
        lastName: 'Simpson'
    }
];
var names = users.map(function(user) {
    return user.firstName;
});

console.log(names);

/* Exercici 3 */

var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const unir = (stringAnterior, stringActual) => stringAnterior + stringActual + " ";

console.log(epic.reduce(unir));

/* Exercici 4 */

/* Crear una funció que accepti un string i retornada aquest string revertit.
Nota: Usar funció fletxa(arrow functions), l 'operador de prograpación (spread operator) y el mètode .reverse() */

const reverse = (string) => {
    let copyString = [...string];
    return copyString.reverse().join('').toString();
}
let s1 = "React"
let stringAlReves = reverse(s1);

console.log(stringAlReves);

/* Exercici 5

Modifica la funció 'a()' per a reemplaçar la promesa per async/await:

function b() {
// tasques asíncrones , que triguen una estona..
}

function a() {
// Ens esperem que la funció b acabi
b().then() = > { doMoreWork();
}
} */
const doMoreWork = () => console.log(`happy birthday!`)

function b() {
    // tasques asíncrones , que triguen una estona..
}

async function a() {
    // Ens esperem que la funció b acabi i ens doni el resultat o l'error
    try {
        const result = await b();
        doMoreWork();
    } catch (error) {
        console.log(error)
    }

}
a();

/* exercici 6 */
var tasks = [{
        'name': 'Start React web',
        'duration': 120
    },
    {
        'name': 'Work out',
        'duration': 60
    },
    {
        'name': 'Procrastinate on facebook',
        'duration': 240
    }
];

let tasksNamesForEach = [];
tasks.forEach(tareas => tasksNamesForEach.push(tareas.name));
console.log(tasksNamesForEach);

let tasksNamesMap = [];
tasks.map(tareas => tasksNamesMap.push(tareas.name));
console.log(tasksNamesMap);