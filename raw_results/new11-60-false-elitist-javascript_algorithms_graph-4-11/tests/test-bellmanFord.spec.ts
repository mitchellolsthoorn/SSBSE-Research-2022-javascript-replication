export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueq7MCvH = true;
		const _getAllVerticesIlD4WTt = () => { return _returnValueq7MCvH };
		const _returnValueNE3gw2S = "XaOYIR43klMoIpGWMCEL7RKo90GonA7tz7Fu1spV1nCmUfAxyjFtgU5wk";
		const _getVertexByKeyuejh8dh = () => { return _returnValueNE3gw2S };
		const _returnValueISsPzZ5 = 1.9552766050863148;
		const _getNeighborsArRT0aw = () => { return _returnValueISsPzZ5 };
		const _returnValueYogfgN9 = []
		const _findEdgeaGTR9MN = () => { return _returnValueYogfgN9 };
		const _graphLOYqDQW = {
			"getAllVertices": _getAllVerticesIlD4WTt,
		"getVertexByKey": _getVertexByKeyuejh8dh,
		"getNeighbors": _getNeighborsArRT0aw,
		"findEdge": _findEdgeaGTR9MN
	}
		const _returnValueP8jNh6 = "6YBQEtIKLnNtsG3wIjBzLHpR9FX4";
		const _getKeyDVz4SGS = () => { return _returnValueP8jNh6 };
		const _startVertexD5y554m = {
			"getKey": _getKeyDVz4SGS
	}
		const _returnValueHKuqQG8 = await bellmanFord(_graphLOYqDQW, _startVertexD5y554m)
	});

	it('test for bellmanFord', async () => {
		const _returnValuex7qryd = []
		const _getAllVerticesOjYsXY = () => { return _returnValuex7qryd };
		const _returnValuefoKx8R = null;
		const _returnValueBpGQoiG = () => { return _returnValuefoKx8R };
		const _getVertexByKeyobhQIy2 = () => { return _returnValueBpGQoiG };
		const _returnValueoDVf6if = undefined;
		const _getNeighborsvsJe3dt = () => { return _returnValueoDVf6if };
		const _returnValuetmsMXC = {
		
	}
		const _returnValueOJEn1g3 = () => { return _returnValuetmsMXC };
		const _findEdgeRe0TkNq = () => { return _returnValueOJEn1g3 };
		const _graphBrjggQg = {
			"getAllVertices": _getAllVerticesOjYsXY,
		"getVertexByKey": _getVertexByKeyobhQIy2,
		"getNeighbors": _getNeighborsvsJe3dt,
		"findEdge": _findEdgeRe0TkNq
	}
		const _arrayValueqUdVMr = "D1BJlT2hEI3";
		const _returnValue4LiSeM = [_arrayValueqUdVMr]
		const _getKeyjLR5gcX = () => { return _returnValue4LiSeM };
		const _startVertexViVMxGj = {
			"getKey": _getKeyjLR5gcX
	}
		const _returnValueUQm7VT = await bellmanFord(_graphBrjggQg, _startVertexViVMxGj)
	});
})