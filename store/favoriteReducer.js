// export const initialState = {
//   favorites: [], // Initially, no favorites
// };

// export const actionTypes = {
//   ADD_FAVORITE: 'ADD_FAVORITE',
//   REMOVE_FAVORITE: 'REMOVE_FAVORITE',
// };

// export const favoriteReducer = (state, action) => {
//   switch (action.type) {
//     case actionTypes.ADD_FAVORITE:
//       return {
//         ...state,
//         favorites: [...state.favorites, action.payload],
//       };
//     case actionTypes.REMOVE_FAVORITE:
//       return {
//         ...state,
//         favorites: state.favorites.filter(
//           (favorite) => favorite.id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };