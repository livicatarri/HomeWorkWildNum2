function NumMap<Number>(n){/*создать new Map<number, null>() проитерироваться циклом от 0 до 100 и задать как ключ мапы, индекс, а как значение null.*/
let numNull =  new Map<Number, null>();
for(let i = 1; i <n+1 ; i++){
        numNull.set(i,  null)
}
   return numNull
}

const numIf= NumMap(100);
//console.log(numIf);
const temp=numIf.keys()
function mapConsole<Array>(keyConsole: temp){/**/
for (item of keyConsole){
if ((item%3==0)&&(item%5!=0)){
console.log("Devided by tree")}
if ((item%5==0)&&(item%3!=0)){
console.log("Oops, here is 5")}
if ((item%5==0)&&(item%3==0)){
console.log("I can believe in that!")}
else {
    console.log("key:", item)
}
}

}

        
let temp1=mapConsole(temp)
console.log(temp1)

/*let arr= [["36", "не приватизирован", "4 собственника", "Парковая"],
["45", "приватизирован", "3 собственника", "Луговая"],
["56", "не приватизирован", "1 собственник", "Луговая"],
["56", "приватизирован", "5 собственников", "Ленина"],
["25", "не приватизирован", "2 собственника", "Ленина"]]*/

interface Realtor{
    square: number
    privateHome: string;
    countOwner: string;
    location: string;
}
const Arr : Realtor[] = [
    {square:"36", privateHome:"не приватизирован", countOwner:"4 собственника", location:"Парковая"},
    {square:"45", privateHome:"приватизирован", countOwner:"3 собственника", location:"Луговая"},
    {square:"56", privateHome:"не приватизирован", countOwner:"1 собственник", location:"Луговая"},
    {square:"56", privateHome:"приватизирован", countOwner:"5 собственников", location:"Ленина"},
    {square:"25", privateHome:"не приватизирован", countOwner:"2 собственника", location:"Ленина"},
    ]
    console.log(Arr)
    
