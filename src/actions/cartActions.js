// export function addToCart(book) {
//     return {type: "ADD_TO_CART", payload: book}
// }
//
// export function deleteCartItem(cart) {
//     return {type: "DELETE_CART_ITEM", payload: cart}
// }
//
// export function updateCart(_id, unit, cart) {
//     // Create a copy of the current array of
//     const currentBookToUpdate = cart
//     // Determine at which index in books
//     const indexToUpdate = currentBookToUpdate.findIndex(function(book) {
//         return book._id === _id;
//     })
//     const newBookToUpdate = {
//         ...currentBookToUpdate[indexToUpdate],
//         quantity: currentBookToUpdate[indexToUpdate].quantity + unit
//     }
//     let cartUpdate = [
//         ...currentBookToUpdate.slice(0, indexToUpdate),
//         newBookToUpdate,
//         ...currentBookToUpdate.slice(indexToUpdate + 1)
//     ]
//     return {type: "UPDATE_CART", payload: cartUpdate}
// }

// GET CART
import axios from 'axios';

export function getCart() {
    return function(dispatch) {
        axios.get('/cart').then(function(response) {
            dispatch({type: "GET_CART", payload: response.data})
        }).catch(function(err) {
            dispatch({type: "GET_CART_REJECTED", msg: "error when getting the cart from session "})
})
        }
    }
    // ADD TO CART
    export function addToCart(cart) {
        return function(dispatch) {
            axios.post("/cart", cart).then(function(response) {
                dispatch({type: "ADD_TO_CART", payload: response.data})
            }).catch(function(err) {
                dispatch({type: "ADD_TO_CART_REJECTED", msg: 'error when adding to the cart'})
            })
        }
    }
    // UPDATE CART
    export function updateCart(_id, unit, cart) {
        // Create a copy of the current array o
        const currentBookToUpdate = cart
        // Determine at which index in books array
        const indexToUpdate = currentBookToUpdate.findIndex(function(book) {
            return book._id === _id;
        })
        const newBookToUpdate = {
            ...currentBookToUpdate[indexToUpdate],
            quantity: currentBookToUpdate[indexToUpdate].quantity + unit
        }
        let cartUpdate = [
            ...currentBookToUpdate.slice(0, indexToUpdate),
            newBookToUpdate,
            ...currentBookToUpdate.slice(indexToUpdate + 1)
        ]
        return function(dispatch) {
            axios.post("/cart", cartUpdate).then(function(response) {
                dispatch({type: "UPDATE_CART", payload: response.data})
            }).catch(function(err) {
                dispatch({type: "UPDATE_CART_REJECTED", msg: 'error when adding to the cart'})
            })
        }
    }
    // DELETE FROM CART
    export function deleteCartItem(cart) {
        return function(dispatch) {
            axios.post("/cart", cart).then(function(response) {
                dispatch({type: "DELETE_CART_ITEM", payload: response.data})
            }).catch(function(err) {
                dispatch({type: "DELETE_CART_ITEM_REJECTED", msg: 'error when deleting an item from the cart '})
})
            }
        }
