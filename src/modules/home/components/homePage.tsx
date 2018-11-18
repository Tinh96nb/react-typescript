import * as React from "react";
import Button from 'react-bootstrap/lib/Button';

export interface Props { 
	articles: any;
	fetchArticle(): void;
}

export default class HomePage extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    this.props.fetchArticle();
  }
  render() {
		const {articles} = this.props;
		return (
			<div className="test">
				<h1>homepage!</h1>
				{articles.length > 0 
					? articles.map((e, index) => {
						return <p key={index}>{e.title}</p>
					})
					: null
				}
			</div>
		)
  }
}