import * as React from "react";
import Button from '@material-ui/core/Button';

export interface HelloProps { 
	menu: any;
	fetchMenu(params): void;
}

export default class Hello extends React.Component<HelloProps, {}> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    this.props.fetchMenu({});
  }
  render() {
		const {menu} = this.props;
		return (
			<div className="test">
				<h1>Hello from homepage!</h1>
				{menu.length > 0 
					? menu.map((e, index) => {
						return <p key={index}>{e.title}</p>
					})
					: null
				}
				<Button variant="contained" color="primary">
					Hello World
				</Button>
			</div>
		)
  }
}