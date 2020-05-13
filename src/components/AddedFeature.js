import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions/carSaleActions.js';

const AddedFeature = props => {
	return (
		<li>
			{/* Add an onClick to run a function to remove a feature */}
			<button onClick={() => props.removeFeature(props.features[props.idx])} className="button">X</button>
			{props.features[props.idx].name}
		</li>
	);
};

const mapStateToProps = state => {
	console.log();
	return {
		features: state.car.features
	};
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
