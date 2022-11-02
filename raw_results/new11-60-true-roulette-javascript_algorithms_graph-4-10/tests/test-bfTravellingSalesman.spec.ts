export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueswWuBEG = 8.735282685638218;
		const _arrayValueNs4htJh = () => { return _returnValueswWuBEG };
		const _arrayValueTMylgGz = null;
		const _arrayValuepqsfsOO = null;
		const _arrayValueSUr1UU4 = [_arrayValuepqsfsOO]
		const _arrayValuerTjOKGi = 5.017699445763844;
		const _graphwwfJ9tz = [_arrayValueNs4htJh, _arrayValueTMylgGz, _arrayValueSUr1UU4, _arrayValuerTjOKGi]
		const _returnValueKETROrl = await bfTravellingSalesman(_graphwwfJ9tz)
	});

	it('test for bfTravellingSalesman', async () => {
		const _arrayValueIHTJ7xj = null;
		const _returnValueLyZCqGT = [_arrayValueIHTJ7xj]
		const _getAllVerticesSwP5tvd = () => { return _returnValueLyZCqGT };
		const _returnValuez6wPNiE = {
		
	}
		const _getAdjacencyMatrixpEFDeU = () => { return _returnValuez6wPNiE };
		const _returnValuegbgK3Y0 = false;
		const _getVerticesIndicesPzuVaGb = () => { return _returnValuegbgK3Y0 };
		const _graphY5RHgO = {
			"getAllVertices": _getAllVerticesSwP5tvd,
		"getAdjacencyMatrix": _getAdjacencyMatrixpEFDeU,
		"getVerticesIndices": _getVerticesIndicesPzuVaGb
	}
		const _returnValuenubSgGf = await bfTravellingSalesman(_graphY5RHgO)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedZ4036Uw = false;
		const _graphoS6Vwq = new Graph(_isDirectedZ4036Uw)
		const _returnValueyeMymxk = await _graphoS6Vwq.getAdjacencyMatrix()
		const _returnValuebJmJCLA = "dSHKivGGQhaRUBJKVzCt7cM2PEVb7FS68CNwB7ms4qk9eqD9MhttY5JhHUXtAKpQSXwjKvKQ7aQYxA8auWBBYCxCRpFJqAqd9R";
		const _getKeyK3BZILl = () => { return _returnValuebJmJCLA };
		const _newVertexM2d7m2S = {
			"getKey": _getKeyK3BZILl
	}
		const _returnValueZlJgBKz = await _graphoS6Vwq.addVertex(_newVertexM2d7m2S)
		const _returnValueMX0o8ug = await _graphoS6Vwq.getWeight()
		const _returnValuevn3G0pa = await bfTravellingSalesman(_graphoS6Vwq)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedLL1Je9B = true;
		const _graphSYLRVvI = new Graph(_isDirectedLL1Je9B)
		const _returnValueTFARmQo = await _graphSYLRVvI.getAdjacencyMatrix()
		const _valuemsbwA8c = null;
		const _newVertexvKkKlRx = new GraphVertex(_valuemsbwA8c)
		const _vertexXk9YR76 = null;
		const _returnValueaY5ayRA = await _newVertexvKkKlRx.findEdge(_vertexXk9YR76)
		const _vertexYW6pTI = true;
		const _returnValuePzfKNde = await _newVertexvKkKlRx.findEdge(_vertexYW6pTI)
		const _returnValuesjLQzvg = await _graphSYLRVvI.addVertex(_newVertexvKkKlRx)
		const _returnValueggjenzF = await bfTravellingSalesman(_graphSYLRVvI)
	});
})