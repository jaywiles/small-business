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