arr=[1,2,3,4,5];
x=arr.map((a)=>{return a*2})
console.log(x)

arr= ["hello","world","abc" ]

words=arr.map(arr=>arr.toUpperCase())
console.log(words); 

arr=[1,2,3,4,5];
x=arr.filter((a)=>{return a%2==0})
console.log(x)

arr1= ["hello", "world", "abc"] 
y=arr1.filter((a)=>{return a.length>=5})
console.log(y)

arr=[1,2,3,4,5];
x=arr.forEach((a,b,c)=>console.log(a,b,c))

arr1= ["hello", "world"] 
console.log(arr1.forEach((x)=>{console.log(x+"!")}))

arr=[1,2,3,4,5];
x=arr.every((a)=>{console.log(a>0)})

arr1=["hello", "world", "abc"]
y=arr1.every((a)=>{console.log(a.length>5)})

arr=[1,2,3,4,5];
x=arr.some((a)=>{return (a>0)})
console.log(x)

arr1=["hello", "world", "max"]
y=arr1.some((a)=>{return (a.includes('x'))})
console.log(y)  

arr=[1,2,3,4,5]
arr1=["hello", "world", "max"]
x=arr.find(a=>a>1)
y=arr1.find(a=>a.length==3)

console.log(x,y)

arr=[1,2,3,4,5]
arr1=["hello", "world", "max"]
x=arr.findIndex(a=>a>1)
y=arr1.findIndex(a=>a.length==3)

console.log(x,y)