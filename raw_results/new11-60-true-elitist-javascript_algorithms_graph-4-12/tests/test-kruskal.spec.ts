export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedFiJr9G = undefined;
		const _returnValueqlGFanp = 9.798911065340999;
		const _getAllEdgesogrJjFm = () => { return _returnValueqlGFanp };
		const _returnValueaQoWPv = {
		
	}
		const _getAllVerticesP3dcLGQ = () => { return _returnValueaQoWPv };
		const _graphOqUnFiJ = {
			"isDirected": _isDirectedFiJr9G,
		"getAllEdges": _getAllEdgesogrJjFm,
		"getAllVertices": _getAllVerticesP3dcLGQ
	}
		const _returnValuenGChbz = await kruskal(_graphOqUnFiJ)
	});

	it('test for kruskal', async () => {
		const _isDirecteda6nDqHo = []
		const _returnValuepUxHpPA = null;
		const _getAllEdgespj390c = () => { return _returnValuepUxHpPA };
		const _arrayValueg6FwEU1 = true;
		const _returnValueMRyrvI = [_arrayValueg6FwEU1]
		const _getAllVerticesHbgwDgC = () => { return _returnValueMRyrvI };
		const _graphWCkX3hi = {
			"isDirected": _isDirecteda6nDqHo,
		"getAllEdges": _getAllEdgespj390c,
		"getAllVertices": _getAllVerticesHbgwDgC
	}
		const _returnValueE3g2pGC = await kruskal(_graphWCkX3hi)
	});

	it('test for kruskal', async () => {
		const _isDirectedhUnAMk7 = undefined;
		const _returnValuebatge6L = "YfPAKBx7oHK6XiPnnJV1Jnw4tXYRsanUda6erwK3GojHpRLTDBKpYmxeyv3Ez8394fazzIv2pJLD6bLeaO7ep";
		const _getAllEdgeskwuSFow = () => { return _returnValuebatge6L };
		const _returnValuerlYoPjT = "I7qRt6PmFUAXLM8J3Bus4";
		const _getAllVerticesnsBzXSP = () => { return _returnValuerlYoPjT };
		const _graphF8D4UFl = {
			"isDirected": _isDirectedhUnAMk7,
		"getAllEdges": _getAllEdgeskwuSFow,
		"getAllVertices": _getAllVerticesnsBzXSP
	}
		const _returnValueMr40Lsm = await kruskal(_graphF8D4UFl)
	});
})