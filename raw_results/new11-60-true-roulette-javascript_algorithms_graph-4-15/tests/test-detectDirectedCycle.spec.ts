export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValuemZkQO7V = -6.359655678845645;
		const _getAllVerticesB87nGw1 = () => { return _returnValuemZkQO7V };
		const _graphvYzQpgI = {
			"getAllVertices": _getAllVerticesB87nGw1
	}
		const _returnValueCUYNOW = await detectDirectedCycle(_graphvYzQpgI)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedjwAFJP5 = true;
		const _graphvicpZcs = new Graph(_isDirectedjwAFJP5)
		const _returnValuedxq2NLP = await _graphvicpZcs.reverse()
		const _returnValueytDfNMV = await detectDirectedCycle(_graphvicpZcs)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedgme8WwH = undefined;
		const _graphHFWYNHJ = new Graph(_isDirectedgme8WwH)
		const _valueTCKECmj = null;
		const _returnValueSHdDGP = undefined;
		const _keyCallbackTtUQmw2 = () => { return _returnValueSHdDGP };
		const _newVertexkuTp2h2 = new DisjointSetItem(_valueTCKECmj, _keyCallbackTtUQmw2)
		const _returnValuej2riOxg = await _newVertexkuTp2h2.getChildren()
		const _returnValueEBW9ee = await _newVertexkuTp2h2.getRoot()
		const _returnValuetch2e1S = await _graphHFWYNHJ.addVertex(_newVertexkuTp2h2)
		const _valuecPRCMru = "y7PpjErixXGD4K43FCVIlWpHGX1";
		const _newVertexl4I1OJJ = new GraphVertex(_valuecPRCMru)
		const _returnValueRrox4W = await _newVertexl4I1OJJ.getKey()
		const _returnValuenTigOjf = await _newVertexl4I1OJJ.deleteAllEdges()
		const _returnValueL4MYsuW = await _graphHFWYNHJ.addVertex(_newVertexl4I1OJJ)
		const _returnValueFNadE9R = await _graphHFWYNHJ.toString()
		const _returnValueOtovEfi = await detectDirectedCycle(_graphHFWYNHJ)
	});
})