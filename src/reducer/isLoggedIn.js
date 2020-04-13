const isLoggedInReducer = (state = false, action) => {
    switch (action.type) {
      case 'ISLOGGEDIN' : 
        return !state;
      default:
          return false;
    }
  }

  export default isLoggedInReducer;