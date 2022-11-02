export {}
import DoublyLinkedList from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/doubly-linked-list/DoublyLinkedList.js";
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _comparatorFunctionbi0WeFK = undefined;
		const _graphhIaNMKk = new DoublyLinkedList(_comparatorFunctionbi0WeFK)
		const _valueg89ENnB = true;
		const _returnValueVrDMDYk = await _graphhIaNMKk.append(_valueg89ENnB)
		const _valueqtJrB0Y = 1.5663333273161513;
		const _returnValueKflree = await _graphhIaNMKk.append(_valueqtJrB0Y)
		const _returnValuehAFUFnN = await stronglyConnectedComponents(_graphhIaNMKk)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedr42LpqP = true;
		const _graphlqk8q9S = new Graph(_isDirectedr42LpqP)
		const _returnValueyRWSUWc = null;
		const _getKeyJQcilEO = () => { return _returnValueyRWSUWc };
		const _startVertexTIqV3tD = {
			"getKey": _getKeyJQcilEO
	}
		const _endVertexSC64G6j = null;
		const _returnValuenFbjRm = await _graphlqk8q9S.findEdge(_startVertexTIqV3tD, _endVertexSC64G6j)
		const _returnValueV0kuZfm = await _graphlqk8q9S.getAdjacencyMatrix()
		const _returnValuegPIv1Od = await _graphlqk8q9S.getVerticesIndices()
		const _returnValued4Zx1Sr = await _graphlqk8q9S.getAdjacencyMatrix()
		const _returnValueTWmvKcH = await stronglyConnectedComponents(_graphlqk8q9S)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedNVoOUoi = false;
		const _graphGuHdmes = new Graph(_isDirectedNVoOUoi)
		const _valued8uWHtQ = null;
		const _newVertexOzrNdXA = new GraphVertex(_valued8uWHtQ)
		const _returnValuefwnQIwj = 4.876498122029009;
		const _callbackC2QuTei = () => { return _returnValuefwnQIwj };
		const _returnValueG5Lpa5 = await _newVertexOzrNdXA.toString(_callbackC2QuTei)
		const _edgeRlIYo7 = -2.8542867723472902;
		const _returnValueMmFvqNs = await _newVertexOzrNdXA.deleteEdge(_edgeRlIYo7)
		const _edgeePvVz1d = "WOUSzX1y7yDpO0lVw7WMajuzKJLDx982mDAUiBtXS6InR4FUTT24Ri9hWYjBpTMAEDGmsEkxiLR6wvXHOBV";
		const _returnValuerHhRgUC = await _newVertexOzrNdXA.deleteEdge(_edgeePvVz1d)
		const _returnValueYz7vZhB = await _graphGuHdmes.addVertex(_newVertexOzrNdXA)
		const _returnValueNSM4CIC = await stronglyConnectedComponents(_graphGuHdmes)
	});
})