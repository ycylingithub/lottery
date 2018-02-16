import 'babel-polyfill';
import './class/lesson16';
class Test{
    constructor(){
        this.a='hello world!!!!';
    }
}

let test = new Test();
document.body.innerHTML=test.a;