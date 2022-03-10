function NumMap<Number>(n): object{/*создать new Map<number, null>() проитерироваться циклом от 0 до 100 и задать как ключ мапы, индекс, а как значение null.*/
let numNull =  new Map<Number, null>();
for(let i = 1; i <n+1 ; i++){
        numNull.set(i,  null)
}
   return numNull
}

const numIf= NumMap(100);
const temp=numIf.keys()
function mapConsole(keyConsole: temp){/**/
for (item of keyConsole){
if ((item%3==0)&&(item%5!=0)){
console.log("key:", item, "Devided by tree")}
if ((item%5==0)&&(item%3!=0)){
console.log("key:", item, "Oops, here is 5")}
if ((item%5==0)&&(item%3==0)){
console.log("key:", item, "I can believe in that!")}}
    return 
}
        
let temp1=mapConsole(temp)
console.log(temp1)
