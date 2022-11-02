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
		const _returnValueRxVp6CM = null;
		const _getAllVerticesxozfHK = () => { return _returnValueRxVp6CM };
		const _returnValueaKbsxEK = null;
		const _getVertexByKeyuz30Hp7 = () => { return _returnValueaKbsxEK };
		const _returnValueCpsD0mv = "CPEdLYcTjGkP8BpMC1T1A43iau4SrQJgKLnHRpUBpdJVfiCC8NvPvBPDsa8XlFHyMrNJZrFmHrgBFhH";
		const _getNeighborsDvIbivu = () => { return _returnValueCpsD0mv };
		const _findEdgeZHlk1Nm = "542bQRpzIC6AuVzScqmEd5VeU1";
		const _graphEpCJhB = {
			"getAllVertices": _getAllVerticesxozfHK,
		"getVertexByKey": _getVertexByKeyuz30Hp7,
		"getNeighbors": _getNeighborsDvIbivu,
		"findEdge": _findEdgeZHlk1Nm
	}
		const _arrayValueHYnsD70 = undefined;
		const _returnValuePEmjl6M = [_arrayValueHYnsD70]
		const _getKeyydMcpQt = () => { return _returnValuePEmjl6M };
		const _startVertexj0XX00Y = {
			"getKey": _getKeyydMcpQt
	}
		const _returnValueRsgVpwX = await bellmanFord(_graphEpCJhB, _startVertexj0XX00Y)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedOyHfZPO = false;
		const _graphvLnZUiy = new Graph(_isDirectedOyHfZPO)
		const _returnValuehs1POr = await _graphvLnZUiy.getAllVertices()
		const _returnValueNP3msty = await _graphvLnZUiy.getAllEdges()
		const _returnValueBkgUB0n = null;
		const _getKeyRptrTo9 = () => { return _returnValueBkgUB0n };
		const _startVertexg1Scw9h = {
			"getKey": _getKeyRptrTo9
	}
		const _returnValueQIaVbZI = await bellmanFord(_graphvLnZUiy, _startVertexg1Scw9h)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedos7dlVl = false;
		const _graphCXV25Zm = new Graph(_isDirectedos7dlVl)
		const _returnValuezZyq62C = await _graphCXV25Zm.getAdjacencyMatrix()
		const _returnValue6FaRYN = false;
		const _getKeyFLTGkfS = () => { return _returnValue6FaRYN };
		const _newVertexsq1gqXb = {
			"getKey": _getKeyFLTGkfS
	}
		const _returnValuezyifTQY = await _graphCXV25Zm.addVertex(_newVertexsq1gqXb)
		const _returnValuewLm4itx = await _graphCXV25Zm.reverse()
		const _arrayValueIIZel9d = "4qGmrGUzT6t3fe76zcZkgWBejoMhqHsxgVzQBZdN86qPFf";
		const _arrayValueuJzp3A3 = "8du2S5z7DUIA4A1Qg87776ncx3WVmb3jSbqkevfsxqQqMMBb";
		const _arrayValueVNEFUUh = 0.8727116999103899;
		const _arrayValueWfalR8q = 0.6346074483200521;
		const _vertexKeymZN83E8 = [_arrayValueIIZel9d, _arrayValueuJzp3A3, _arrayValueVNEFUUh, _arrayValueWfalR8q]
		const _returnValueI9Cl5Qj = await _graphCXV25Zm.getVertexByKey(_vertexKeymZN83E8)
		const _returnValueebeoZZ = undefined;
		const _getKeykt4AOXu = () => { return _returnValueebeoZZ };
		const _startVertexJCfAFQ7 = {
			"getKey": _getKeykt4AOXu
	}
		const _returnValueq72m5QZ = await bellmanFord(_graphCXV25Zm, _startVertexJCfAFQ7)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedOeFsECq = true;
		const _graphnij2vPD = new Graph(_isDirectedOeFsECq)
		const _valuewxGLMIF = null;
		const _returnValueOvcXLql = undefined;
		const _keyCallbackTjSnKz0 = () => { return _returnValueOvcXLql };
		const _newVertexwOj6Ie = new DisjointSetItem(_valuewxGLMIF, _keyCallbackTjSnKz0)
		const _returnValueuwAK6oc = await _newVertexwOj6Ie.getChildren()
		const _returnValuelUbBfLv = await _newVertexwOj6Ie.isRoot()
		const _returnValuenvSss5m = await _newVertexwOj6Ie.isRoot()
		const _returnValuenpmB9FR = await _graphnij2vPD.addVertex(_newVertexwOj6Ie)
		const _valueCfiOvma = undefined;
		const _returnValuelYULAu7 = false;
		const _keyCallbackRZlrJU = () => { return _returnValuelYULAu7 };
		const _newVertexy1J1KeF = new DisjointSetItem(_valueCfiOvma, _keyCallbackRZlrJU)
		const _returnValuenuQma7w = await _newVertexy1J1KeF.getRank()
		const _returnValuegewN345 = await _newVertexy1J1KeF.getRoot()
		const _returnValueqAsKPaL = await _newVertexy1J1KeF.getChildren()
		const _returnValuegGUGa1o = await _graphnij2vPD.addVertex(_newVertexy1J1KeF)
		const _returnValueD4ywUB0 = await _graphnij2vPD.getWeight()
		const _valueQmBobwU = {
		
	}
		const _returnValueXFJr8TY = true;
		const _keyCallbackmxCbOMK = () => { return _returnValueXFJr8TY };
		const _startVertexpIyfL9h = new DisjointSetItem(_valueQmBobwU, _keyCallbackmxCbOMK)
		const _returnValuekK0Fywd = true;
		const _getKeyQwKm1D = () => { return _returnValuekK0Fywd };
		const _returnValueTmxKgNP = true;
		const _setParent4k81V0 = () => { return _returnValueTmxKgNP };
		const _childItemezLpN9m = {
			"getKey": _getKeyQwKm1D,
		"setParent": _setParent4k81V0
	}
		const _returnValuerHabVGW = await _startVertexpIyfL9h.addChild(_childItemezLpN9m)
		const _returnValueASVAymU = await _startVertexpIyfL9h.getRoot()
		const _returnValueBd1DJg0 = await _startVertexpIyfL9h.isRoot()
		const _returnValuelcTCQ7Y = await _startVertexpIyfL9h.getRoot()
		const _returnValueCVylRPB = await _startVertexpIyfL9h.getChildren()
		const _returnValueYY7NLtU = await bellmanFord(_graphnij2vPD, _startVertexpIyfL9h)
	});
})