import React, { Component } from 'react';
import {Link} from "react-router"

import {connect} from "react-redux"
import { bindActionCreators } from 'redux';

import * as action from '../Action'
import store from '../store'


import Items from './Items'

class Home extends Component {


      componentDidMount(){
        this.props.actions.fetchDataFromAPI()
    }


    addCart(product,userName){
        this.props.actions.addToCart(product,userName)
    }

    render() {
        if(this.props.products.length!=0){
            var product=this.props.products.map((product)=> <Items key={product.id} user={this.props.params.userName} addCart={(product,userName)=>{this.addCart(product,userName)}} product={product} /> )    
        }        
        return (
            <div>
                <h1 className=" text-danger">Hello {this.props.params.userName}
                        <span className="text-right"><Link to={`/cart/${this.props.params.userName}`}>Cart</Link></span>
                     <button className="pull-right btn btn-primary btn-small">
                         <Link to="/">Logout</Link>
                    </button>
                </h1>
                {product}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products:state.products
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(action,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)