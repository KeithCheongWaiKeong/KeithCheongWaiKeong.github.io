import React from 'react';
import { Particles as ReactParticles } from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

const Particles = () => {
	const classes = useStyles();

	return (
		<ReactParticles
			canvasClassName={classes.particlesCanvas}
			params={particleParams}
		/>
	);
};

const particleParams = {
	particles: {
		number: {
			value: 45,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 1,
				color: 'grey',
			},
		},
		size: {
			value: 8,
			random: true,
			anim: {
				enable: false,
				speed: 6,
				size_min: 0,
				sync: true,
			},
		},
		opacity: {
			value: 0.75,
			random: true,
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0.1,
				sync: false,
			},
		},
	},
};

const useStyles = makeStyles(theme => ({
	particlesCanvas: {
		position: 'fixed',
		opacity: '0.3',
	},
}));

export default Particles;
