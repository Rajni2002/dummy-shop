import ActionTypes from "../contents/action-types.js";

function setProducts(products) {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products
  };
}
function selectedProducts(product) {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product
  };
}
export {setProducts, selectedProducts};