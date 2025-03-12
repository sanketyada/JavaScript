//nullish coalescing operator
//Some Times when data does not return from server or backend/Api 
//then we use nullish coalescing operator to provide a value instead of server return data

let data={username:"Alice Kinney"}; //let return data frim server or Backend

let result= data ?? {name:"Unknown User"}
console.log(result)
//Output  { username: 'Alice Kinney' }


//Case 2
let data1=undefined // let Server or backed data given undefind due to crash

let result1= data1 ?? {name:"Unknown User"}
console.log(result1)
//Output  { name: 'Unknown User' }