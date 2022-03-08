

//1.forEach封装查找数组和对象数组
function keyCodeTransform(Keycode) {
    const arr = [1, 2, 3, 5,7]
    const objarr = [
    {
        key:'right',keycode:25
    },
    {
        key:'left', keycode:27
    }
]
    arr.forEach((v,i) => {
        console.log(v,i);
    })
    let ResData = null
    objarr.forEach((v,i) =>{
        if(v.keycode === Keycode)
        {
            ResData = v.key
            console.log('赋值了');
        }
        console.log(v.key,v.keycode,ResData);//1.right 25 null   2.left 27 left  循环了两次 
    })

    return ResData
}

// keyCodeTransform(27) 

//2.concat
 function concat1(){
     let arr = ['rich','poor']
     let arr2 = ['Notrich','NotPoor']
     let arr3 = arr.concat(arr2)
     console.log(arr3);
 }
//  concat1() 


//3.every方法封装  用来过滤 返回一个布尔值 一个出错就返回false 
function every1(){
    let arr = [12,45,645,53,55]
    let arr2 = ['rick','rock','jason']
    let arr3 = [{
        code:1,
        str:'rick'
    },
    {
        code:2,
        str:'rock'
    } 
]
    let result =  arr.every((Numbervalue1)=>{
        return Numbervalue1 > 10
    })   //用来判断普通数字数组是没问题
    let result2 = arr2.every((Stringvalue1)=>{
        return Stringvalue1 = ''
    }) //但用来判断字符串数组就不行
    let result3 = arr3.every((Objectvalue1)=>{
        return Objectvalue1.code = ''
    }) //用来判断对象数组也不行
    console.log(result);
    console.log(result2);
    console.log(result3);

}

// every1() 

//4.some方法封装 有一个元素满足就返回true 立即停止 every和some就只能来判断数值 不能操作字符串

function some1(){
    let arr = [12,45,645,53,55]
    let arr2 = ['rick','rock','jason']
    let arr3 = [{
        code:1,
        str:'rick'
    },
    {
        code:2,
        str:'rock'
    } 
]
  let result1 =  arr2.some((a,b,c)=>{//a是当前遍历的数组的值 b是当前的索引 c是整个数组
      console.log(a,b,c);
      return a === 'rick'
   })

   let result2 = arr3.some((a,b,c)=>{
       console.log(a,b,c);
       return a.code === 3
   })
   console.log(result1);
   console.log(result2);
}
// some1()

//5.reduce 
 
function reduce1(){
  let arr = [520,69,88,666]

  let sum = arr.reduce((a,b,c,d)=>{//a是初始值 b是当前元素的值 c是当前元素索引 d是整个数组对象
      console.log(a,b,c,d);
      return a+b
  },20)//如果不传20，reduce直接从69开始，并将520作为初始值
  
  console.log(arr,sum);
}

// reduce1()



//6.map  返回了新数组
function map1(){
    let arr = [12,45,645,53,55]
    let arr2 = ['rick','rock','jason']
    let arr3 = [{
        code:1,
        str:'rick'
    },
    {
        code:2,
        str:'rock'
    } 
]

   let result1 = arr.map((a,b,c)=>{
       console.log(a,b,c);
   })
   
}

map1()
 $("#div1").hide()
