import React from 'react'
import axios from 'axios'
const getRequest=()=>{
var ret=[];
axios.get('http://localhost:8080/expensify').then(Response=>{
    Response.data.forEach(element => {
        ret.push(element)
    });
})
return ret;

}
                                                                
export default getRequest;