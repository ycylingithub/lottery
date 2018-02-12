{
    // 基本定义和生成实例
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }
    let v_parent=new Parent('v');
    console.log('构造函数和实例',v_parent);
}

{
    // 继承
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }

    class Child extends Parent{

    }

    console.log('继承',new Child());
}

{
    // 继承传递参数
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }

    class Child extends Parent{
        constructor(name='child'){
            super(name);  //子类向父类传递自己的默认值，覆盖掉父类的默认值

            this.type='child';         //子类自己有新的属性，要写在super()之后
        }
    }

    console.log('继承传递参数',new Child('hello'));
}

{
    // getter,setter
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        get longName(){                         //longName是属性，不是函数
            return 'mk'+this.name
        }

        set longName(value){
            this.name=value;
        }
    }

    let v=new Parent();
    console.log('getter',v.longName);
    v.longName='hello';
    console.log('setter',v.longName);
}

{
    // 静态方法
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        static tell(){
            console.log('tell');
        }
    }

    Parent.tell();

}

{
    // 静态属性
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }

        static tell(){
            console.log('tell');
        }
    }

    Parent.type='test';

    console.log('静态属性',Parent.type);


}
