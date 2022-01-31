// // Тернарный оператор
//     // //     const result = number1 < number2 ? number1 : number2; 
//     // // return result;
    
//     //function expression
   
//     const result2 = getMiniNumber(1,5);
// const getMiniNumber = function(number1, number2){
// return number1 < number2 ? number1 : number2;
// }

// // function declaration
// function getMiniNumber2(number1, number2){
//     return number1 < number2 ? number1 : number2;
// }
// const result1 = getMiniNumber(1,5);
// // arrow function   

// let isRuning = false;
// while (-5){
//     alert(1);


// if (isRuning){
//     isRuning = false;
// }
// }





// While


// let counter = 0;

// while(counter < 10){
//     continue;

//     if (counter % 2 === 0){
//     counter++;
//     }
//     console.log(counter);
// }


// while do

// counter = 0;

// do{
//     counter++;
//     if (counter % 2 === 0){
//         continue;
//     }
//     console.log(counter);
// } while(counter <= 10);


// for

//1
function numberReduction (){
for( let a = 25; a >= 0  ;a-- ){
console.log(a);
}
}

//2
function multipleOf(){
    for(let b = 10, crat; b <= 50 ; b++){
        crat = b % 5;
if (crat === 0){
console.log(b)
}
}
}

//3

function sumChisel(){
    for(let c = 0, sum = 0; c <= 100; c++){
    console.log(sum += c);
    }
}

//4
function solveExample(){
    for (let sum; sum !== 6; ){
        sum =  +prompt('Решите пример (2 + 2 * 2)')
        if(sum === 6) {
            return ('молодец');
        }
    }
    
}
