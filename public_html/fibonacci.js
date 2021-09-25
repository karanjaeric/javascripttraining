/**
 * This application is used to generate a fibonnaci series.
 */
let seriesNumber=10;
let fibonnaciSeries=[1,1];

while(fibonnaciSeries.length <seriesNumber){
    
    let x=fibonnaciSeries[fibonnaciSeries.length-2];
    let y=fibonnaciSeries[fibonnaciSeries.length-1];
    let z=x+y;
    fibonnaciSeries.push(z);
}
console.log(process.argv);
console.log(fibonnaciSeries);


