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
