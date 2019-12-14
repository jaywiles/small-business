const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      addListing: (listing) => dispatch(addListing(listing))
  }
}

export default withRouter(connect(mapStateToProps, {login})(Login));