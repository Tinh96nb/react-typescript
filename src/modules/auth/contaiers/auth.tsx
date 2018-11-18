import { connect } from 'react-redux'
import { AuthPage} from '../components/authPage';
import { postLogin } from '../reducers/authReducer'
import { State } from '../reducers'

export interface Props {
}

const mapStateToProps = (state: State) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postLogin: (params, cb) => dispatch(postLogin(params, cb))
  }
}

export const authContainer = connect(mapStateToProps, mapDispatchToProps)(AuthPage)
