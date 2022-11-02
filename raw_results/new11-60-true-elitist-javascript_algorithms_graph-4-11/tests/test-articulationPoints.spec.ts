export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuebxUX7aT = "tBDEOjsOXHj4A2ITYiF3Qzl1nRl3OVFWHJvZpvJRJTydEOX3x7h2TphQpVueNeErFJVUJ0kcwESW9p0IlJpM";
		const _getAllVerticesaNK0GTv = () => { return _returnValuebxUX7aT };
		const _graphCvUQoOG = {
			"getAllVertices": _getAllVerticesaNK0GTv
	}
		const _returnValuew5uCZ2Q = await articulationPoints(_graphCvUQoOG)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedaFBNioZ = true;
		const _graphbw5Er1X = new Graph(_isDirectedaFBNioZ)
		const _returnValueIXdKHjb = {
		
	}
		const _getKeydHLOsLb = () => { return _returnValueIXdKHjb };
		const _newVertexlS84eZz = {
			"getKey": _getKeydHLOsLb
	}
		const _returnValueII5KtUW = await _graphbw5Er1X.addVertex(_newVertexlS84eZz)
		const _returnValuezcOLAkG = await _graphbw5Er1X.getAllEdges()
		const _returnValueoxygBXr = await articulationPoints(_graphbw5Er1X)
	});
})