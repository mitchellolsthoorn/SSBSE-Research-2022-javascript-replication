export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueQ9IsPL3 = false;
		const _getAllVerticesKPAyso = () => { return _returnValueQ9IsPL3 };
		const _findEdgeIz0KLE = -7.578644921992898;
		const _graphtkghqwv = {
			"getAllVertices": _getAllVerticesKPAyso,
		"findEdge": _findEdgeIz0KLE
	}
		const _arrayValueipPB2C0 = 7.206042001536087;
		const _arrayValuefe7sga5 = true;
		const _arrayValueQ6z8jw0 = undefined;
		const _arrayValueFgo0MqJ = null;
		const _arrayValuen4i6HRO = undefined;
		const _returnValueyGLxLMO = null;
		const _arrayValueK56MWB7 = () => { return _returnValueyGLxLMO };
		const _arrayValueHj6mU3H = [_arrayValueQ6z8jw0, _arrayValueFgo0MqJ, _arrayValuen4i6HRO, _arrayValueK56MWB7]
		const _arrayValueRioghTn = [_arrayValueHj6mU3H]
		const _returnValuewWX9Zv2 = [_arrayValueipPB2C0, _arrayValuefe7sga5, _arrayValueRioghTn]
		const _getKeyotxkzdO = () => { return _returnValuewWX9Zv2 };
		const _startVertexqJ6dxSg = {
			"getKey": _getKeyotxkzdO
	}
		const _returnValueHWu1pso = await dijkstra(_graphtkghqwv, _startVertexqJ6dxSg)
	});

	it('test for dijkstra', async () => {
		const _returnValueQSBSUpl = []
		const _getAllVerticesDVIZufS = () => { return _returnValueQSBSUpl };
		const _returnValueFyewEUA = undefined;
		const _findEdge502gbO = () => { return _returnValueFyewEUA };
		const _graphE0uObIA = {
			"getAllVertices": _getAllVerticesDVIZufS,
		"findEdge": _findEdge502gbO
	}
		const _returnValueKZR1JGv = true;
		const _getKeynLiTZLp = () => { return _returnValueKZR1JGv };
		const _startVertexJJ1Z450 = {
			"getKey": _getKeynLiTZLp
	}
		const _returnValuePSWc8YM = await dijkstra(_graphE0uObIA, _startVertexJJ1Z450)
	});
})