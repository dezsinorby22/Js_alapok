console.log("hello");

(function () {
'use strict'
 
     //minden amit ide irok az a strict mode-ban fog futni
     //a strict mode szigorubb szabalyokkal futtatja
     //a js kodot, és több hibát fog kiírni a böngésző
     // amit enélkül nem tenne meg
     // ez egy ujradeklarálható változó lesz:
var szoveg2 = "valami";
console.log(szoveg2);
     // erre nem kapunk hibát, mert a var kulcsszóval deklarált változót
     //ujradeklarálhatjuk
var szoveg2 = "valami";

let szoveg3 ="szoveg3 ezt let-el hoztuk letre"
console.log(szoveg3);
//a let kulcsszóval létrehozott változókat nem léehet ujradeklarálni,
//a következő sort kicommentezzük akkor nem kapunk hibát:
//let szoveg3 ="szoveg3 ezt let-el hoztuk letre";
    
    // ez egy értékadás, nem deklarálás
    szoveg3= "uj erteket kap a szoveg3";
   
    // a console.log egy fugveny, aminek átadjuk a szoveg3 valtozót
    // a console.log egy más ember által írt kód, ami azt csinálja
    // a neki adott változóval , hogy kiírja a console-ra
    console.log(szoveg3);
    
    //kiírhatunk egyszerre szoveget és változót is :
    let szam1 = 94;
    console.log ("a szam1 valtozo értéke: "+szam1);
    
}());  //itt van vege a strict mode-nak ,ez utan mar nem fog strict 
        //mode-ban futni a kod




    //implicit global változó lesz a szoveg 
    //global: a szoveg változó mindenhol elérhető lesz a kódban
    // implicit global változót lehetőleg ne használjunk!

szoveg = "3";
console.log(szoveg);