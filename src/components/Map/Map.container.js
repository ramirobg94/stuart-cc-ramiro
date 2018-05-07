import { connect } from "react-redux";

import MapComponent from './Map.component';

const mapStateToProps = (state) => ({
    pickUp: state.Addresses.pickUp,
    dropOff: state.Addresses.dropOff,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);