export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _arrayValueVwaGa3v = 5.841324499666232;
		const _graphY7VV4Sp = [_arrayValueVwaGa3v]
		const _returnValuevdZcsm3 = await detectDirectedCycle(_graphY7VV4Sp)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedw570zu4 = false;
		const _graphgGRetx = new Graph(_isDirectedw570zu4)
		const _returnValueTZgfcqK = await _graphgGRetx.getAdjacencyMatrix()
		const _returnValueyiJ1YMx = await detectDirectedCycle(_graphgGRetx)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedcF6O2mj = true;
		const _graphieVbOmJ = new Graph(_isDirectedcF6O2mj)
		const _returnValueYpRF5e = {
		
	}
		const _getKeyUZRwFlj = () => { return _returnValueYpRF5e };
		const _newVertexcxkJ0Yd = {
			"getKey": _getKeyUZRwFlj
	}
		const _returnValueUBaE0JY = await _graphieVbOmJ.addVertex(_newVertexcxkJ0Yd)
		const _returnValuehA8KR5t = await detectDirectedCycle(_graphieVbOmJ)
	});
})