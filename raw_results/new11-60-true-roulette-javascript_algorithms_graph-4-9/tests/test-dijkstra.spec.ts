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
		const _arrayValueUXFC48M = "kQrpIbCXE18vnjS6h5PJhwQenaOaQMBl";
		const _arrayValueqDfj8O = {
		
	}
		const _arrayValueqX3u4ZW = 2.6031437782655296;
		const _arrayValueuCF7GfU = undefined;
		const _arrayValueFanpmA7 = 1.209051067710261;
		const _arrayValueREUTQgG = false;
		const _arrayValuewqgTu2I = [_arrayValueuCF7GfU, _arrayValueFanpmA7, _arrayValueREUTQgG]
		const _arrayValuel7HwHL = [_arrayValueqDfj8O, _arrayValueqX3u4ZW, _arrayValuewqgTu2I]
		const _arrayValueX3f7KOZ = null;
		const _arrayValueBewdK9C = 0.7338615200812182;
		const _arrayValued3yOnvC = [_arrayValuel7HwHL, _arrayValueX3f7KOZ, _arrayValueBewdK9C]
		const _arrayValueaCRwp61 = null;
		const _returnValuemmVlPWD = undefined;
		const _arrayValuexIMDnQZ = () => { return _returnValuemmVlPWD };
		const _arrayValueLfUquWX = [_arrayValued3yOnvC, _arrayValueaCRwp61, _arrayValuexIMDnQZ]
		const _arrayValueo5488k2 = []
		const _arrayValue09VpKg = null;
		const _arrayValuePcEg7W7 = [_arrayValue09VpKg]
		const _arrayValueDCj6b4f = "wfXRI9VROre8qDh47LwgQAH7scN5kTDVBfTH7OExwS18McJ83swTCJ1YdBjYL";
		const _graphjJBHxHe = [_arrayValueUXFC48M, _arrayValueLfUquWX, _arrayValueo5488k2, _arrayValuePcEg7W7, _arrayValueDCj6b4f]
		const _startVertexo9mkRA7 = "3NUM6TSsE5QITWHpQHawAfLts9V8eXC0vxDoBwJo5N68jee5jYBAklFoxioPKmVhxePdxcKT8R485lVV7yqXFcTXUXR";
		const _returnValueLyv1pRp = await dijkstra(_graphjJBHxHe, _startVertexo9mkRA7)
	});

	it('test for dijkstra', async () => {
		const _isDirectedSjospMo = true;
		const _graphSqGmqg = new Graph(_isDirectedSjospMo)
		const _returnValuePcoUFw5 = await _graphSqGmqg.getAllEdges()
		const _returnValueUY38W5S = await _graphSqGmqg.getAllEdges()
		const _returnValueQ4tOWld = false;
		const _getKeyOJiqar = () => { return _returnValueQ4tOWld };
		const _startVertexpRHiqek = {
			"getKey": _getKeyOJiqar
	}
		const _returnValuerLzX8YC = await dijkstra(_graphSqGmqg, _startVertexpRHiqek)
	});

	it('test for dijkstra', async () => {
		const _isDirectedaVWCEBP = true;
		const _graphlLoDVUx = new Graph(_isDirectedaVWCEBP)
		const _returnValueKQSCuDn = await _graphlLoDVUx.getWeight()
		const _arrayValueVSsvBqM = "wsH1nVQpBbyv4DDSPTn7sFKRnbFP4NO3uQeG4BqQAlVjBJl6X2xiWv";
		const _arrayValueoIMvfu8 = null;
		const _arrayValueHowTIoG = 2.4040480493407106;
		const _valuepTxwlNc = [_arrayValueVSsvBqM, _arrayValueoIMvfu8, _arrayValueHowTIoG]
		const _startVertexaFDbMQX = new GraphVertex(_valuepTxwlNc)
		const _requiredEdgetCebvRo = false;
		const _returnValueRaHVY1Z = await _startVertexaFDbMQX.hasEdge(_requiredEdgetCebvRo)
		const _returnValueQFDSDBv = await _startVertexaFDbMQX.getEdges()
		const _returnValuecSXNm6 = await dijkstra(_graphlLoDVUx, _startVertexaFDbMQX)
	});
})