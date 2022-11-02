export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _arrayValuejvPBlmE = undefined;
		const _arrayValueCk1WMuO = false;
		const _arrayValueVxXi98U = null;
		const _returnValueYBmqafO = [_arrayValueVxXi98U]
		const _arrayValueFmUJjCP = () => { return _returnValueYBmqafO };
		const _arrayValueSWZ1qBG = [_arrayValueFmUJjCP]
		const _returnValueMPhgOev = [_arrayValuejvPBlmE, _arrayValueCk1WMuO, _arrayValueSWZ1qBG]
		const _getAllVerticesC7MdZBw = () => { return _returnValueMPhgOev };
		const _returnValuexC0WmCq = 8.64926587438146;
		const _findEdgeGbVAiYa = () => { return _returnValuexC0WmCq };
		const _graphrgd7kWz = {
			"getAllVertices": _getAllVerticesC7MdZBw,
		"findEdge": _findEdgeGbVAiYa
	}
		const _returnValueh9Qdkgr = undefined;
		const _getKeyB3M4yX5 = () => { return _returnValueh9Qdkgr };
		const _startVertexucJ7Lc = {
			"getKey": _getKeyB3M4yX5
	}
		const _returnValuekShUXY3 = await dijkstra(_graphrgd7kWz, _startVertexucJ7Lc)
	});

	it('test for dijkstra', async () => {
		const _isDirectedTmWIjBb = true;
		const _graphauQ56z = new Graph(_isDirectedTmWIjBb)
		const _returnValueMsXDtH = await _graphauQ56z.reverse()
		const _returnValueZi3LYM = await _graphauQ56z.getWeight()
		const _arrayValueuLRbNkI = null;
		const _arrayValuecTtN8w3 = "xUKAOIMIPjp";
		const _arrayValuetqol69K = [_arrayValueuLRbNkI, _arrayValuecTtN8w3]
		const _returnValueb5cfcmw = [_arrayValuetqol69K]
		const _getKeyUFYC0J3 = () => { return _returnValueb5cfcmw };
		const _startVertexq5kgm7B = {
			"getKey": _getKeyUFYC0J3
	}
		const _returnValueSufzfe = await dijkstra(_graphauQ56z, _startVertexq5kgm7B)
	});

	it('test for dijkstra', async () => {
		const _isDirectedf2VDPF3 = true;
		const _graphN5XR0tw = new Graph(_isDirectedf2VDPF3)
		const _arrayValuefFoOKo4 = true;
		const _arrayValue5ZPIJh = null;
		const _arrayValueG1QP0TS = undefined;
		const _arrayValueobEVqX5 = null;
		const _arrayValueCqku23W = [_arrayValueG1QP0TS, _arrayValueobEVqX5]
		const _arrayValuesOgkvh8 = "mol9QSCO3lKD6rRAh";
		const _arrayValueVBqzti = null;
		const _arrayValueASqilMh = [_arrayValuesOgkvh8, _arrayValueVBqzti]
		const _vertexKeyOZyFNeU = [_arrayValuefFoOKo4, _arrayValue5ZPIJh, _arrayValueCqku23W, _arrayValueASqilMh]
		const _returnValueHmx7bWq = await _graphN5XR0tw.getVertexByKey(_vertexKeyOZyFNeU)
		const _returnValuexhabBqf = await _graphN5XR0tw.getAllVertices()
		const _valuevMNP0O = 4.626797382282184;
		const _startVertexJdU3wUR = new GraphVertex(_valuevMNP0O)
		const _returnValuee0oVyxM = true;
		const _callbackt8QJoD4 = () => { return _returnValuee0oVyxM };
		const _returnValueQZcI9Hi = await _startVertexJdU3wUR.toString(_callbackt8QJoD4)
		const _requiredEdgeC7AD1ba = undefined;
		const _returnValuedXFBFYc = await _startVertexJdU3wUR.hasEdge(_requiredEdgeC7AD1ba)
		const _edgePMrciRl = true;
		const _returnValueecF8INa = await _startVertexJdU3wUR.deleteEdge(_edgePMrciRl)
		const _returnValueaMA7Bnx = await dijkstra(_graphN5XR0tw, _startVertexJdU3wUR)
	});
})