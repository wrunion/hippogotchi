/* eslint-disable no-console */
// import './styles.css';
// import $ from 'jquery';

/* Plant example from lesson */

let plant = {};

const changeState = (prop) => {
	return (value) => {
		return (state) => ({
			...state,
			[prop]: (state[prop] || 0) + value
		});
	};
};

const blueFood = changeState('soil')(5);
const greenFood = changeState('soil')(10);
const yuckyFood = changeState('soil')(-5);

const storeState = () => {
	let currentState = {};
	return (stateChangeFunction) => {
		const newState = stateChangeFunction(currentState);
		currentState = { ...newState };
		return newState;
	};
};

const stateChanger = storeState();

$(document).ready(function() {
	$('#feedBlue').click(() => {
		const plant = stateChanger(blueFood);
		console.log(plant);
		$('#soil-value').text(plant.soil);
	});
	$('#feedGreen').click(function() {
		const plant = stateChanger(greenFood);
		console.log(plant);
		$('#soil-value').text(plant.soil);
	});
	$('#feedYucky').click(function() {
		const plant = stateChanger(yuckyFood);
		console.log(plant);
		$('#soil-value').text(plant.soil);
	});
});