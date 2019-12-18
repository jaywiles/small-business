// need addListing (like addCar) - ref cont/Add.js

export const addListing = (listing) => {
  return {
    type: 'ADD_LISTING',
    value: listing
  }
}

export const deleteListing = (index) => {
  return {
    type: 'DELETE_LISTING',
    value: index
  }
}

// export const login = () => {
//   return {
//     type: "LOGIN_COMPLETE",
//     loggedIn: true,
//   }
// }

// export const logout = () => {
//   return {
//     type: "LOGOUT_COMPLETE",
//     loggedIn: false,
//   }
// }