function test() {
    for(let i=1;i<3;i++){
        console.log(i);
    }
    let a = 1;
    // let a = 2;                 //let不能重复声明变量

    // console.log(i);             //let声明的变量只在块级作用域有效
}

function last() {
    // const PI;                    //const声明变量必须直接赋值，不能后赋值
    const PI = 3.1415926;
    // PI = 8;                      //const声明的变量的数值不能修改

    const k={
        a:1
    };
    k.b=3;                          //对象是引用类型，返回值是对象在内存中的指针，k指向对象存储空间的指针，指针不变，但是里边的内容可变

    console.log(PI,k);
}

test();
last();