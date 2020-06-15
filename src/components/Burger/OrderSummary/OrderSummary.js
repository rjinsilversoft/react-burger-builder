import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    // Was used to check for potential optimization
    // componentWillUpdate() {
    //     console.log("OrderSummary Will update")
    // }

    render() {
        const ingedientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>);
            }); 

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A burger with the following ingredients:</p>
                <ul>
                    {ingedientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancel}>
                    CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinue}>
                    CONTINUE</Button>
            </Aux>             
        )
    }
}

export default OrderSummary;