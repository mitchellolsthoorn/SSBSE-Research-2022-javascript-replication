export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _graphWYr52lz = "0LWrce9Mqnq";
		const _returnValuetOgOF1L = {
		
	}
		const _getKeyzNVvkJ3 = () => { return _returnValuetOgOF1L };
		const _startVertexZKzAXAD = {
			"getKey": _getKeyzNVvkJ3
	}
		const _returnValueACF7rv5 = await dijkstra(_graphWYr52lz, _startVertexZKzAXAD)
	});

	it('test for dijkstra', async () => {
		const _isDirectedUkTWx4E = false;
		const _graphpGXSeqO = new Graph(_isDirectedUkTWx4E)
		const _returnValueGy9ArqU = await _graphpGXSeqO.getVerticesIndices()
		const _valuepautkjY = {
		
	}
		const _returnValueEa8Yw1d = undefined;
		const _keyCallbackXWcMb63 = () => { return _returnValueEa8Yw1d };
		const _startVertexJ78HyLy = new DisjointSetItem(_valuepautkjY, _keyCallbackXWcMb63)
		const _returnValueKxO8zIw = await _startVertexJ78HyLy.getChildren()
		const _returnValueu98oygQ = await _startVertexJ78HyLy.getChildren()
		const _returnValueHl6gzdT = await _startVertexJ78HyLy.getRoot()
		const _returnValueKmUxfL = await dijkstra(_graphpGXSeqO, _startVertexJ78HyLy)
	});
})