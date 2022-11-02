export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueQq1AQ3r = null;
		const _getAllVerticesS9lRLkh = () => { return _returnValueQq1AQ3r };
		const _getVertexByKeysToBz5I = {
		
	}
		const _returnValueHCetYAv = false;
		const _getNeighborsagVNNPe = () => { return _returnValueHCetYAv };
		const _returnValueV80lNCg = {
		
	}
		const _findEdgezJN4wJR = () => { return _returnValueV80lNCg };
		const _graphgmRIAdB = {
			"getAllVertices": _getAllVerticesS9lRLkh,
		"getVertexByKey": _getVertexByKeysToBz5I,
		"getNeighbors": _getNeighborsagVNNPe,
		"findEdge": _findEdgezJN4wJR
	}
		const _startVertexFutKO2M = "xLxVs07AquShtU39RvR89P";
		const _returnValueWlwlFeq = await bellmanFord(_graphgmRIAdB, _startVertexFutKO2M)
	});

	it('test for bellmanFord', async () => {
		const _returnValueBL8AG9y = 0.702903446106248;
		const _arrayValuebW1KUwE = () => { return _returnValueBL8AG9y };
		const _graphr8Y9nq9 = [_arrayValuebW1KUwE]
		const _returnValueTgxJkGQ = true;
		const _getKeyZXLfTZl = () => { return _returnValueTgxJkGQ };
		const _startVertexaaAg0OK = {
			"getKey": _getKeyZXLfTZl
	}
		const _returnValueqrbPybI = await bellmanFord(_graphr8Y9nq9, _startVertexaaAg0OK)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedkdSQyAS = false;
		const _graphpO6ZLgk = new Graph(_isDirectedkdSQyAS)
		const _returnValueYmx5lkV = await _graphpO6ZLgk.reverse()
		const _returnValuecULRqY = await _graphpO6ZLgk.getAdjacencyMatrix()
		const _returnValueJY7pAf = "4660FVOmQTguj9WGmhdEvc6LhhS1rBiKPQYasYIUGsFgjpEUujhZYTJJwNBliX6DMpoxjHTqRRgqp54dKJKtCpWtl";
		const _getKeycvvnikh = () => { return _returnValueJY7pAf };
		const _startVertexyVRMQSY = {
			"getKey": _getKeycvvnikh
	}
		const _returnValuegKw9S3p = await bellmanFord(_graphpO6ZLgk, _startVertexyVRMQSY)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedjFCitHc = false;
		const _graphfzRiNcU = new Graph(_isDirectedjFCitHc)
		const _returnValueZUkCvy8 = "sNhPkQx4r3rgYMNUa82BxlEbjSM4c0HCgh2al9E9UFLLueDeus1w";
		const _getKeyR2oHjPc = () => { return _returnValueZUkCvy8 };
		const _newVertexJiZwZQx = {
			"getKey": _getKeyR2oHjPc
	}
		const _returnValue3rSHI7 = await _graphfzRiNcU.addVertex(_newVertexJiZwZQx)
		const _arrayValuepobYuRU = undefined;
		const _arrayValuekewhh0t = 9.014562702243584;
		const _returnValuewvYcXaH = [_arrayValuepobYuRU, _arrayValuekewhh0t]
		const _getKeyKOmr53 = () => { return _returnValuewvYcXaH };
		const _startVertexZI68O0D = {
			"getKey": _getKeyKOmr53
	}
		const _returnValueDWVJJEb = await bellmanFord(_graphfzRiNcU, _startVertexZI68O0D)
	});
})