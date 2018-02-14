{
    // 基本定义
    let ajax=function(callback){
        console.log('执行');
        setTimeout(function () {
            callback&&callback.call()
        }, 1000);
    };
    ajax(function(){
        console.log('timeout1');
    })
}

{
    let ajax=function(){
        console.log('执行2');
        return new Promise(function(resolve,reject){
            setTimeout(function () {
                resolve()
            }, 1000);
        })
    };

    ajax().then(function(){
        console.log('promise','timeout2');
    })
}

{
    let ajax=function(){
        console.log('执行3');
        return new Promise(function(resolve,reject){
            setTimeout(function () {
                resolve()
            }, 1000);
        })
    };

    //通过ajax().then()返回一个Promise实例的方式可以一直对这个操作进行串联
    ajax()
        .then(function(){
            return new Promise(function(resolve,reject){
                setTimeout(function () {
                    resolve()
                }, 2000);
            });
        })
        .then(function(){
            console.log('timeout3');
        })
}


{
    let ajax=function(num){
        console.log('执行4');
        return new Promise(function(resolve,reject){
            if(num>5){
                resolve()
            }else{
                throw new Error('出错了')
            }
        })
    }

    ajax(6).then(function(){
        console.log('log',6);
    }).catch(function(err){
        console.log('catch',err);
    });

    ajax(3).then(function(){
        console.log('log',3);
    }).catch(function(err){
        console.log('catch',err);
    });
}

{
    //所有图片加载完成再添加到页面
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload =function(){
                resolve(img);
            }
            img.onerror=function(err){
                reject(err);
            }
        })
    }

    function showImgs(imgs){
        imgs.forEach(function(img){
            document.body.appendChild(img);
        })
    }
    //把其中的promise实例当成一个，都完成之后这个Promise实例才变化
    Promise.all([
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518598100895&di=8e8817c37582655462a86b6dbaff1879&imgtype=0&src=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F15300000%2FBeagle-puppy-dog-hound-dogs-15363092-1600-1200.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518598307956&di=3484a2f05d187612332f8dd059b01b46&imgtype=0&src=http%3A%2F%2Fwww.jlonline.com%2Fpet%2Fd%2Ffile%2Fp%2F2017-05-18%2Fa530ef198662a963d8354e6bacc38ce1.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518598365490&di=67ab753e18aff3032f8d8729734dd5bc&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fblog%2F201504%2F16%2F20150416194652_vzhVt.thumb.700_0.jpeg')
    ]).then(showImgs)
}

{
    //哪个图片加载完添加哪个图片
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload =function(){
                resolve(img);
            }
            img.onerror=function(err){
                reject(err);
            }
        })
    }

    function showImgs(img){
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
        }
    //
    Promise.race([
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518598100895&di=8e8817c37582655462a86b6dbaff1879&imgtype=0&src=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F15300000%2FBeagle-puppy-dog-hound-dogs-15363092-1600-1200.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518598307956&di=3484a2f05d187612332f8dd059b01b46&imgtype=0&src=http%3A%2F%2Fwww.jlonline.com%2Fpet%2Fd%2Ffile%2Fp%2F2017-05-18%2Fa530ef198662a963d8354e6bacc38ce1.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518598365490&di=67ab753e18aff3032f8d8729734dd5bc&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fblog%2F201504%2F16%2F20150416194652_vzhVt.thumb.700_0.jpeg')
    ]).then(showImgs)

}