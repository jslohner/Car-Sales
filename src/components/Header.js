import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
	return (
		<div>
			<figure className="image is-128x128">
				<img src={props.image} alt={props.name} />
			</figure>
			<h2>{props.name}</h2>
			<p>Amount: ${props.price}</p>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		image: state.car.image,
		name: state.car.name,
		price: state.car.price,
		features: state.car.features
	};
};

export default connect(mapStateToProps, {})(Header);
