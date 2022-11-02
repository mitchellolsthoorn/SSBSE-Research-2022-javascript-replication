export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _graphJFwF2k4 = "VDgUJ09PMUcF5HSlAhtCG8IYL2hs4cMYvpt2bZv0EaqEW4OqhIFkaStPIWCRFE";
		const _returnValueKO3UIE7 = await kruskal(_graphJFwF2k4)
	});

	it('test for kruskal', async () => {
		const _isDirectedDNSTGEB = -0.4206048951491663;
		const _getAllEdgeskljAGtI = false;
		const _returnValueytts3Ja = undefined;
		const _getAllVerticesOmvn13 = () => { return _returnValueytts3Ja };
		const _graphblaBQrY = {
			"isDirected": _isDirectedDNSTGEB,
		"getAllEdges": _getAllEdgeskljAGtI,
		"getAllVertices": _getAllVerticesOmvn13
	}
		const _returnValuekzv6ol5 = await kruskal(_graphblaBQrY)
	});

	it('test for kruskal', async () => {
		const _isDirectedn41HRZr = false;
		const _graphupb1ssC = new Graph(_isDirectedn41HRZr)
		const _vertexKeyjBP2g47 = {
		
	}
		const _returnValue0B0pJH = await _graphupb1ssC.getVertexByKey(_vertexKeyjBP2g47)
		const _returnValueFU0RrnY = await kruskal(_graphupb1ssC)
	});
})