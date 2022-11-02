export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValuezt9PO6x = null;
		const _getAllVerticesK3USZyG = () => { return _returnValuezt9PO6x };
		const _returnValueOCtQh92 = null;
		const _findEdgewUbnG71 = () => { return _returnValueOCtQh92 };
		const _graphGpGPWyP = {
			"getAllVertices": _getAllVerticesK3USZyG,
		"findEdge": _findEdgewUbnG71
	}
		const _returnValueRxaVIrX = await floydWarshall(_graphGpGPWyP)
	});

	it('test for floydWarshall', async () => {
		const _returnValueC4XbRZ8 = true;
		const _getAllVerticesaIwGQJ = () => { return _returnValueC4XbRZ8 };
		const _findEdgesD59tik = "ydvOtssF4rEe0oy333U4alBqX11bVx59lbpMWNnfFyl4LYsYQ9MctBaB3ZQk8H4z3wcWWFBtYT5FO9ioK8e";
		const _graphZWkEU4V = {
			"getAllVertices": _getAllVerticesaIwGQJ,
		"findEdge": _findEdgesD59tik
	}
		const _returnValuerRwAB1 = await floydWarshall(_graphZWkEU4V)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedqdVhJS0 = false;
		const _grapho2VDg6o = new Graph(_isDirectedqdVhJS0)
		const _returnValueGq5vfK0 = await _grapho2VDg6o.getAllEdges()
		const _returnValuej3PVpvX = await _grapho2VDg6o.reverse()
		const _returnValuecVWp3NE = await _grapho2VDg6o.getVerticesIndices()
		const _returnValueKhmMdWT = await floydWarshall(_grapho2VDg6o)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuevInydWF = 2.7140450525074744;
		const _arrayValueU6BfdHD = {
		
	}
		const _arrayValueZJxGaTY = [_arrayValuevInydWF, _arrayValueU6BfdHD]
		const _arrayValueyBfr6I3 = -6.021865051285897;
		const _returnValueuOmJs0k = [_arrayValueZJxGaTY, _arrayValueyBfr6I3]
		const _getAllVerticesonHiPrr = () => { return _returnValueuOmJs0k };
		const _returnValuejFN4Wm = 4.41899184653443;
		const _findEdgeOZnx2j = () => { return _returnValuejFN4Wm };
		const _graphkV67ZUc = {
			"getAllVertices": _getAllVerticesonHiPrr,
		"findEdge": _findEdgeOZnx2j
	}
		const _returnValuemK3xii0 = await floydWarshall(_graphkV67ZUc)
	});
})