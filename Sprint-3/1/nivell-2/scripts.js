            function calcular() {
                let num1 = parseInt(document.getElementById("num1").value);
                let num2 = parseInt(document.getElementById("num2").value);
                let op = radioValue()
                let resultat = calculadora(op, num1, num2);
                document.getElementById("resultat").innerHTML = "El resultat és " + resultat;

                function radioValue() {
                    let op = document.getElementsByName("op");
                    for (i = 0; i < op.length; i++) {
                        if (op[i].checked) {
                            return op[i].value;
                        }
                    }
                }
                function calculadora(op, num1, num2) {
                    let resultat = 0;
                    if (op == "+") {
                        resultat = num1 + num2;

                    } else if (op == "-") {
                        resultat = num1 - num2;
                    } else if (op == "*") {
                        resultat = num1 * num2;
                    } else if (op == "/") {
                        if (num2 == 0) {
                            alert("Dividir per zero no ens protarà enlloc, tria un altre número");
                            return "indefinit";
                        } else {
                            resultat = num1 / num2;
                        }
                    } else {
                        alert("alguna cosa no has fet bé");
                    }
                    return resultat;
                }
            }
        
