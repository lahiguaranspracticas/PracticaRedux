//permite crear un store de redux
import {createStore} from 'redux';

//la función toma un estado y una acción 
const reducer = (state, action) => {

    //ahora controla tanto la acción ADD_TO_CART como la acción REMOVE_FROM_CART
    //devolviendo un nuevo estado
    if(action.type === "ADD_TO_CART"){
        return{
            ...state,
            cart: state.cart.concat(action.product)
        }
    }else if (action.type === "REMOVE_FROM_CART"){
        return{
            ...state,
            cart: state.cart.filter(product => product.id !== action.product.id)
        }

    }
    return state;
};

//recibe la función reductora 'reducer' y el estado inicial
export default createStore(reducer, { cart: [] });