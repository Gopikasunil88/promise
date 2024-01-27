// async function add1(a,b){
//     let promise = new Promise((resolve,reject)=>{
//       var sum =a+b
//       if(sum>10){
//         resolve(sum)
//       }
//       else{
//         reject("Error")
//       }
    
// })
// var ans =await promise
// document.getElementById("textc").innerHTML=`The sum is ${ans}`
// }
// add1(10,2)


// async function add2(a,b){
//   let promise1= new Promise((resolve,reject)=>{
//     var sub =a-b
//     if(sub>10){
//       resolve(sub)
//     }
//     else{
//       reject("Error")
//     }
  
// })
// var ans1 =await promise1
// document.getElementById("textA").innerHTML=`The sub is ${ans1}`
// }
// add2(50,15)

// async function add3(a,b){
//   let promise2= new Promise((resolve,reject)=>{
//     var mult =a*b
//     if(mult>10){
//       resolve(mult)
//     }
//     else{
//       reject("Error")
//     }
  
// })
// var ans2 =await promise2
// document.getElementById("textB").innerHTML=`The  is ${ans2}`
// }
// add3(50,15)

// async function add4(a,b){
//   let promise3= new Promise((resolve,reject)=>{
//     var div =a/b
//     if(div>10){
//       resolve(div)
//     }
//     else{
//       reject("Error")
//     }
  
// })
// var ans3 =await promise3
// document.getElementById("textC").innerHTML=`The div is ${ans3}`
// }
// add4(100,2)
function ajaxcall(){
  var xhttp = new XMLHttpRequest()
  xhttp.open('GET','https://dummyjson.com/products',true)
  xhttp.send()
  xhttp.onreadystatechange = function () {
  let promise = new Promise((resolve,reject)=>{
    if(this.readyState==4 && this.status==200){
      resolve("it is done")
    }
  })
  promise.then((val)=>{
    document.getElementById("textc").innerHTML=`The result is ${val}`
  })
  }
}
ajaxcall()


