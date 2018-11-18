import { getModuleName } from 'common/utils';
import { isNotCheckAuth } from 'common/utils/checkModuleAuth';

import * as React from 'react';
import { connect } from 'react-redux';
import { verifyUser } from 'redux/userReducer'
import * as jwt from './jwt';

class CheckAuth extends React.Component<any> {

  public componentDidMount() {
    if (!isNotCheckAuth()) {
      //jwt.setHeaderAuthorization();
      this.props.verifyUser();
    }
  }

  public render() {
    // not login and access to private page.
    var a = getModuleName();
    if (!jwt.hasStorage() && !isNotCheckAuth()) {
      window.location.href = `/auth.html`;
      return null;
    }

    //if logined and access auth page will redirect to dashboard.
    if (jwt.hasStorage() && getModuleName() === 'auth') {
      window.location.href = `/dashboard.html`;
      return null;
    }

    return this.props.children;
  }
}

const mapDispatchToProps = (dispatch) => ({
  verifyUser: () => dispatch(verifyUser()),
});

export default connect(null, mapDispatchToProps)(CheckAuth)
