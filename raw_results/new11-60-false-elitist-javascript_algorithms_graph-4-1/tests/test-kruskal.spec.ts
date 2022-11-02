export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedXkoiLti = undefined;
		const _returnValuecO3ZpT6 = 8.881100626569477;
		const _getAllEdgesgzLnMmy = () => { return _returnValuecO3ZpT6 };
		const _returnValueGC6N3dc = true;
		const _getAllVerticesMh5FKew = () => { return _returnValueGC6N3dc };
		const _graphJiCImI3 = {
			"isDirected": _isDirectedXkoiLti,
		"getAllEdges": _getAllEdgesgzLnMmy,
		"getAllVertices": _getAllVerticesMh5FKew
	}
		const _returnValuefuOIVN = await kruskal(_graphJiCImI3)
	});

	it('test for kruskal', async () => {
		const _isDirectedQeGeBaE = "WWRnIDLtntO3TeSORpxZFY67Kbhff25ETu56zyXvnzhV7SUiJkNE7AHt9kb9eCVcrdbbagzzgQ8J0FoFZ";
		const _returnValueeAUbjCG = {
		
	}
		const _getAllEdgeslLPFwUy = () => { return _returnValueeAUbjCG };
		const _returnValueF4vyXpO = {
		
	}
		const _getAllVerticesMysDrP = () => { return _returnValueF4vyXpO };
		const _graphSZZLZps = {
			"isDirected": _isDirectedQeGeBaE,
		"getAllEdges": _getAllEdgeslLPFwUy,
		"getAllVertices": _getAllVerticesMysDrP
	}
		const _returnValuecQgtzv2 = await kruskal(_graphSZZLZps)
	});

	it('test for kruskal', async () => {
		const _isDirectedZ06unjm = null;
		const _arrayValue70cvhJ = 0.41341796478555004;
		const _arrayValuemahqvFX = 2.580934693502556;
		const _arrayValued8DeND2 = "whNHaA6G7mC6yVGcWBBsW";
		const _returnValueiuOKE0 = [_arrayValue70cvhJ, _arrayValuemahqvFX, _arrayValued8DeND2]
		const _getAllEdgesMkcpnR = () => { return _returnValueiuOKE0 };
		const _arrayValue7MMJfv = null;
		const _arrayValueOOqs78Y = null;
		const _arrayValuewu4D3Er = false;
		const _returnValuet9jvreX = [_arrayValue7MMJfv, _arrayValueOOqs78Y, _arrayValuewu4D3Er]
		const _getAllVerticesOv32P3 = () => { return _returnValuet9jvreX };
		const _graphs6yjvmx = {
			"isDirected": _isDirectedZ06unjm,
		"getAllEdges": _getAllEdgesMkcpnR,
		"getAllVertices": _getAllVerticesOv32P3
	}
		const _returnValueXGKYxTW = await kruskal(_graphs6yjvmx)
	});
})