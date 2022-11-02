export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueYiTx2S = null;
		const _getAllVerticesd01KGH2 = () => { return _returnValueYiTx2S };
		const _returnValueXVz6FcB = true;
		const _getAllEdgesVfgYIlu = () => { return _returnValueXVz6FcB };
		const _graphxyI0cc1 = {
			"getAllVertices": _getAllVerticesd01KGH2,
		"getAllEdges": _getAllEdgesVfgYIlu
	}
		const _returnValueXetOcLV = await detectUndirectedCycleUsingDisjointSet(_graphxyI0cc1)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedfMnjP58 = true;
		const _graphb3f4Lj3 = new Graph(_isDirectedfMnjP58)
		const _returnValuetuqzOYq = await _graphb3f4Lj3.getAdjacencyMatrix()
		const _returnValuezAcqdmE = await _graphb3f4Lj3.toString()
		const _returnValuex3IV5Nl = await _graphb3f4Lj3.reverse()
		const _returnValueAHPNAit = await _graphb3f4Lj3.toString()
		const _returnValuePJf330h = await _graphb3f4Lj3.getWeight()
		const _returnValueiDROdGu = await detectUndirectedCycleUsingDisjointSet(_graphb3f4Lj3)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueh8MbqRq = []
		const _getAllVerticesTEIIm1 = () => { return _returnValueh8MbqRq };
		const _arrayValueqxYLsPE = undefined;
		const _arrayValueVkJFZnJ = "iKJFDNmRXbfCRXR215UxKohOeAczrC9JVhiyKMDAly1BQwhnVYmLzcc38m6xPLMGxgq3Io7PShflFJePOcmfr3";
		const _arrayValueH9mfMXl = null;
		const _returnValuekdnfwgj = [_arrayValueqxYLsPE, _arrayValueVkJFZnJ, _arrayValueH9mfMXl]
		const _getAllEdgesvGH6Xxb = () => { return _returnValuekdnfwgj };
		const _graphCXXpzU = {
			"getAllVertices": _getAllVerticesTEIIm1,
		"getAllEdges": _getAllEdgesvGH6Xxb
	}
		const _returnValuehGS5Vgg = await detectUndirectedCycleUsingDisjointSet(_graphCXXpzU)
	});
})