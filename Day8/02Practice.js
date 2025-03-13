//Map --.Map is A Object which holds key-value paires and remember original insertion order.
//defineing Map
let myMap = new Map();
myMap.set("Name","Rajesh Rajghor");
myMap.set("Age",21)
myMap.set("class",9)

console.log(myMap)  //Map(3) { 'Name' => 'Rajesh Rajghor', 'Age' => 21, 'class' => 9 }

//Apply for loop
for(let i of myMap){
    console.log(i)
}
//output//
// [ 'Name', 'Rajesh Rajghor' ]
// [ 'Age', 21 ]
// [ 'class', 9 ]

//foe key value pair
for (let [key,value] of myMap){
    console.log(`${key}:${value}`)
}
//output//
// Name:Rajesh Rajghor
// Age:21
// class:9