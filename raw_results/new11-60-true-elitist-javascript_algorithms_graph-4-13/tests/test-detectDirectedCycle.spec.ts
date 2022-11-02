export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _getAllVerticesZTdrEi = null;
		const _graphrCiIul3 = {
			"getAllVertices": _getAllVerticesZTdrEi
	}
		const _returnValueB1R6zUJ = await detectDirectedCycle(_graphrCiIul3)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedmJAJLdD = false;
		const _graphHdMg6B = new Graph(_isDirectedmJAJLdD)
		const _returnValuejhNF26 = await _graphHdMg6B.getWeight()
		const _returnValueI4SaUvt = await _graphHdMg6B.getWeight()
		const _returnValueTueZ6lq = await _graphHdMg6B.reverse()
		const _returnValueZ2NM0Rw = await detectDirectedCycle(_graphHdMg6B)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedcO0CW9A = true;
		const _graphRqgMhwd = new Graph(_isDirectedcO0CW9A)
		const _returnValuecduIEYF = await _graphRqgMhwd.getAllVertices()
		const _valueTjNA9VQ = "0hPvRqJARUYhjQK2WA6ovifh5vuIDINGtCc9sDtwkLHLfSMuswily1D25nPvgMdYjf";
		const _returnValueyTnzU9D = "EpQyLuWFEqhAgmHokc8C8aTeXSEsLn5i1Afzk13ezOD6WaUalkzV8szHqIUK3PUwyxQjmfU5OJ2Bsp41eWKRzjbEzi";
		const _returnValueEyiuMom = () => { return _returnValueyTnzU9D };
		const _keyCallbackD4I7ki2 = () => { return _returnValueEyiuMom };
		const _newVertexRO16aTN = new DisjointSetItem(_valueTjNA9VQ, _keyCallbackD4I7ki2)
		const _returnValueY6NQjkw = await _newVertexRO16aTN.getRank()
		const _returnValueVjK2yE = await _newVertexRO16aTN.getChildren()
		const _returnValueZa6XAgE = await _newVertexRO16aTN.isRoot()
		const _returnValueTU3p7El = await _graphRqgMhwd.addVertex(_newVertexRO16aTN)
		const _returnValuezS7dwgi = await detectDirectedCycle(_graphRqgMhwd)
	});
})