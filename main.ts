function NumMap(n: number): number[][]{/*создать new Map<number, null>() проитерироваться циклом от 0 до 100 и задать как ключ мапы, индекс, а как значение null.*/
let numNull =  new Map();
for(let i = 0; i < n ; i++){
        numNull.set(i,  null)
}
   return numNull
}

const numIf= NumMap(100);
//console.log(numIf);
const temp=numIf.keys()
function mapConsole(keyConsole: number[]){/**/
for (item of keyConsole){
if ((item%3==0)&&(item%5!=0)){
console.log("Devided by tree")}
if ((item%5==0)&&(item%3!=0)){
console.log("Oops, here is 5")}
if ((item%5==0)&&(item%3==0)){
console.log("I can believe in that!")}
else {
    console.log("key:", item)}}}
        
mapConsole(temp)


const Data:string[][] = [["36", "не приватизирован", "4 собственника", "Парковая"],
["45", "приватизирован", "3 собственника", "Луговая"],
["56", "не приватизирован", "1 собственник", "Луговая"],
["56", "приватизирован", "5 собственников", "Ленина"],
["25", "не приватизирован", "2 собственника", "Ленина"]]
function SearchData(data: string[][]): boolean{
for (item of data) {
    let [square, , ,location] = item
    //console.log(square)
    console.log(((Number(square) <= 40 && location == "Ленина") || (Number(square)== 56)) ? true :  false)
}
}

SearchData(Data)
