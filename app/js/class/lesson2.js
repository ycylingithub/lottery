//数组解构赋值
{
    let a,b,rest;
    [a,b]=[1,2];
    console.log(a,b);
}

{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6];
    console.log(a,b,rest);
}

{
    let a,b;
    ({a,b}={a:1,b:2});
    console.log(a,b);
}

{
    let a,b,c,rest;
    [a,b,c]=[1,2];           //不赋值，未成功配对，则这个变量为undefined
    console.log(a,b,c);
}

{
    let a=1;
    let b=2;
    [a,b]=[b,a];
    console.log(a,b);
}

{
    function f() {
        return [1,2];
    }
    let a,b;
    [a,b]=f();
    console.log(a,b);
}

{
    function f() {
        return [1,2,3,4,5];
    }
    let a,b,c;
    [a,,,b]=f();
    console.log(a,b);
}

{
    function f() {
        return [1,2,3,4,5];
    }
    let a,b,c;
    [a,...b]=f();
    console.log(a,b);
}

//对象解构赋值
{
    let o={p:42,q:true};
    let {p,q}=o;
    console.log(p,q);
}

{
    let {a=10,b=5}={b:3,a:5};
    console.log(a,b);
}

{
    let metaData={
        title:'abc',
        test:[{
            title:'test',
            desc:'description',
        }]
    }
    let {title:esTitle,test:[{title:cnTitle,desc:cndesc}]}=metaData;
    console.log(esTitle,cnTitle,cndesc);
}