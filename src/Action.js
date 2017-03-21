require('es6-promise').polyfill();
var fetch=require('isomorphic-fetch');



export function signUp(name,password,mobile,email){
    return {
    type:"signUp",
    payload:{
        userName:name,
        password:password,
        Mobile:mobile,
        email:email
    }}
}

export function addToCart(product,userName){
    
    return{
        type:"addToCart",
        payload:{
            userName:userName,
            cartProduct:product
        }
    }
}


export function removeProduct(productName,userName){
    return{
        type:"removeProduct",
        payload:{
            productName,
            userName
        }
    }
}

 const fetchRequest = function () {
  return {
    type: "fetchRequest"
  }
}


export const fetchSuccess=function(json){
    console.log(json)
    return{
        type:"fetchSuccess",
        products:json
    }
}

export const fetchFailure=function(err){
    return{
        type:"fetchFailure",
        err
    }
}

export const fetchDataFromAPI = () => dispatch => {
    console.log("fetch")
    dispatch(fetchRequest)
    return fetch("../data.json",{
        method:"GET",
        cache:"default"
    })
    .then(res=>res.json())
    .then(json => dispatch(fetchSuccess(json)))
    .then(err => dispatch(fetchFailure(err)))
}