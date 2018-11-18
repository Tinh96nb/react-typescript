import { connect } from 'react-redux'
import dashboardPage from '../components/dashboardPage';
import { fetchArticle } from '../reducers/dashboardReducer'
import { State } from '../reducers/index'

export interface Props {
}

const mapStateToProps = (state: State) => {
  return {
    articles: state.dashbroard.articles,
  	jwtUser: state.dashbroard.jwtUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle: (params) => dispatch(fetchArticle(params))
  }
}

export const dashboardContainer = connect(mapStateToProps, mapDispatchToProps)(dashboardPage)
