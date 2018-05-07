import { connect } from "react-redux";

import * as addressActions from '../../state/Addresses/actionCreators'
import * as sagasActions from '../../state/Sagas/actionCreators'

import Form from './Form.component';

const mapStateToProps = (state) => ({
    pickUp: state.Addresses.pickUp,
    dropOff: state.Addresses.dropOff,
    loading: state.UI.loading,
});

const mapDispatchToProps = dispatch => ({
    handleChange: (field, value) => {
        dispatch(addressActions.handleChange(field, value))
    },
    onBlur: (field, value) => {
        dispatch(sagasActions.checkAdress(field, value))
    },
    postJob: () => {
        dispatch(sagasActions.postJob())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);