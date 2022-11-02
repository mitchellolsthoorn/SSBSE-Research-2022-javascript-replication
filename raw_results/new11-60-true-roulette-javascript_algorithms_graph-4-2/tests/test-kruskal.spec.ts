export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedH31a15 = true;
		const _returnValueC1FCUnw = "6oVFViQHsQYzPH8kK5a4qOUtG6WDfD8cgK7uDcPj9kVxCaIhKLSaHkY7yulDiWpOK1o0D2";
		const _getAllEdgesC52CT1Z = () => { return _returnValueC1FCUnw };
		const _getAllVerticesPR19axX = "I1rrCqsTLuKhhSPfi90wHhvFCmul2nIYO6LqQHsqT";
		const _graphrk3Z0so = {
			"isDirected": _isDirectedH31a15,
		"getAllEdges": _getAllEdgesC52CT1Z,
		"getAllVertices": _getAllVerticesPR19axX
	}
		const _returnValueRTDOfZc = await kruskal(_graphrk3Z0so)
	});

	it('test for kruskal', async () => {
		const _isDirectedq2ausu = false;
		const _graphTo6sjUy = new Graph(_isDirectedq2ausu)
		const _returnValue2Ojn9e = -7.526325160150002;
		const _getNeighborsU2ZzT4h = () => { return _returnValue2Ojn9e };
		const _vertexxYD5p3X = {
			"getNeighbors": _getNeighborsU2ZzT4h
	}
		const _returnValuewgY9d7A = await _graphTo6sjUy.getNeighbors(_vertexxYD5p3X)
		const _returnValueWwwHBKf = await _graphTo6sjUy.reverse()
		const _returnValueZqtGBlI = await kruskal(_graphTo6sjUy)
	});
})