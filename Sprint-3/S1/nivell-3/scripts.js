 /* obtener valores */
 function getNums() {
     let nums = [];
     let n1 = parseFloat(document.getElementById("num1").value)
     let n2 = parseFloat(document.getElementById("num2").value)
     nums.push(n1, n2)
     return nums;
 }

 /* operacions */
 function suma() {
     let nums = getNums();
     let resultat = nums[0] + nums[1];
     writeResult(resultat);

 }

 function resta() {
     let nums = getNums();
     let resultat = nums[0] - nums[1];
     writeResult(resultat);
 }

 function multi() {
     let nums = getNums();
     let resultat = nums[0] * nums[1];
     writeResult(resultat);
 }

 function div() {
     let nums = getNums();
     let resultat = 0;
     if (nums[1] == 0) {
         alert("Dividir per zero no ens protarà enlloc, tria un altre número");
         return "indefinit";
     } else {

         resultat = nums[0] / nums[1];

     }
     writeResult(resultat);
 }
 /* escriure resultat */
 function writeResult(n) {
     document.getElementById("resultat").innerHTML = n;
 }