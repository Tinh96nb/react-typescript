import * as React from 'react';
import { connect } from 'react-redux';
interface Props {
    
//   api: ApiEntity;
//   deleteAxiosError(): void;
}

class LayoutComponent extends React.Component<Props, any> {

  public render() {
    return (
        <div className={`portal-page layout-boxed`}>
          <div id="content" className="b-gird">
            <div className="main-container">
              {this.props.children}
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //api: state.api
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
