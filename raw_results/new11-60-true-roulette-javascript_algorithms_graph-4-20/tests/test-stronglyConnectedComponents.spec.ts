export {}
import DoublyLinkedList from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/doubly-linked-list/DoublyLinkedList.js";
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _comparatorFunctionM4L0YlX = -9.51431141455252;
		const _graphKIt3Z0w = new DoublyLinkedList(_comparatorFunctionM4L0YlX)
		const _valueYoQtqEz = "0P4dwzjvyxckYCu1YFXlUqAfciiikvzzT3IYJ28euuPChselxwhoB2exN3a3fAFSmFgv5o1EGBjOzXuHTyVYYF";
		const _returnValueiNS9HLQ = await _graphKIt3Z0w.append(_valueYoQtqEz)
		const _returnValueDDnGKhk = await stronglyConnectedComponents(_graphKIt3Z0w)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedDg0eKS = true;
		const _graphpat4rB5 = new Graph(_isDirectedDg0eKS)
		const _arrayValueGILFF6g = "vUKPrnRTpRfFRWAuxBpTqPYB5sfsxHOfeRCjH2pm4g1uLSgjXQ7awo3qIenfStWCG188yOFFcIXDe5rnqA";
		const _arrayValueAZjZ26X = undefined;
		const _arrayValueXUEWdOD = 9.8588155354357;
		const _arrayValueKMsNwrp = [_arrayValueGILFF6g, _arrayValueAZjZ26X, _arrayValueXUEWdOD]
		const _arrayValueoB3q3ox = {
		
	}
		const _vertexKeya2ZtSx = [_arrayValueKMsNwrp, _arrayValueoB3q3ox]
		const _returnValuePJiNBwv = await _graphpat4rB5.getVertexByKey(_vertexKeya2ZtSx)
		const _returnValuej2ozBmN = {
		
	}
		const _arrayValueMSM37NO = () => { return _returnValuej2ozBmN };
		const _arrayValuen3Ux6H2 = undefined;
		const _arrayValueQR4WeaR = null;
		const _arrayValuePnFSfZR = {
		
	}
		const _returnValuemmyOG6O = [_arrayValueMSM37NO, _arrayValuen3Ux6H2, _arrayValueQR4WeaR, _arrayValuePnFSfZR]
		const _getKeyhb6wU5 = () => { return _returnValuemmyOG6O };
		const _startVertexXGf6Xyz = {
			"getKey": _getKeyhb6wU5
	}
		const _endVertexOMa8n4H = "ECv2shKHJIPFvnAxPyn3RzArrlUmVuF4aSqLDl2hjrwFOLhWk76ugVoxFsYun8A50Tk8n7q9nHcWkHP";
		const _returnValuecmP5igH = await _graphpat4rB5.findEdge(_startVertexXGf6Xyz, _endVertexOMa8n4H)
		const _returnValueLEWs30v = await stronglyConnectedComponents(_graphpat4rB5)
	});
})