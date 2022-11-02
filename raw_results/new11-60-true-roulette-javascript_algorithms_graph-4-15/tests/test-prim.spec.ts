export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _graphpleZGc = "fJE2hq17zWSoAO7cKaQIbKd1XdUccqlyAzzqxTfuQy7YAIi3DcN6j8ztpr2KOHv";
		const _returnValueORjDa69 = await prim(_graphpleZGc)
	});

	it('test for prim', async () => {
		const _isDirectedzZUaenO = "p";
		const _returnValueABtFlJ3 = 1.5780563191475316;
		const _getAllVerticeslVe1xC = () => { return _returnValueABtFlJ3 };
		const _graphfz8Np5R = {
			"isDirected": _isDirectedzZUaenO,
		"getAllVertices": _getAllVerticeslVe1xC
	}
		const _returnValueJwBXjIH = await prim(_graphfz8Np5R)
	});

	it('test for prim', async () => {
		const _isDirecteduCB0hm7 = false;
		const _graphNLTxX8c = new Graph(_isDirecteduCB0hm7)
		const _returnValueD8kPjQp = await _graphNLTxX8c.getAdjacencyMatrix()
		const _valuevzifFtS = "Su3czRu5AK5ymn9fX4j1vllScnBcD45UolzYhkrqemLH5cYPfok9XxvJCwLrC4NgdwzoMztCrULzseYFzDf4OD";
		const _returnValuedwJecxD = true;
		const _keyCallbacksYRpW5K = () => { return _returnValuedwJecxD };
		const _newVertexxGoZza = new DisjointSetItem(_valuevzifFtS, _keyCallbacksYRpW5K)
		const _returnValuegfDCpAV = await _newVertexxGoZza.getChildren()
		const _returnValueLz1Pw6g = await _newVertexxGoZza.getKey()
		const _returnValueEFgY1Mx = await _newVertexxGoZza.getRoot()
		const _returnValueGn6JmdV = await _newVertexxGoZza.isRoot()
		const _returnValueEulfaVi = await _graphNLTxX8c.addVertex(_newVertexxGoZza)
		const _returnValuewy2AGDq = await _graphNLTxX8c.reverse()
		const _returnValueR77J9WJ = await _graphNLTxX8c.getWeight()
		const _returnValueP8kpym7 = await _graphNLTxX8c.getAllEdges()
		const _returnValueAUcmxCh = await prim(_graphNLTxX8c)
	});
})