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
		const _getAllVerticesglsCEVi = true;
		const _findEdgeAaf6Ti = "ovWs49rq3sXni5m16S66g3J4cwmkt27iHKL62yheFnbK5m";
		const _graphFhrubJB = {
			"getAllVertices": _getAllVerticesglsCEVi,
		"findEdge": _findEdgeAaf6Ti
	}
		const _returnValueGsiKekU = "onfCSSv0Al";
		const _getKeygW3lCMo = () => { return _returnValueGsiKekU };
		const _startVertexEcj9hRn = {
			"getKey": _getKeygW3lCMo
	}
		const _returnValuedGHbd28 = await dijkstra(_graphFhrubJB, _startVertexEcj9hRn)
	});

	it('test for dijkstra', async () => {
		const _returnValueIPFKxsx = []
		const _getAllVerticesBw8uJFn = () => { return _returnValueIPFKxsx };
		const _returnValueEcaF9Gl = undefined;
		const _findEdgecA0A9OW = () => { return _returnValueEcaF9Gl };
		const _graphpm8kC98 = {
			"getAllVertices": _getAllVerticesBw8uJFn,
		"findEdge": _findEdgecA0A9OW
	}
		const _arrayValueWd7lQrm = 0.5953299028540542;
		const _arrayValueuiJJpNM = undefined;
		const _arrayValueOTPf1j = 0.7774241615357163;
		const _arrayValueIqeLoR = null;
		const _returnValuecA6w073 = [_arrayValueWd7lQrm, _arrayValueuiJJpNM, _arrayValueOTPf1j, _arrayValueIqeLoR]
		const _getKey5MJyzr = () => { return _returnValuecA6w073 };
		const _startVertexL9etExm = {
			"getKey": _getKey5MJyzr
	}
		const _returnValueSMbrzrY = await dijkstra(_graphpm8kC98, _startVertexL9etExm)
	});

	it('test for dijkstra', async () => {
		const _isDirectedPSUrl24 = true;
		const _graphQgAxLZr = new Graph(_isDirectedPSUrl24)
		const _returnValuegXyOdyp = await _graphQgAxLZr.getWeight()
		const _returnValuezJeqEie = await _graphQgAxLZr.getVerticesIndices()
		const _returnValuenOUVMm0 = await _graphQgAxLZr.getAllEdges()
		const _returnValueOaA7t5L = await _graphQgAxLZr.getWeight()
		const _arrayValueMmjxLL = true;
		const _arrayValueCNuw7hQ = 9.031974806755073;
		const _arrayValueku9tAnM = null;
		const _arrayValuezCxMZdm = []
		const _arrayValueSAtcCkr = null;
		const _arrayValueZbQ4HHG = [_arrayValueku9tAnM, _arrayValuezCxMZdm, _arrayValueSAtcCkr]
		const _valueBhkvfVr = [_arrayValueMmjxLL, _arrayValueCNuw7hQ, _arrayValueZbQ4HHG]
		const _startVertexckXGpG = new GraphVertex(_valueBhkvfVr)
		const _vertexj4MZIer = undefined;
		const _returnValueTddjWAH = await _startVertexckXGpG.hasNeighbor(_vertexj4MZIer)
		const _returnValueNOFvCVn = await _startVertexckXGpG.getNeighbors()
		const _returnValueu38n0uK = await _startVertexckXGpG.getNeighbors()
		const _returnValuePWFDeU = await _startVertexckXGpG.getNeighbors()
		const _returnValueTwdwhty = await dijkstra(_graphQgAxLZr, _startVertexckXGpG)
	});

	it('test for dijkstra', async () => {
		const _isDirectedXIvjYpO = false;
		const _graphmlztWsz = new Graph(_isDirectedXIvjYpO)
		const _returnValueoLiSU9P = await _graphmlztWsz.getWeight()
		const _returnValueCQSDBVH = await _graphmlztWsz.toString()
		const _returnValueE4JN4Jm = null;
		const _valueIMA1FMA = () => { return _returnValueE4JN4Jm };
		const _startVertex45JHLq = new GraphVertex(_valueIMA1FMA)
		const _returnValueUAJFBmN = await _startVertex45JHLq.getEdges()
		const _vertexUiBYNKx = undefined;
		const _returnValueEOJjQnQ = await _startVertex45JHLq.hasNeighbor(_vertexUiBYNKx)
		const _arrayValuevCfU75e = -4.202742469050533;
		const _arrayValueZbKtl2 = "rJV5BzC9s8uVMK9KJypsC3MjSvIrL5w6ZJQhzdcfJIVHOLmpcaJck66IB1MhiXHyfmhHPhvGaadOrMJ2HYC3MwOgngf";
		const _vertexEtO6bM = [_arrayValuevCfU75e, _arrayValueZbKtl2]
		const _returnValueuri6y8B = await _startVertex45JHLq.hasNeighbor(_vertexEtO6bM)
		const _edgeBpGEoNV = "NOPd3wLr9umsiTJ9bem2VDdFYSlOIbXRRTebDb4FDGknHU5VXDBQ4un46s5Lx86O994BToaFfuJA4";
		const _returnValueocFabXN = await _startVertex45JHLq.addEdge(_edgeBpGEoNV)
		const _returnValueQgCeF2A = await dijkstra(_graphmlztWsz, _startVertex45JHLq)
	});
})