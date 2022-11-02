export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValuePFuTp9L = 5.220190292706501;
		const _getAllVerticesFXpnqZB = () => { return _returnValuePFuTp9L };
		const _graphtYNigZE = {
			"getAllVertices": _getAllVerticesFXpnqZB
	}
		const _returnValueV4o5Ilp = await detectDirectedCycle(_graphtYNigZE)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedKyCIGMQ = false;
		const _graphrPkvLnc = new Graph(_isDirectedKyCIGMQ)
		const _vertexKeysSWYedY = "n9Yhi96487MdJOao9Pp0KYqGXxm5dIKNifVpYiN";
		const _returnValueD7kdM6e = await _graphrPkvLnc.getVertexByKey(_vertexKeysSWYedY)
		const _returnValueRQOnbJx = await _graphrPkvLnc.getAllVertices()
		const _returnValueIDdLc4e = await detectDirectedCycle(_graphrPkvLnc)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedzy0xpE7 = false;
		const _graphYGsBupQ = new Graph(_isDirectedzy0xpE7)
		const _returnValuegSowUBB = await _graphYGsBupQ.reverse()
		const _returnValueCA0R07 = await _graphYGsBupQ.getAllVertices()
		const _returnValueV0RCQ3G = true;
		const _getKeyEryHAC7 = () => { return _returnValueV0RCQ3G };
		const _newVertexIgIJxsz = {
			"getKey": _getKeyEryHAC7
	}
		const _returnValueTIMGarG = await _graphYGsBupQ.addVertex(_newVertexIgIJxsz)
		const _returnValuePS9yIih = await _graphYGsBupQ.getVerticesIndices()
		const _returnValueRhiO9N = await detectDirectedCycle(_graphYGsBupQ)
	});
})