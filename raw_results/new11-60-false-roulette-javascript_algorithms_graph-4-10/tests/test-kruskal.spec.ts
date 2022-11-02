export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _returnValueZgTxeEX = null;
		const _isDirectedSMa2CEk = () => { return _returnValueZgTxeEX };
		const _returnValueTxXq7M4 = undefined;
		const _getAllEdgessUrRdr6 = () => { return _returnValueTxXq7M4 };
		const _returnValuewMSLMrZ = true;
		const _getAllVerticeskjmVuMJ = () => { return _returnValuewMSLMrZ };
		const _graphUhNQuKX = {
			"isDirected": _isDirectedSMa2CEk,
		"getAllEdges": _getAllEdgessUrRdr6,
		"getAllVertices": _getAllVerticeskjmVuMJ
	}
		const _returnValuefqwoQGQ = await kruskal(_graphUhNQuKX)
	});

	it('test for kruskal', async () => {
		const _isDirectedg7cb3fH = null;
		const _returnValueHaDeRGH = "Lrp6S2LOl7L4FkB";
		const _getAllEdgesDWY7c4j = () => { return _returnValueHaDeRGH };
		const _returnValueONkM5N1 = false;
		const _getAllVerticesoE9H3m7 = () => { return _returnValueONkM5N1 };
		const _graphzoy5AJt = {
			"isDirected": _isDirectedg7cb3fH,
		"getAllEdges": _getAllEdgesDWY7c4j,
		"getAllVertices": _getAllVerticesoE9H3m7
	}
		const _returnValueioEB4at = await kruskal(_graphzoy5AJt)
	});
})