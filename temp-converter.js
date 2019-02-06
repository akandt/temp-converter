// function tempConvert (fahrenheit, celsius) {
//     const fahr = celsius * 1.8 + 32;
//     const cels = (fahrenheit - 32) * 1.8;
//     return temperature;
// }
//  const temperature = tempConvert(50,0);

// console.log(temperature);

function tempConvert (fahrenheit, celsius) {
    var fahr = celsius * 1.8 + 32;
    var cels = (fahrenheit - 32) * 1.8;
    var temperature = [fahr, cels];
    return temperature;
}
 var getFarh = tempConvert(50, 10)[0];
 var getCels = tempConvert(50, 10)[1];

console.log(getCels);