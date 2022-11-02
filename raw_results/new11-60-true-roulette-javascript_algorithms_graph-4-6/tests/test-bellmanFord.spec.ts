export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _arrayValuelV2UE63 = "IMZiKtRUPvOZi79XQQvGgi5tCNDMSx3j1KbtoziX8JTeszNsL";
		const _arrayValueJdvtID = undefined;
		const _arrayValueFXuG5sD = "CbNleGNHtpbN8Smydf4EESd4lbx5NzusCG2qJQLVdmxnYxko8AudXCdt18vsRoB63KXmRsdIKL";
		const _graphhr7fzpo = [_arrayValuelV2UE63, _arrayValueJdvtID, _arrayValueFXuG5sD]
		const _startVertexlNbyS9y = "O9LffrlAk8jQ8Sd5vbxgqFO7PAkq8hA5apVtesFiBJVNC2bd5tBZzpRD8tI8UgZZrZ79EyA2Tog2sV";
		const _returnValuevZZ31hn = await bellmanFord(_graphhr7fzpo, _startVertexlNbyS9y)
	});

	it('test for bellmanFord', async () => {
		const _returnValueSurLGKF = "tycHsQup47OJgtc6cNzWIunKcsbect4E5Y285DnaiWb9zyHd2AyHqC2bilQt4uBO4";
		const _getAllVerticesTi2GNuK = () => { return _returnValueSurLGKF };
		const _returnValuetDmX7F = []
		const _returnValueCgo1DUT = () => { return _returnValuetDmX7F };
		const _getVertexByKeytwhpnS = () => { return _returnValueCgo1DUT };
		const _returnValueUcdXEOE = null;
		const _getNeighborssIXb7jh = () => { return _returnValueUcdXEOE };
		const _arrayValueyIybHK9 = 5.710334936398747;
		const _arrayValueUMrryva = [_arrayValueyIybHK9]
		const _returnValuewCvUR6J = [_arrayValueUMrryva]
		const _findEdgexqsRVbT = () => { return _returnValuewCvUR6J };
		const _graphS15tnH = {
			"getAllVertices": _getAllVerticesTi2GNuK,
		"getVertexByKey": _getVertexByKeytwhpnS,
		"getNeighbors": _getNeighborssIXb7jh,
		"findEdge": _findEdgexqsRVbT
	}
		const _valueUltWWKG = null;
		const _arrayValueZIJ2P0x = "Xri9jsD1mhVM3uoUIBGrpqtKkas8TSdBAF5bkE8Tyz7RLcIOFAXRzpsdYWIOmmjrxmLz";
		const _arrayValueK8zJ8q = undefined;
		const _returnValue8GEdNP = [_arrayValueZIJ2P0x, _arrayValueK8zJ8q]
		const _returnValuem7l0oy1 = () => { return _returnValue8GEdNP };
		const _keyCallbackEHacVmB = () => { return _returnValuem7l0oy1 };
		const _startVertexG6EWSyY = new DisjointSetItem(_valueUltWWKG, _keyCallbackEHacVmB)
		const _returnValuexKyd3eF = await _startVertexG6EWSyY.getChildren()
		const _returnValuex9udJxk = await _startVertexG6EWSyY.getRoot()
		const _returnValuedYI9SW8 = await _startVertexG6EWSyY.getChildren()
		const _returnValueDsTlewF = await _startVertexG6EWSyY.getKey()
		const _returnValuess0aHfv = await bellmanFord(_graphS15tnH, _startVertexG6EWSyY)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedzl50pP3 = false;
		const _graphLlc47a = new Graph(_isDirectedzl50pP3)
		const _vertexKeyrKycEHR = null;
		const _returnValuevCYAG0c = await _graphLlc47a.getVertexByKey(_vertexKeyrKycEHR)
		const _returnValuet7XJo4E = await _graphLlc47a.getAllVertices()
		const _vertexKeyWCJIs7X = "xuRMfRpfAOZBssh2nSEEAs4wxYPbbH1rBfpGvjQ4kzom7bTKhEo1W7jGj1O6k1kf6WcUL5ZxshSR5MsAtSjPJS2lDoj";
		const _returnValueIqDec8k = await _graphLlc47a.getVertexByKey(_vertexKeyWCJIs7X)
		const _returnValue5xx5ii = undefined;
		const _getKeyCnUFMX = () => { return _returnValue5xx5ii };
		const _startVertexPjQ4UPf = {
			"getKey": _getKeyCnUFMX
	}
		const _returnValued0iaFi = await bellmanFord(_graphLlc47a, _startVertexPjQ4UPf)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedEDrGC8r = false;
		const _graphDWQOm2 = new Graph(_isDirectedEDrGC8r)
		const _valuePcjNqC = true;
		const _returnValueO8KGXwG = undefined;
		const _keyCallbackqJ6otr7 = () => { return _returnValueO8KGXwG };
		const _newVertexswMee2n = new DisjointSetItem(_valuePcjNqC, _keyCallbackqJ6otr7)
		const _returnValueS9nsKa2 = await _newVertexswMee2n.isRoot()
		const _returnValuegc8Hb63 = await _graphDWQOm2.addVertex(_newVertexswMee2n)
		const _returnValuewnbAqx = await _graphDWQOm2.getWeight()
		const _valueg4wdnRK = null;
		const _returnValuej1FXIzI = undefined;
		const _keyCallbackQLVKcDO = () => { return _returnValuej1FXIzI };
		const _startVertexHLYliVj = new DisjointSetItem(_valueg4wdnRK, _keyCallbackQLVKcDO)
		const _returnValuereYzv0z = await _startVertexHLYliVj.isRoot()
		const _returnValuevAfPajc = await bellmanFord(_graphDWQOm2, _startVertexHLYliVj)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedK5vVuzL = true;
		const _graphlHJ9eBJ = new Graph(_isDirectedK5vVuzL)
		const _returnValuec2DkXH = await _graphlHJ9eBJ.getAllVertices()
		const _returnValuedmqEHXv = -9.354477204247024;
		const _getKeybhgZf5j = () => { return _returnValuedmqEHXv };
		const _newVertexKR9rwhZ = {
			"getKey": _getKeybhgZf5j
	}
		const _returnValuenXp74Wp = await _graphlHJ9eBJ.addVertex(_newVertexKR9rwhZ)
		const _arrayValueXoTdzpe = -1.4545512924815363;
		const _arrayValueCla1F3u = undefined;
		const _valueyqKMpl7 = [_arrayValueXoTdzpe, _arrayValueCla1F3u]
		const _returnValueZYYDFZ = true;
		const _keyCallbackPUuYZlb = () => { return _returnValueZYYDFZ };
		const _startVertexq0t25fd = new DisjointSetItem(_valueyqKMpl7, _keyCallbackPUuYZlb)
		const _returnValuekXnRaNE = await _startVertexq0t25fd.getChildren()
		const _returnValuevodILiJ = await _startVertexq0t25fd.isRoot()
		const _returnValueMq7tt8E = await _startVertexq0t25fd.getChildren()
		const _returnValueCLUPy8l = await _startVertexq0t25fd.getRank()
		const _returnValueLexPjO = await bellmanFord(_graphlHJ9eBJ, _startVertexq0t25fd)
	});
})