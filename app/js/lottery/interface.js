/**知识点：import jquery包 取一个代号为美元符
 * 使用Promise来实现异步的操作，返回一个Promise对象，下一步操作直接调用.next函数十分方便
 * 与ES5中接口封装的区别就是，ES5中多使用回调的方式实现异步
*/
import $ from 'jquery';
//class中不一定非要写constructor构造函数，如果类中没有必要的属性
class Interface{
    /**
     * getOmit  获取遗漏数据
     * string issue  当前期号
     * */

    getOmit(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/omit',
                //传一个当前的期号
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function (res) {
                    self.setOmit(res.data);
                    resolve.call(self,res);
                },
                error:function (err) {
                    reject.call(err);
                }
            })
        });
    }

    /**
     * getOmit  获取开奖号码
     * string issue  当前期号
     * */

    getOpenCode(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
           $.ajax({
               url:'/get/opencode',
               //传一个当前的期号
               data:{
                   issue:issue
               },
               dataType:'json',
               success:function(res){
                   self.setOpenCode(res.data);
                   resolve.call(self,res);
               },
               error:function (err) {
                   reject.call(err);
               }
           })
        });
    }

    /**
     * getOmit  获取当前状态
     * string issue  当前期号
     * */

    getState(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/state',
                //传一个当前的期号
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    self.setState(res.data);
                    resolve.call(self,res);
                },
                error:function (err) {
                    reject.call(err);
                }
            })
        });
    }
}

//一定要导出，不导出的话，别的地方无法导入，可以不加分号
export default Interface