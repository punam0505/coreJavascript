
/*let i = 4;
do{
  console.log(i);
  i--;
}while(i>0);  
*/

/*

* * *
* *
*

*/
const values = ['a', 'b', 'c'];
//console.log(values);

/* values.push('d');
console.log(values);

values.pop();
console.log(values);*/

//const a = values.slice(1, 2);
//console.log(a);
//console.log(values);


const a = values.splice(0, 2, 'foo');
console.log(a);  // a, b
console.log(values); //c