import { connect } from 'react-redux'
import homePage from '../components/homePage';
import { fetchMenu , fetchArticle } from '../reducers/homeReducer'
import { State } from '../reducers'

export interface Props {
}

const mapStateToProps = (state: State) => {
  return {
    menu: state.home.menu,
    articles: state.home.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMenu: (params) => dispatch(fetchMenu(params)),
    fetchArticle: () => dispatch(fetchArticle())
  }
}

export const homeContainer = connect(mapStateToProps, mapDispatchToProps)(homePage)
