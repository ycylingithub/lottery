import 'babel-polyfill';
import './class/lesson15';
class Test{
    constructor(){
        this.a='hello world!!!!';
    }
}

let test = new Test();
document.body.innerHTML=test.a;