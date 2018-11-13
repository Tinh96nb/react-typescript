const FETCH_MENU = 'home/FETCH_MENU';

export const fetchMenu = (parameters) => {
  return (dispatch) => {
    const listMenu = [
        {
            title: 'Menu1',
            link: 'link1'
        },
        {
            title: 'Menu2',
            link: 'link2'
        }
    ]
    dispatch({ type: FETCH_MENU, menu: listMenu });
  }
}

const initialState = {
  menu: []
}
export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENU:
      return { ...state, ...action };
    default:
      return state;
  }
};
