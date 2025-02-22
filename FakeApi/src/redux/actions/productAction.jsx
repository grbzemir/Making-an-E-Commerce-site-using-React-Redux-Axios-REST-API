import { ActionTypes } from "../constants/action-types";


/*Action'lar store'da ki hangi statein değiştireceğini belirtir.
Action'lar bir obje döner ve bu objenin içinde bir type ve bir payload olmalıdır.
Type: Hangi action'ın gerçekleştiğini belirtir. Bu genelde ActionType dan gelir 
Payload: Hangi verinin değişeceğini belirtir. Parametre alarak geri döner
*/

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};


export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
}