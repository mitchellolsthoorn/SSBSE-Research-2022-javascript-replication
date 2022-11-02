export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphT5YjEAm = {
		
	}
		const _startVertexMcyjsQV = {
		
	}
		const _returnValuetS89UkP = "YUYGATmoqvHXNlolncjWIew3Jhy8IYcjEVoC7ACHiG8Rvws1ug2IMKfhrJe5z3gIAda5kSfAqjwP";
		const _callbacksAeoYPtd = () => { return _returnValuetS89UkP };
		const _returnValueozcqvzg = await depthFirstSearch(_graphT5YjEAm, _startVertexMcyjsQV, _callbacksAeoYPtd)
	});
})