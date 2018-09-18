"use strict"
$.prototype.nullChecker=x=>{	// jQuery에 넣어놔라는 의미
        let flag = false;
        let i = 0;
        for(i in x){
            if(x[i] === ''){
                flag = true;
            }
        }
        return flag;
}
$.prototype.zeroChecker=x=>{	// jQuery에 넣어놔라는 의미
    let flag = false;
    let i = 0;
    for(i in x){
        if(x[i] == 0){
            flag = true;
        }
    }
    return flag;
}

$.prototype.anchor = x =>{
    return $('<a/>')
   .attr({href : '#'})
   .html(x.txt)
}