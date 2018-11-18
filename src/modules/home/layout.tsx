import 'scss/vendors/bootstrap.min.css';
import 'scss/auth.scss';
import * as handWave from 'images/apple-icon.png';

import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
  
}

class LayoutComponent extends React.Component<Props, any> {

  render() {
    return (
      <div className='wraper'>
        <img src={handWave} />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const Layout = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutComponent);

export default Layout;
