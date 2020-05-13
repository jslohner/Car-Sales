import React from 'react';
import { connect } from 'react-redux';

import { addFeature } from '../actions/carSaleActions.js';

const AdditionalFeature = props => {
	return (
		<li>
			{/* Add an onClick that will let you add a feature to your car */}
			<button onClick={() => props.addFeature(props.additionalFeatures[props.idx])} className="button">Add</button>
			{props.additionalFeatures[props.idx].name} (+{props.additionalFeatures[props.idx].price})
			{/* {props.item.name} (+{props.item.price}) */}
		</li>
	);
};

const mapStateToProps = state => {
	return {
		additionalFeatures: state.additionalFeatures
	};
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
