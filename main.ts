function NumMapFill(n: Number):Map<Number, null>  {/*создать new Map<number, null>() проитерироваться циклом от 0 до 100 и задать как ключ мапы, индекс, а как значение null.*/
let numNull =  new Map();
for(let i = 0; i <  n ; i++){
        numNull.set(i,  null)
}
   return numNull
}

console.log(NumMapFill(100));

function mapConsoleMessage(keyConsole: number[]): void{/**/
for (const item of keyConsole){
if ((item%3==0)&&(item%5!=0)){
console.log("Devided by tree")}
if ((item%5==0)&&(item%3!=0)){
console.log("Oops, here is 5")}
if ((item%5==0)&&(item%3==0)){
console.log("I can believe in that!")}
else {
    console.log("key:", item)}}}
  //console.log(numIf);  
//mapConsole(temp)
mapConsoleMessage(NumMapFill(100).keys())

const DataArr:string[][] = [["36", "не приватизирован", "4 собственника", "Парковая"],
["45", "приватизирован", "3 собственника", "Луговая"],
["56", "не приватизирован", "1 собственник", "Луговая"],
["56", "приватизирован", "5 собственников", "Ленина"],
["25", "не приватизирован", "2 собственника", "Ленина"]]
function SearchDataApartament(dataSearch: string[][]): void{
for ( const item of dataSearch) {
    let [square, , ,location] = item
      //return ((Number(square) <= 40 && location == "Ленина") || (Number(square)== 56)) ? true :  false
    console.log (((Number(square) <= 40 && location === "Ленина") || (Number(square)== 56)) ? true :  false)
   // return rezult
}

}
SearchDataApartament(DataArr)
