import { connect } from 'react-redux'
import homePage from '../components/homePage';
import { fetchMenu} from '../reducers/homeReducer'
import { State } from '../reducers'

export interface Props {
}

const mapStateToProps = (state: State) => {
  return {
    menu: state.home.menu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMenu: (params) => dispatch(fetchMenu(params))
  }
}

export const homeContainer = connect(mapStateToProps, mapDispatchToProps)(homePage)
