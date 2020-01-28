// interface Nameinfo {
//     firstName: string,
//     lastName: string
// }
// const getFullName = ({ firstName, lastName }: Nameinfo):string => {
//     return `${firstName} ${lastName}`
// }

// getFullName({
//     firstName: 'cake',
//     lastName: 'D1n910'
// })

interface VegetablesInfo {
    color?: string,
    readonly type: string
}

let VegetablesObj:VegetablesInfo = {
    type: 'cake'
}

// VegetablesObj.type = 'cake2'

// interface ArrInter {
//     0: number,
//     readonly 1: string
// }

// let d1n910ArrInter:ArrInter = [1, 'myStr']

// type AddFunc = (num1: number, num2: number) => number

// const d1n910Add: AddFunc = (n1, n2) => n1 + n2

// const d1n910Add: AddFunc = (n1, n2) => n1 + '' + n2

// const getVegetables = ({ color, type }: VegetablesInfo):string => {
//     return `A ${color ? (color + ' ') : ''}${type}`
// }

// const mgVegetablesInfo = {
//     type: 'tomato',
//     color: 'red',
//     size: 2
// }

// console.log(
//     getVegetables(mgVegetablesInfo)
// )


// interface RoleDic {
//     ​[id: number]: string
// }

// const myRoleDic: RoleDic = {
//     1: 'sdf',
//     2: '234324'
// }

// const myRoleDic2: RoleDic = {
//     'a': 'sdf'
// }

// interface RoleDic {
//     ​[id: string]: string
// }

// const myRoleDic: RoleDic = {
//     1: 'sdf',
//     2: '234324'
// }

// let myRoleDic2: RoleDic = {
//     'a': 'sdf'
// }

// interface Vegotables {
//     color: string
// }


// interface Tomato extends Vegotables{
//     radius: number
// }


// interface Carrot {
//     length: number
// }

// const myTomato:Tomato = {
//     radius: 3
// }

interface Couter {
    (): void,
    count: number
}

const getCounter = (): Couter => {
    const c = () => { c.count++ }
    c.count = 0
    return c
}

const couter:Couter = getCounter()
couter()
couter()
couter()
console.log(couter.count)