var add = function(a, b, c) {
    return a + b + c
  }
// memorize  高阶函数
// memorize  内部产生了闭包函数， 并且return 给   memoizedAdd
return function(){
    //   console.log('我是innner function',cache.lu);
    // console.log(Array.prototype.join.call(arguments, ","),'////');

 
var key = arguments.length + Array.prototype.join.call(arguments, ",");
//console.log(key);
    if (key in cache) {// in json 运算符
        return cache[key]   // []  没有运行  f
    }
    else {
        //console.log('add。。。。。')
        // cache[key] = f(arguments);
        // apply call 都可以运行函数， 手动指定内部的this , 
        // apply  数组集合， 作为f 的参数
        return cache[key] = f.apply(this, arguments)
        // return cache[key]
        // cache[key] = f.call(this, ...arguments)
    }
    // else return cache[key] = f.apply(this, arguments)

// 函数运行完本应销毁
// 函数进入执行栈  创建函数作用域，
var memorizedAdd = memorize(add) //运行才会生成闭包函数
// 出栈   ？  伴随内存的回收   cache  没有了 但却没有出栈， cache 被接下来的函数引用了
// memorizedAdd(1,2);  //运行时就可以找到生成时上下文环境中的变量
// memorizedAdd(1,2);
}
var memoizedAdd = memorize(add)  
// memoizedAdd(1,2,3)
console.time('use memorize') //计时开始

for(var i = 0; i < 100000; i++) {
    // memoizedAdd(1, 2, 3)
    add(1,2,3)
}
console.timeEnd('use memorize')
