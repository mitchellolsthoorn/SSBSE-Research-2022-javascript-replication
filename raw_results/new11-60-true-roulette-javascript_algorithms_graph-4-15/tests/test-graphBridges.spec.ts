export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _graphR6qOKfj = []
		const _returnValueh9Or31 = await graphBridges(_graphR6qOKfj)
	});

	it('test for graphBridges', async () => {
		const _isDirectedKzmgX0T = true;
		const _graphSoU1Hjc = new Graph(_isDirectedKzmgX0T)
		const _returnValuen1RVGtE = await _graphSoU1Hjc.getAllVertices()
		const _arrayValueL5s9tbu = -9.088996550981596;
		const _valuegFrYmuS = [_arrayValueL5s9tbu]
		const _returnValueKLJx1oX = "BwNHz25zoErlE43tGGEztWUeLW0VJqdvha7a";
		const _keyCallbackBIyE3eK = () => { return _returnValueKLJx1oX };
		const _newVertexCsuqmsC = new DisjointSetItem(_valuegFrYmuS, _keyCallbackBIyE3eK)
		const _returnValuecNEzIYi = await _newVertexCsuqmsC.getRank()
		const _returnValueYDK7AlN = await _graphSoU1Hjc.addVertex(_newVertexCsuqmsC)
		const _returnValueXExfbP6 = await graphBridges(_graphSoU1Hjc)
	});
})