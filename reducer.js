export const initialState = {
    user: null,
    keyType: 'password',
    doors: []
  };
  
  // Selector

  const reducer = (state, action) => {
    switch(action.type) {
        case 'doorConfig':
            const newArray = [...state.doors]
            newArray[action.index].isOpen = action.newValue
            return {
                ...state,
                doors: newArray
            }
        case 'keyConfig':
            return {
                ...state,
                keyType: action.keyType
            }
        case 'userConfig':
            return {
                ...state,
                user: action.user
            }
        case 'initialDoorConfig':
            return {
                ...state,
                doors: action.doors
            }
    }
    
  };
  
  export default reducer;