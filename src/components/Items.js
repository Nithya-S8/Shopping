import React, { Component } from 'react';

// import {connect} from "react-redux"
// import { bindActionCreators } from 'redux';

import "./style.css"
// import * as actions from '../Action'

class Items extends Component {

handleClick(product,user){
   this.props.addCart(product,user)
}


    render() {
        // console.log(this.props.products[0])

         let source=this.props.product.source
        let name=this.props.product.name
        let price=this.props.product.price

        return (
            <span className="col-md-4 col-lg-4 col-sm-6 col-xs-12 text-center imageMargin">
            <span>
                <img src={source} style={{"width":"200px", "height":"200px"}}/>
                <div style={{"clear":"both"}}></div>   
                <h4 className="text-center">{name}</h4>
                <div style={{"clear":"both"}}></div>                   
                <h4 className="text-center">{price}</h4>    
                <div style={{"clear":"both"}}></div>            
            </span>
                <div style={{"clear":"both"}}></div>  
                <button className="btn btn-primary btn-small" onClick={()=>{this.handleClick(this.props.product,this.props.user)}}>Add to cart</button>     
                <div style={{"clear":"both"}}></div>  
                     
            </span>
        );
    }
}


export default Items;

// function mapStateToProps(state) {
//     console.log(state)
//     return {
//         products:state.products
//     };
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actions,dispatch)
//     };
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Items)