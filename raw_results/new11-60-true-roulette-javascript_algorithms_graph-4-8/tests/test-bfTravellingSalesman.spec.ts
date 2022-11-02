export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphth6zujm = false;
		const _returnValueAjpZIEt = await bfTravellingSalesman(_graphth6zujm)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirected6Wt20h = false;
		const _graphQ9EWUcm = new Graph(_isDirected6Wt20h)
		const _returnValuevVnlGx = await _graphQ9EWUcm.reverse()
		const _returnValueWJgbBE = await _graphQ9EWUcm.getVerticesIndices()
		const _returnValuePGA478T = await _graphQ9EWUcm.getAdjacencyMatrix()
		const _vertexKeyAeVsnhA = true;
		const _returnValuee882fe = await _graphQ9EWUcm.getVertexByKey(_vertexKeyAeVsnhA)
		const _returnValuekazshKw = await bfTravellingSalesman(_graphQ9EWUcm)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedmgZcjzU = true;
		const _graphKeD27m = new Graph(_isDirectedmgZcjzU)
		const _returnValuePmEsoUS = await _graphKeD27m.reverse()
		const _returnValueyoDQPtR = {
		
	}
		const _getKeyu0TcNw = () => { return _returnValueyoDQPtR };
		const _newVertexUr0vQh8 = {
			"getKey": _getKeyu0TcNw
	}
		const _returnValueJSvmq7j = await _graphKeD27m.addVertex(_newVertexUr0vQh8)
		const _returnValueuUwJwAf = await bfTravellingSalesman(_graphKeD27m)
	});
})