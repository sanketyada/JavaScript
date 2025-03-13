//Objects inside array accessing
let userDetail=[
    {
        name:"Samrat Singh",
        age:21
    },
    {
        name:"Shivani Sharma",
        age:43
    },
    {
        name:"Arun Ravidas",
        age:54
    },
    {
        name:"Hony singh",
        age:50
    },
]
let allDetail=userDetail.filter((result)=>{ //filter need truthy Values
    return result.age >33;
})
console.log(allDetail)