// const s1 = Symbol()
// console.log(s1)

// const s2 = Symbol()
// console.log(s2)

// console.log(s1 === s2)

// const s3 = Symbol('d1n910')
// console.log(s3)
 
// const s4 = Symbol('d1n910')
// console.log(s4)

// console.log(s3 === s4)

// console.log('snum', snum)

// const sobj = Symbol({
//     id: '1'
// })


// const snum = Symbol(1)

// console.log('snum:', snum.toString())

// console.log(Boolean(snum))

// console.log(!snum)


// let c = Symbol('d1n910')
// let c2 = c
// let c3 = Symbol('d1n910')
// console.log('c', c)
// console.log('c2', c2)
// console.log('c3', c3)
// console.log(c === c2)
// console.log(c3 === c2)

// function ifec(c4:symbol):void {
//     console.log('c4', c4)
//     console.log(c4 === c)
// }

// ifec(c)

// let prop = 'name'
// const d1n910Obj = {
//     // name: 'd1n910'
//     [`my${prop}is`]: 'd1n910'
// }
// console.log(d1n910Obj)

// const s5 = Symbol('name')
// const d1n910Obj2 = {
//     [s5]: 'd1n910',
//     t1: 't1',
//     t2: 't2'
// }

// console.log(Reflect.ownKeys(d1n910Obj2))

// console.log(d1n910Obj2)
// d1n910Obj2[s5] = 'd1n910-2'
// console.log(d1n910Obj2)

// for (const key in d1n910Obj2) {
//     console.log(key)
// }

// console.log(Object.keys(d1n910Obj2))

// console.log(JSON.stringify(d1n910Obj2))

// console.log(Object.getOwnPropertySymbols(d1n910Obj2))

// const s7 = Symbol('d1n910')

// const s8 = Symbol('d1n910')

// console.log(s7 === s8) // false

// const s9 = Symbol.for('d1n910')

// const s10 = Symbol.for('d1n910')

// console.log(s9 === s10) // true

// 4.2、Symbol.keyFor()

// console.log(Symbol.keyFor(s8))
// console.log(Symbol.keyFor(s9))

// 5、11个内置的Symbol值

// 5.1、Symbol.hasInstance
// const d1n910ObjS = {
//     [Symbol.hasInstance] (otherObj:object) {
//         console.log('otherObj', otherObj)
//     }
// }
// console.log({a: 1} instanceof <any>d1n910ObjS)

// 5.2、Symbol.hasInstance

// let d1n910Arr = [1, 2]

// console.log([].concat(d1n910Arr, [3, 4]))

// d1n910Arr[Symbol.isConcatSpreadable] = false


// 5.3、Symbol.species

// class C extends Array {
//     constructor (...args:any) {
//         super(...args)
//     }
//     getName () {
//         return 'd1n910'
//     }
// }
// const c = new C(1, 2, 3)
// const a = c.map(item => item + 1)
// console.log(a)
// console.log(a instanceof C)
// console.log(a instanceof Array)


// 5.4、Symbol.match

// let d1n910MatchObj = {
//     [Symbol.match] (string:string):any {
//         console.log(string.length)
//         return 'd1n910'
//     },
//     [Symbol.split] (string:string):any {
//         console.log(string.length)
//         return ['d', '1', 'n', '9', '1', '0']
//     }
// }

// console.log('abcde'.match(<RegExp>d1n910MatchObj))

// console.log('abcde'.split(<any>d1n910MatchObj))

// 5.5、Symbol.replace

// 同上

// 5.6、Symbol.search

// 同上

// 5.7、Symbol.split

// 同上

// 5.8、 Symbol.iterator
// const arr = [1, 2, 3]
// // undefined
// const iterator = arr[Symbol.iterator]()
// // undefined
// iterator.next()
// // {value: 1, done: false}
// iterator.next()
// // {value: 2, done: false}
// iterator.next()
// // {value: 3, done: false}
// iterator.next()
// // {value: undefined, done: true}
// iterator.next()
// // {value: undefined, done: true}

// 5.9 Symbol.toPrimitive

// let d1n910toPrimitiveObj: unknown = {
//     [Symbol.toPrimitive] (type:any) {
//         // type说明这个对象被转换为了那种原始类型的值
//         console.log(type)
//     }
// }

// // const res = (d1n910toPrimitiveObj as number)++

// const res = `abc${(d1n910toPrimitiveObj as string)}`


// 5.10 Symbol.toStringTag
// let d1n910toStringTagObj = {
// //    [Symbol.toStringTag]: 'd1n910'
//     get  [Symbol.toStringTag] () {
//         return 'd1n910'
//     }
// }
// console.log(d1n910toStringTagObj.toString())

// 5.11 Symbol.unscopables

const d1n910with = {
    a: 'a',
    b: 'b'
}

console.log(Array.prototype[Symbol.unscopables])