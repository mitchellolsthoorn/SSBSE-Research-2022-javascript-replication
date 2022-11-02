export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphKIZJWGr = []
		const _startVertexrZNO4zx = undefined;
		const _returnValuextz2WWO = await bellmanFord(_graphKIZJWGr, _startVertexrZNO4zx)
	});

	it('test for bellmanFord', async () => {
		const _graphxVcWsHR = "Ix56VxmhY8sx2L7CB0GtO0OPHdSr5AphljP";
		const _returnValueCRBwxN6 = true;
		const _getKeyXNTzeSB = () => { return _returnValueCRBwxN6 };
		const _startVertexOjcTPXe = {
			"getKey": _getKeyXNTzeSB
	}
		const _returnValueexuYZRM = await bellmanFord(_graphxVcWsHR, _startVertexOjcTPXe)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedCioqCd = false;
		const _graphdMpmUvL = new Graph(_isDirectedCioqCd)
		const _valueQLkgrlz = null;
		const _keyCallbackOjJYwyf = false;
		const _startVertexlJw3PAt = new DisjointSetItem(_valueQLkgrlz, _keyCallbackOjJYwyf)
		const _returnValue8StVeW = await _startVertexlJw3PAt.getChildren()
		const _parentItemZ4bMMgD = null;
		const _forceSettingParentChildtXifDvc = false;
		const _returnValuewC5RIro = await _startVertexlJw3PAt.setParent(_parentItemZ4bMMgD, _forceSettingParentChildtXifDvc)
		const _returnValuedBNZV3B = await _startVertexlJw3PAt.getChildren()
		const _returnValuepqWGsJu = await _startVertexlJw3PAt.getRank()
		const _endVertexTm0wPms = null;
		const _returnValueMXwfQol = await _graphdMpmUvL.findEdge(_startVertexlJw3PAt, _endVertexTm0wPms)
		const _returnValued9zimsJ = await _graphdMpmUvL.toString()
		const _returnValuexx1iMHl = false;
		const _getKeyUcM2jH = () => { return _returnValuexx1iMHl };
		const _startVertexeg9Vdtj = {
			"getKey": _getKeyUcM2jH
	}
		const _returnValuecqoSALJ = await bellmanFord(_graphdMpmUvL, _startVertexeg9Vdtj)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedtPmBMuX = false;
		const _graphfIDKzQ = new Graph(_isDirectedtPmBMuX)
		const _returnValueclfcRWj = await _graphfIDKzQ.getAllVertices()
		const _returnValueilGKZ8 = 2.3132436866840127;
		const _getKeyno361fG = () => { return _returnValueilGKZ8 };
		const _newVertexeBnZgCL = {
			"getKey": _getKeyno361fG
	}
		const _returnValueT1HIZwt = await _graphfIDKzQ.addVertex(_newVertexeBnZgCL)
		const _vertexKeyy0gpuZ9 = undefined;
		const _returnValuei1IsbN9 = await _graphfIDKzQ.getVertexByKey(_vertexKeyy0gpuZ9)
		const _vertexKeyByV0mxu = undefined;
		const _returnValuecPK9dZG = await _graphfIDKzQ.getVertexByKey(_vertexKeyByV0mxu)
		const _returnValueRJCH42 = await _graphfIDKzQ.getAllEdges()
		const _returnValueDNVh5E8 = null;
		const _getKeyWahUHNj = () => { return _returnValueDNVh5E8 };
		const _startVertexkhnVDJ1 = {
			"getKey": _getKeyWahUHNj
	}
		const _returnValueHFW2AGG = await bellmanFord(_graphfIDKzQ, _startVertexkhnVDJ1)
	});
})