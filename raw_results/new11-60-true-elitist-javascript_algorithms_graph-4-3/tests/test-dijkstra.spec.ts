export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueGym88cD = undefined;
		const _getAllVerticesuEg6dca = () => { return _returnValueGym88cD };
		const _returnValueNOPc3xb = "ITCmYoGEiaXBQLAicr7YrXp4wbQM87Y7YJwKrOuHY5cUCHarS2wbp3usBTiq2P4CUhd1Q9woGP8Zzpr";
		const _findEdgetyEdOx3 = () => { return _returnValueNOPc3xb };
		const _graphI0Ar81u = {
			"getAllVertices": _getAllVerticesuEg6dca,
		"findEdge": _findEdgetyEdOx3
	}
		const _returnValueVVfWsn2 = null;
		const _getKeymwugMwv = () => { return _returnValueVVfWsn2 };
		const _startVertexhmzS1Fx = {
			"getKey": _getKeymwugMwv
	}
		const _returnValueaMFJA4M = await dijkstra(_graphI0Ar81u, _startVertexhmzS1Fx)
	});

	it('test for dijkstra', async () => {
		const _isDirectedsevmLf = false;
		const _graphVdEYOlY = new Graph(_isDirectedsevmLf)
		const _returnValueQSxMiy = await _graphVdEYOlY.getAdjacencyMatrix()
		const _returnValueagD2LWl = await _graphVdEYOlY.reverse()
		const _returnValueZ3qCA0E = 0.050835993438838045;
		const _arrayValuey1bK8eJ = () => { return _returnValueZ3qCA0E };
		const _arrayValueTNhR8Dm = "rWqkA87iByRDufLNs49pWZdHFXJPr3alt6XIwxV2Nx2KqRuDXE90gsCu7Lf";
		const _arrayValueXnornBX = 5.3633692246772835;
		const _arrayValueiOeqTd = true;
		const _returnValuetJ1vp2v = [_arrayValuey1bK8eJ, _arrayValueTNhR8Dm, _arrayValueXnornBX, _arrayValueiOeqTd]
		const _getKeyzOdyED4 = () => { return _returnValuetJ1vp2v };
		const _startVertexin0hUTr = {
			"getKey": _getKeyzOdyED4
	}
		const _returnValueq0Xdpna = await dijkstra(_graphVdEYOlY, _startVertexin0hUTr)
	});

	it('test for dijkstra', async () => {
		const _isDirectedPmq9BaJ = false;
		const _graphM5lyVR = new Graph(_isDirectedPmq9BaJ)
		const _returnValuecKBu0m = await _graphM5lyVR.getVerticesIndices()
		const _arrayValueW2dN63i = "5MUPTB6iHEFxDWSEkC7515UKRtnD0uoTTFuVUudCImSFu6bdxfSsIKyFtSOSJYrU1SJ";
		const _arrayValuersc99bz = -7.137967301794754;
		const _arrayValueFhf5M5h = 2.99229806864731;
		const _arrayValuefYmTMLc = null;
		const _arrayValuePy4md2g = "rWOpLODemmnxxTB4gdf7lRKQs8EgXJ3X2cD9VZYO";
		const _arrayValueOti3ll6 = undefined;
		const _arrayValueUIcmjFk = null;
		const _arrayValuesUPi4LB = [_arrayValuefYmTMLc, _arrayValuePy4md2g, _arrayValueOti3ll6, _arrayValueUIcmjFk]
		const _valueKEAk5N = [_arrayValueW2dN63i, _arrayValuersc99bz, _arrayValueFhf5M5h, _arrayValuesUPi4LB]
		const _startVertexJ0K8FmF = new GraphVertex(_valueKEAk5N)
		const _arrayValueCTHtcqw = 1.4202724821135924;
		const _vertexz4TtrUl = [_arrayValueCTHtcqw]
		const _returnValuemya6wQ4 = await _startVertexJ0K8FmF.hasNeighbor(_vertexz4TtrUl)
		const _edgeWzhg9WZ = -1.79365817360787;
		const _returnValueXIVTsXL = await _startVertexJ0K8FmF.deleteEdge(_edgeWzhg9WZ)
		const _returnValuezTI8HC = await _startVertexJ0K8FmF.deleteAllEdges()
		const _returnValueEj9rT67 = await _startVertexJ0K8FmF.deleteAllEdges()
		const _returnValuennIQsdf = await dijkstra(_graphM5lyVR, _startVertexJ0K8FmF)
	});

	it('test for dijkstra', async () => {
		const _returnValueGMYH6wG = -8.795500958312454;
		const _isDirecteddZGbKZ = () => { return _returnValueGMYH6wG };
		const _graphr2qdA2d = new Graph(_isDirecteddZGbKZ)
		const _returnValueJLUM3D4 = await _graphr2qdA2d.getWeight()
		const _returnValueq99P1Hb = await _graphr2qdA2d.getAllVertices()
		const _arrayValueTUoNXkW = null;
		const _arrayValueaeU673m = true;
		const _valueRzUpfne = [_arrayValueTUoNXkW, _arrayValueaeU673m]
		const _returnValuek8lP82n = {
		
	}
		const _keyCallback7z9nk8 = () => { return _returnValuek8lP82n };
		const _startVertexVreS4II = new DisjointSetItem(_valueRzUpfne, _keyCallback7z9nk8)
		const _returnValueFggi1qu = await _startVertexVreS4II.getRank()
		const _returnValueXG8Qsl = await _startVertexVreS4II.getChildren()
		const _returnValuexL69Nra = await _startVertexVreS4II.getRoot()
		const _returnValueioJufDQ = await _startVertexVreS4II.isRoot()
		const _endVertexDqYQ5nz = undefined;
		const _returnValueL3D1yBV = await _graphr2qdA2d.findEdge(_startVertexVreS4II, _endVertexDqYQ5nz)
		const _returnValueW6QsV3M = await _graphr2qdA2d.getAllEdges()
		const _returnValuef4bPtap = await _graphr2qdA2d.getVerticesIndices()
		const _returnValuelITNvMc = true;
		const _valuefSGdRc0 = () => { return _returnValuelITNvMc };
		const _startVertexD635RQr = new GraphVertex(_valuefSGdRc0)
		const _arrayValueCo991O0 = undefined;
		const _arrayValueHtMiAQf = "hekNUsKTRCknZQrIpYi5q";
		const _vertexTqr9kmG = [_arrayValueCo991O0, _arrayValueHtMiAQf]
		const _returnValueHlhHXcx = await _startVertexD635RQr.hasNeighbor(_vertexTqr9kmG)
		const _returnValuefuihi3O = await _startVertexD635RQr.getEdges()
		const _edgeRVGRhFj = []
		const _returnValueQUbmJM = await _startVertexD635RQr.addEdge(_edgeRVGRhFj)
		const _requiredEdgeFEPsfol = null;
		const _returnValuet7BSZ4W = await _startVertexD635RQr.hasEdge(_requiredEdgeFEPsfol)
		const _returnValueryfPGSz = await _startVertexD635RQr.getKey()
		const _returnValueMEA1rYw = await dijkstra(_graphr2qdA2d, _startVertexD635RQr)
	});
})