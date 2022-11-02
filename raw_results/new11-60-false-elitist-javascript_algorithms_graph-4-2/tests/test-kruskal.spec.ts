export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedVV6ovfB = -3.3070821504156456;
		const _returnValuecUuJZgL = false;
		const _getAllEdgeszznYIr4 = () => { return _returnValuecUuJZgL };
		const _returnValuef2iZaLB = "ulDp4Ges";
		const _getAllVerticesbZj3CNX = () => { return _returnValuef2iZaLB };
		const _graphHT69YcT = {
			"isDirected": _isDirectedVV6ovfB,
		"getAllEdges": _getAllEdgeszznYIr4,
		"getAllVertices": _getAllVerticesbZj3CNX
	}
		const _returnValueVNBjr7P = await kruskal(_graphHT69YcT)
	});

	it('test for kruskal', async () => {
		const _isDirectedygVG0OO = undefined;
		const _returnValueJDjSwc5 = "a92GrRV9uIjImYWvCgsQxLvpQkC0";
		const _getAllEdgesKLcwlUY = () => { return _returnValueJDjSwc5 };
		const _returnValueCsEBsPB = {
		
	}
		const _getAllVerticesPW9jQIJ = () => { return _returnValueCsEBsPB };
		const _graphVPrf6Fr = {
			"isDirected": _isDirectedygVG0OO,
		"getAllEdges": _getAllEdgesKLcwlUY,
		"getAllVertices": _getAllVerticesPW9jQIJ
	}
		const _returnValueO3603wV = await kruskal(_graphVPrf6Fr)
	});
})