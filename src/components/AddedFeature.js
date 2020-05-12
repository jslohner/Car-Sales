import React from 'react';
import { connect } from 'react-redux';

const AddedFeature = props => {
	return (
		<li>
			{/* Add an onClick to run a function to remove a feature */}
			<button className="button">X</button>
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

export default connect(mapStateToProps, {})(AddedFeature);
