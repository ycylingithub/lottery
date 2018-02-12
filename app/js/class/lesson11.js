{
    //业务开发中的原始对象
    let obj={
        time:'2017-03-11',
        name:'net',
        _r:123
    };

    //创建业务中的代理，将要代理的对象放在这个对象中，用户可以直接操作monitor对象
    let monitor=new Proxy(obj,{
        // 拦截对象属性的读取
        get(target,key){
            return target[key].replace('2017','2018')
        },
        // 拦截对象设置属性
        set(target,key,value){
            if(key==='name'){
                return target[key]=value;
            }else{
                return target[key];
            }
        },
        // 拦截key in object操作
        //对用户只显示name属性
        has(target,key){
            if(key==='name'){
                return target[key]
            }else{
                return false;
            }
        },
        // 拦截delete
        //对delete代理，以_开头的属性可以删除，其他不可以
        deleteProperty(target,key){
            if(key.indexOf('_')>-1){
                delete target[key];
                return true;
            }else{
                return target[key]
            }
        },
        // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys(target){
            return Object.keys(target).filter(item=>item!='time')   //过滤到time属性，如果是time属性则不返回
        }
    });

    console.log('get',monitor.time);

    monitor.time='2018';
    monitor.name='mukewang';
    console.log('set',monitor.time,monitor);

    console.log('has','name' in monitor,'time' in monitor);//name属性是在拦截中被允许的，而其他的属性都为不可见

    // delete monitor.time;
    // console.log('delete',monitor);
    //
    // delete monitor._r;
    // console.log('delete',monitor);
    console.log('ownKeys',Object.keys(monitor));

}



//
// {
//     let obj={
//         time:'2017-03-11',
//         name:'net',
//         _r:123
//     };
//
//     console.log('Reflect get',Reflect.get(obj,'time'));
//     Reflect.set(obj,'name','mukewang');
//     console.log(obj);
//     console.log('has',Reflect.has(obj,'name'));
// }


//代理的一个用法实例
{
    function validator(target,validator){
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,proxy){
                if(target.hasOwnProperty(key)){
                    let va = this._validator[key];
                    if(!!va(value)){
                        return Reflect.set(target,key,value,proxy);
                    }else {
                        throw Error(`不能设置${key}到${value}`);
                    }
                }else{
                    throw Error(`${key}不存在`)
                }
            }
        })
    }

    const personValidators={
        name(val){
            return typeof val === 'string'
        },
        age(val){
            return typeof val ==='number' && val>18
        }
    }

    class Person{
        constructor(name,age){
            this.name = name;
            this.age = age;
            return validator(this,personValidators);   //构造函数返回了一个proxy代理对象
        }
    }
    const person = new Person('lilei',30);

    console.info(person);
    // person.name = 48;            //有了代理之后，对对象的属性不可以随意的修改，通过代理中对set的限制，不可以随意修改
    person.name='han mei mei';
    console.info(person);
}