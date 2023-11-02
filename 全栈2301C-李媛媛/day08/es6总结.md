ES6：
   let:  1.变量不能重复声明，当前作用域不可以重复声明，在下一个作用域可以重复声明
		2.不存在变量提升
		3.不影响作用域链
    const：1.声明常量必须是大写，不能更改
		2.块儿级作用域
		3.对于数组和对象元素的修改，不算做对常量的修改，不会报错
作用域链：JS中的变量查找机制，函数执行时首先会在当前作用域中查找变量，如果找不到，会
逐级向上级查找，一直找到全局作用域，或者undefined



作用域：变量作用的范围叫做作用域

解构赋值：1.数组解构赋值不能使用字符串，使用下标的形式进行解构
		2.对象的解构赋值使用属性名进行解构，属性名可以重命名
箭头函数：es6允许使用 （）=>来定义函数
特点：1.this是动态的，this的值取决于函数本身被谁调用
	 2.没有arguments伪数组，如果有绝对是来自于父组件
	 3.不能作为构造实例化对象


call apply bind 的区别：

call和apply会调用函数，并且改变this指向
call和apply传递的参数不一样，call传递参数用逗号隔开，apply使用数组传递参数，并且apply和call是一次性传入参数，而bind可以分为多次传入
bind是返回绑定this之后的函数

都可以改变this指向
三个第一个参数都是改变this指向后的对象，如果没有第一个参数，或者参数为undefined或null
则默认指向全局window

拓展运算符
【...】扩展运算符能将【数组】转换为逗号分隔的【参数序列】

遍历器(lterator)
读法: 迭代器 生成器 遍历器
概念:是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 terator 接口，就可以完成遍历操作(即依次
处理该数据结构的所有成员)





Promis的概念
概念: promise函数是解决异步编程问题产生的,所谓 Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件(通常是个异步操作)的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 AP1，各种异步操作都可以用同样的方法进行处理



特点
1.对象的状态不受外界影响,有三种状态: pending (进行中)、fulfilled (已成功)和 rejected (已失败)
2.一旦状态改变,就不会再变,任何时候都可以得到这个结果.
3.、Promise 对象的状态改变，只有两种可能: 从 pending 变为 fulfilLed 和从 pending 变为 reiected 。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved(已定型)。如果改变已经发生了，你再对 Promise 对象添加回调函数，也会立即得到这个结果。这与事件(Event)完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的





ajax
1.建立连接，请求接口，
2.确定请求的方法，地址
3.配置好参数
4.确定是否成功

const xhr = new XMLHttpRequest()
xhr.open('get','url')
xhr.send(参数)
xhr.onreadystatechange=function(){
	xhr.readystate==4的话表示成功建立请求连接
	xhr.status的值在200到299之间表示请求成功
}

ajax,promise,axios是根据XMLHttpRequest封装的



Promise
可以链式调用,里面有两个参数:resolve,reject ，它本身是个容器，
状态一经凝固，不会在变化
状态: 有三个状态,padding,fufilled,reject3.状态变化: 从pedding -> 成动,从padding->reject
promise的then返回的是一个promise对象

promise.all([])all同时发起请求，是并发请求
所有参数成功，才返回数组形式的信息，有一个失败
会返回这个失败的信息



promise.race([])
只要有一个Promise变成fulfilled状态，那么就结束
 多个promise同时请求的时候，以第一个请求完成的promse状态 作为整个promise的状态多个宏任务 执行顺序是 先进先出
结束的终点 直到有一个resolve出现



Promise.finally（）无论成功失败都会执行一个方法



async/await 链式调用的语法糖
async声明异步函数
 await 是将函数改变为同步请求
await并不是将异步函数变成同步函数，只是改变了异步函数的调用方式
调用await的时候，他会等待Promise执行出结果后将结果返回。可以通过变量进行
接收结果
调用异步函数的时候，可以直接在函数前使用await关键字来对其进行调用
一旦一个接口报错，整个程序报错，不会再往后走
async里的代码是从上到下执行





1.Map对象
	① 概念和出现的原因:JavaScript 的对象(Object) ，本质上是键值对的集合Hash 结构)，但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值(包括对象)都可以当作键。也就是说，Object 结构提供了“字符串一值”的对应，Map 结构提供了“值值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
	② map的方法使用
		1.使用new Map()
		2.判断长度: map.size
		3.添加元素: map.setl
		4.获取键值: map.get
		5，判断当前对象存不存在该属性: map.has
		6.删除当前对象中的属性: map.delete
		7.清空该方法的所有成员: map.clear



2. set数组

   ① 概念: ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值.
   ② 本质: 是一个构造函数，
   ③ set的实例遍历操作
   	· Set.prototype.keys() : 返回键名的遍历器
   	· Set.prototype.valuesO) : 返回键值的遍历器
   	· Set.prototype.entries(): 返回键值对的遍历器
   	· Set.prototype.forEach() :使用回调函数遍历每个成员
   ④ 方法总结
   	(1).获取元素的个数: array.size()
   	(2).添加元素: array.add()
   	(3).删除元素: array.delete()
   	(4).检测是否存在这个值: array.has()
   	(5).清空: array.clear()

3. class

   	① ES6 提供了更接近传统语言的写法，引入了 Class(类)这个概念，作为对象的模板。通过 cLass 关键字，可以定义类。基本上，ES6 的 class 可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的 lass 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。上面的代码用 ES6 的 cLass 改写，就是下面这样。
   	
   		(1) 传统的es5的写法
   	
   				function Point(x, y) {
   								this.x = x;
   								this.y = y;
   	
   							}
   	
   				Point.prototype.toString = function () {
   								return '('+ this.x + ',' + this.y + ')';
   	
   							}
   	
   				var p = new Point(1，2);
   	
   		(2) 引入类以后class得写法
   	
   		(3) class的set和get属性
   	
   		(4) 类的static属性	
   	
   			1.概念:类(class)通过 static 关键字定义静态方法。不能在类的实例上调用静态方法，而应该通过类本身调用。这些通常是实用程序方法，例如创建或克隆对象的功能。
   
4. proxy

   ① 概念
   	Proxy 对象用于创建一个对象的代理,从而实现基本操作的拦截和自定义 (如属性查找、赋值、枚举、函数调用等)

   ② 语法：

   	const p = new Proxy(target, handler)
   		(1) target
   			要使用 Proxy 包装的目标对象 (可以是任何类型的对象，包括原生数组，函数，甚至另一个代理)
	
   		(2) handler
   			一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。

   ③  handler (en-US)
   包含捕捉器 (trap)的占位符对象，可译为处理器对象,
   	(1) traps
   		提供属性访问的方法。这类似于操作系统中捕获器的概念,
   	(2) target
   		被 Proxy 代理虚拟化的对象。它常被作为代理的存储后端。根据目标验证关于对象不可扩展性或不可配置属性的不变量(保持不变的语义)

5. 总结

   ES6新增了哪些特性

   ① let 和 const

   ② 箭头函数

   ③ 默认参数

   ④ 扩展运算符

   ⑤ 模板字符串

   ⑥ Promise

   ⑦ 迭代器和生成器

   ⑧ Map / Set / Symbol

   ⑨ class类

   ⑩ 解构赋值

   ⑪ 对象的方法 Object.assion

   ⑫ Incluide 数组方法：Array.from
