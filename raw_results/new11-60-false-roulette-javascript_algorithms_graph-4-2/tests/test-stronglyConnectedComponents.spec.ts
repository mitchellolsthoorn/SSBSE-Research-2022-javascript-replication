export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValueNdItB0r = true;
		const _arrayValuedEFhXhh = null;
		const _arrayValue9WZ6Jz = "rBM51F1z6pukSV9jjKGOzg3Y99T9mqHf9Y1OgrjvByQiDHNuo5QSbmGwJFwsOFIET4XEizMAJybWIQfinhDqWUe1FO2ikfQfjk";
		const _arrayValuemMmcQtq = [_arrayValuedEFhXhh, _arrayValue9WZ6Jz]
		const _arrayValueeaMUTqM = [_arrayValueNdItB0r, _arrayValuemMmcQtq]
		const _returnValuebxNFASQ = [_arrayValueeaMUTqM]
		const _reverseE9ecZJi = () => { return _returnValuebxNFASQ };
		const _graphpLwgTtl = {
			"reverse": _reverseE9ecZJi
	}
		const _returnValuexftSKIC = await stronglyConnectedComponents(_graphpLwgTtl)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedyuVeoGt = false;
		const _graphQCIOD1R = new Graph(_isDirectedyuVeoGt)
		const _returnValuekZEwB8m = 5.476425477671356;
		const _getNeighborsGZ9ne5T = () => { return _returnValuekZEwB8m };
		const _vertexHkpkDNx = {
			"getNeighbors": _getNeighborsGZ9ne5T
	}
		const _returnValuemWcM385 = await _graphQCIOD1R.getNeighbors(_vertexHkpkDNx)
		const _returnValued6GZmKA = await _graphQCIOD1R.reverse()
		const _returnValueKNsnI0r = await _graphQCIOD1R.getAdjacencyMatrix()
		const _returnValueC9y5rkn = await _graphQCIOD1R.reverse()
		const _returnValueNFnD6oX = await stronglyConnectedComponents(_graphQCIOD1R)
	});
})