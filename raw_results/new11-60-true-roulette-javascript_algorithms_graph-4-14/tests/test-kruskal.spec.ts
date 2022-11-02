export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedNOQl1h6 = "2BskqevEGPz";
		const _returnValuebowNRhr = undefined;
		const _getAllEdgesVftCSMH = () => { return _returnValuebowNRhr };
		const _returnValueBmrsN4M = true;
		const _getAllVerticesYw3pAVa = () => { return _returnValueBmrsN4M };
		const _graphDSQriZ = {
			"isDirected": _isDirectedNOQl1h6,
		"getAllEdges": _getAllEdgesVftCSMH,
		"getAllVertices": _getAllVerticesYw3pAVa
	}
		const _returnValueJsNYqZr = await kruskal(_graphDSQriZ)
	});

	it('test for kruskal', async () => {
		const _isDirectedBf7X5Od = undefined;
		const _returnValuemmsxUlS = "wo7CB5DF1BHd2FcWHiRScFUv";
		const _getAllEdgesEcgFKGq = () => { return _returnValuemmsxUlS };
		const _returnValuepNK5oet = true;
		const _getAllVerticesPIN5kF6 = () => { return _returnValuepNK5oet };
		const _graphrY5uhwr = {
			"isDirected": _isDirectedBf7X5Od,
		"getAllEdges": _getAllEdgesEcgFKGq,
		"getAllVertices": _getAllVerticesPIN5kF6
	}
		const _returnValuefozTFlz = await kruskal(_graphrY5uhwr)
	});
})