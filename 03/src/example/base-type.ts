// 布尔类型
let d1n910bool:boolean
d1n910bool = false
// d1n910bool = 134

// 数值类型
let d1n910num:number
d1n910num = 123
// d1n910num = false

// 二进制的123
d1n910num = 0b1111011
// 八进制的123
d1n910num = 0o173
// 十六进制的123
d1n910num = 0x7b

// 字符串类型
let d1n910str:string
d1n910str = 'abc'
d1n910str = `数值是 ${d1n910num}`
console.log(d1n910str)

// 数组类型
// [1, 2, 3]
// 写法1
let arr:number[] 
arr = [1, 2, 3]
// arr = [1, 'a', 2]
// 写法2
let arr2:Array<number>
arr2 = [1, 2, 3]
// 联合类型
let arr3:(string | number)[]
arr3 = [1, 'a']

// 元祖类型
let tuple:[string, number, boolean]
tuple = ['a', 1, false]
// tuple = ['a', 1,]
// tuple = ['a', 1, 2]
// tuple = ['a', 1, false, 2]
tuple[2] = true
// tuple[2] = 1

// 枚举类型
enum Roles {
    SUPER_ADMIN = 1,
    ADMIN = 3,
    USER
}

console.log(Roles.SUPER_ADMIN)

console.log(Roles.ADMIN)

console.log(Roles.USER)
console.log('Roles[3]', Roles[3])
console.log('Roles.ADMIN', Roles.ADMIN)

// if ( types === Roles.SUPER_ADMIN ) {

//     // 执行一些代码

// }

// any类型
let d1n910any:any
d1n910any = false
d1n910any = 1
d1n910any = 'test str'

let d1n910anyArray:any[]
d1n910anyArray = ['1', 2, false]


// void类型
function d1n910void():void {
    console.log('void')
}

let d1n910void2 = (params: string): void => {
    console.log(params)
}
d1n910void2('abc')


let d1n910void3:void = undefined


let d1n910void4:void = null

let u: undefined
u = undefined
u = null
// u = 11

let n: null
n = null
n = undefined
// n = 11

let d1n910Number:number
d1n910Number = undefined
d1n910Number = null


const errorFunc = (message:string): never => {
    throw new Error(message)
}

const infiniteFunc = ():never => {
    while (true) {}
}


// let neverVariable = (() => {
//     while(true){}
// })()
// neverVariable = 123
// neverVariable = null
// neverVariable = undefined
// let testNumber:number
// testNumber = neverVariable

// 对象类型
let obj = {
    name: 'd1n910'
}
function getObject(obj: object): void {
    console.log(obj)
}
getObject(obj)
// getObject(1)

// 类型断言
const getLength = (target: string | number): number  => {
    if ((<string>target).length || (<string>target).length === 0) {
        return (<string>target).length
    } else {
        return target.toString().length
    }
}