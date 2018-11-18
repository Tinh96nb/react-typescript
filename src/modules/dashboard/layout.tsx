import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
}

class LayoutComponent extends React.Component<Props, any> {

  render() {
    return (
      <div className='wraper'>
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
