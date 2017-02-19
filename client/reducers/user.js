const user = (state = {}, action) => {
  switch(action.type) {
    case 'USER':
      let { _id, role, fullname } = action
      return { _id, role, fullname }
    default:
      return state;
  }
}

export default user;
