import * as React from 'react';
import * as jwt from 'common/helpers/jwt';
import { Button, ButtonToolbar } from 'react-bootstrap';

export interface Props { 
	articles: any;
  jwtUser: any;
	fetchArticle(): void;
}

export default class Dashboard extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    this.props.fetchArticle();
  }
  public doLogout() {
    jwt.removeStorage();
    window.location.href = `/`;
  }

  render() {
		const { articles, jwtUser } = this.props;
		return (
			<div className="test">
				<h1>Private page</h1>
        <p>User</p>
        { jwtUser ? jwtUser.name: null}
				<Button 
          variant="primary"
          onClick={() => {
              this.doLogout();
          }}
          >
              Logout
        </Button>
				{ articles ? articles.map((article, index) => {
            return <p key={index}>{article.title}</p>;
          }) : null 
        }
			</div>
		)
  }
}