import React, { Component } from 'react';
import {Link} from 'react-router'

import {connect} from "react-redux"
import { bindActionCreators } from 'redux';

import * as action from '../Action'

class Cart extends Component {



    

    removeProduct(productName,userName){
        this.props.actions.removeProduct(productName,userName)
    }

    render() {

        let cartProduct=null;
        let keyUse=null;
        let table=null;
         const cartProducts=this.props.cartProducts


         let heading=null;
         
 
         if(this.props.cartProducts.length!=0){
        let keyUser=Object.keys(this.props.cartProducts)
        for(let i=0;i<keyUser.length;i++){
            if(keyUser[i]===this.props.params.userName){
                keyUse=keyUser[i]
            }
        }
        let userCartProduct=cartProducts[keyUse]


         table=userCartProduct.map(cartProduct=><tr key={cartProduct.id}>
                    <td><img src={cartProduct.source} style={{"width":"50px","height":"50px"}} className="col-sm-3 col-md-4 col-lg-4"/></td>
                    <td className="col-sm-3 col-md-4 col-lg-4">{cartProduct.name}</td>
                    <td className="col-sm-3 col-md-4 col-lg-4">{cartProduct.price}</td>
                    <td className="glyphicon glyphicon-remove text-center" onClick={()=>this.removeProduct(cartProduct.name,this.props.params.userName)}></td>
            </tr>)
         }
         else{
             heading=<tr>
                        <td className="col-sm-12 col-md-12 col-lg-12"><h2>There is no product in the cart</h2></td>
                    </tr>
         }

         
         if(keyUse!=null){
             if(cartProducts[keyUse].length!=0){

                heading= <tr>
                            <th className="col-sm-3 col-md-4 col-lg-4">product Image</th>
                            <th className="col-sm-3 col-md-4 col-lg-4">product name</th>
                            <th className="col-sm-3 col-md-4 col-lg-4">product price</th>
                        </tr>  

         }
          if(cartProducts[keyUse].length == 0){

             heading=<tr>
                        <td className="col-sm-12 col-md-12 col-lg-12"><h2>There is no product in the cart</h2></td>
                    </tr>
                     }
         }       
             


        return (
            <div>
                <div>
                <h1 className=" text-danger">Hello {this.props.params.userName}
                    <span className="text-right"><Link to={`/home/${this.props.params.userName}`}>Home</Link></span>
                     <button className="pull-right btn btn-primary btn-small">
                         <Link to="/">Logout</Link>
                    </button>
                </h1>
                
            </div>
            <table>
                <thead>
                    {heading}
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        cartProducts:state.cartProducts
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(action,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)