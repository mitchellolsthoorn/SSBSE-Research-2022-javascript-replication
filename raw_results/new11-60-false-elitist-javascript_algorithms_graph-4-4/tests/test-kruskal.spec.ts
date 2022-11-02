export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedDq5UaSP = undefined;
		const _returnValueMEgrOAp = false;
		const _getAllEdgesKiTT22K = () => { return _returnValueMEgrOAp };
		const _arrayValuepJbGRnP = null;
		const _returnValueqkMlMh5 = [_arrayValuepJbGRnP]
		const _getAllVerticesJxvyNz = () => { return _returnValueqkMlMh5 };
		const _graphQcI5zHI = {
			"isDirected": _isDirectedDq5UaSP,
		"getAllEdges": _getAllEdgesKiTT22K,
		"getAllVertices": _getAllVerticesJxvyNz
	}
		const _returnValueT9WIMxd = await kruskal(_graphQcI5zHI)
	});

	it('test for kruskal', async () => {
		const _isDirectedi0iq0H3 = "rb66LFEcL3E46ENI5hIOYPLasAYJh8bZDXp";
		const _getAllEdges9aoRPc = undefined;
		const _returnValueiR6SY7t = undefined;
		const _getAllVerticesajTienz = () => { return _returnValueiR6SY7t };
		const _graphYQcL1P = {
			"isDirected": _isDirectedi0iq0H3,
		"getAllEdges": _getAllEdges9aoRPc,
		"getAllVertices": _getAllVerticesajTienz
	}
		const _returnValuehN7nsiA = await kruskal(_graphYQcL1P)
	});

	it('test for kruskal', async () => {
		const _isDirectedXBEyCe = null;
		const _arrayValueWN7zF0 = null;
		const _returnValueEzruTT = [_arrayValueWN7zF0]
		const _getAllEdges6Hah3N = () => { return _returnValueEzruTT };
		const _returnValueLdVGyGf = "U72cOykNApmEppCkJiDhbsOouu";
		const _getAllVerticesIaLTqG5 = () => { return _returnValueLdVGyGf };
		const _graphTLDGtJH = {
			"isDirected": _isDirectedXBEyCe,
		"getAllEdges": _getAllEdges6Hah3N,
		"getAllVertices": _getAllVerticesIaLTqG5
	}
		const _returnValueypcryw3 = await kruskal(_graphTLDGtJH)
	});
})