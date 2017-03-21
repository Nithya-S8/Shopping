

export default function Reducer(state={
                userDetails:[{userName:"a",password:"a"}],
                products:[],
                cartProducts:[],
                fetchError:""
},action){
    switch(action.type){
        
        case "signUp":
        {
            let o1={
                userName:action.payload.userName,
                password:action.payload.password,
                Mobile:action.payload.Mobile,
                email:action.payload.email,
                id:Math.floor(Math.random()*100),
            }
                let userDetails=state.userDetails;

                for(let user of userDetails){
                    if(user.userName === o1.userName){
                        alert("user already exist")
                        break;
                    }
                }

                userDetails.push(o1)
            return Object.assign({},state,{userDetails})
        }



        case "addToCart":
        {
            let key=Object.keys(state.cartProducts);
            let keyUser=null;
            if(state.cartProducts.length!=0){
            for(let i=0;i<key.length;i++){
                if(key[i]===action.payload.userName){
                    keyUser=key[i]
                }
            }


                if(keyUser===action.payload.userName){

                    let cartProducts = state.cartProducts;
                    let already=false;

                    for( var product of cartProducts[keyUser]){
                        if(product.id == action.payload.cartProduct.id){
                            already=true;
                            alert("this product is already in your cart")
                            break;
                        }
                    }

                    if(already==false){

                    cartProducts[keyUser].push(action.payload.cartProduct);}
                    return Object.assign({},state,{cartProducts})
                }


                else{

                    let user=action.payload.userName
                    let cartProducts=state.cartProducts;
                    cartProducts[user]=[action.payload.cartProduct];
                        let cartProduct={
                                        [user]:[
                                        action.payload.cartProduct
                                        ]
                                    }
                                    return Object.assign({},state,{cartProducts})
                    
                }
            }
                let user=action.payload.userName
                let cartProduct={
                                [user]:[
                                action.payload.cartProduct
                                ]
                            }
                            return Object.assign({},state,{cartProducts:cartProduct})
            
        return state;
       
    
    }
    


    case "removeProduct":
    {
        let productName=action.payload.productName;
        let userName=action.payload.userName;

        let keyUser=null;
            let key=Object.keys(state.cartProducts);
        

        for(let i=0;i<key.length;i++){
                if(key[i]===userName){
                    keyUser=key[i]
                }
            }


            let cartProducts=state.cartProducts;
         


            var cartProducts=cartProducts[keyUser].filter(product => 
                product.name !== productName
            )

            let cartPros={
                [action.payload.userName]:cartProducts
            }

            cartProducts=cartPros


            return Object.assign({},state,{cartProducts})

            return state
    }


        case "fetchSuccess":
        { 
            let arr=[];
            let pro=action.products;
            for(let prod of pro.products){
                arr.push(prod)
            }
            return Object.assign({},state,{products:arr})
           
        }


        case "fetchFailure":
        {
            return Object.assign({},state,{fetchError:action.err})
        }
    
    default:
        return state;
}
}