// here we will define all application level  states and  define actions to make changes to the state


export const initialState = {
    basket: []
}

//selector
const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        
        }

}

export default reducer