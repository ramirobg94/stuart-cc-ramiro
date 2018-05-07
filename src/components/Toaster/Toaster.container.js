import { connect } from "react-redux";

import * as addressActions from '../../state/Addresses/actionCreators'
import * as uiActions from '../../state/UI/actionCreators'
import * as sagasActions from '../../state/Sagas/actionCreators'

import Toaster from './Toaster.component';

const mapStateToProps = (state) => ({
    toaster: state.UI.toaster,
});

const mapDispatchToProps = dispatch => ({
    closeToaster: () => {
        dispatch(uiActions.removeToaster())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);