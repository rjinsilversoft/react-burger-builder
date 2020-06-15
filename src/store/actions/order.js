import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

// Action Creators
export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
}
// Async code
export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json?auth=' + token, orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData))
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error))
            });
    };
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

// Action Creators : Orders
export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrderSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrderFail = (error) => {
    return  {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

// Async : Orders
export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        // Adding indexing and filtering data in Firebase API request
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('https://react-my-burger-d029f.firebaseio.com/orders.json' + queryParams)
            .then(response => {
                const fetchedOrder = [];
                for (let key in response.data) {
                    fetchedOrder.push({
                        ...response.data[key],
                        id: key
                    });
                }
                //this.setState({ orders: fetchedOrder, loading: false });
                dispatch(fetchOrderSuccess(fetchedOrder));

            })
            .catch(error => {
                dispatch(fetchOrderFail(error));
//                this.setState({ error: error.message, loading: false });
            });
    }
}