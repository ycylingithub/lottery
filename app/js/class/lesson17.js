// export let A=123;
//
// export function test(){
//   console.log('test');
// }
//
// export class Hello{
//   test(){
//     console.log('class');
//   }
// }
//模块化  模块引入import  模块导出export
let A=123;
let test=function(){
    console.log('test');
}
class Hello{
    test(){
        console.log('class');
    }
}

export default {
    A,
    test,
    Hello
}
