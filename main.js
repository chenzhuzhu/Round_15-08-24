/**
 * Created by cyz on 2017/8/24.
 */

'use strict';

leftPad('hello',20,'1')
function leftPad(baseString,len,postString){
    let result=''
    for(let i = 0;i<len;i++){
        result+=postString
    }
    result+=baseString
    console.log(result)

}