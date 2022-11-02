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
		const _getAllVerticesw8KlNB2 = null;
		const _arrayValuexRwJqbO = undefined;
		const _arrayValueomOD3dP = null;
		const _returnValuepBXRxtX = [_arrayValuexRwJqbO, _arrayValueomOD3dP]
		const _getVertexByKeyLi7mRxy = () => { return _returnValuepBXRxtX };
		const _getNeighborsj9q2XIM = "Cl6V6haMsd9rIwFwG";
		const _returnValuePxmLyO8 = null;
		const _findEdgeBgOEiwv = () => { return _returnValuePxmLyO8 };
		const _graph9GtKaJ = {
			"getAllVertices": _getAllVerticesw8KlNB2,
		"getVertexByKey": _getVertexByKeyLi7mRxy,
		"getNeighbors": _getNeighborsj9q2XIM,
		"findEdge": _findEdgeBgOEiwv
	}
		const _arrayValuesWe14kT = true;
		const _startVertex1bzv8J = [_arrayValuesWe14kT]
		const _returnValueMP8goCZ = await bellmanFord(_graph9GtKaJ, _startVertex1bzv8J)
	});

	it('test for bellmanFord', async () => {
		const _returnValueaxwX8v9 = "M0qIwmPDJRRwLTUpuFyFFtyOto";
		const _getAllVerticesUrGKMv = () => { return _returnValueaxwX8v9 };
		const _returnValueTolrj89 = 0.3717051392052628;
		const _getVertexByKeyKa56Q5w = () => { return _returnValueTolrj89 };
		const _arrayValueIfxBcd = 5.392001707165701;
		const _arrayValuehSZrqV9 = null;
		const _arrayValueZtSYAMc = "MHqVHW6WkqfjjoD1IP6apu";
		const _getNeighborsmyrEOI = [_arrayValueIfxBcd, _arrayValuehSZrqV9, _arrayValueZtSYAMc]
		const _returnValuebpm6hOi = {
		
	}
		const _findEdgeWTixESD = () => { return _returnValuebpm6hOi };
		const _graphhVeUB7k = {
			"getAllVertices": _getAllVerticesUrGKMv,
		"getVertexByKey": _getVertexByKeyKa56Q5w,
		"getNeighbors": _getNeighborsmyrEOI,
		"findEdge": _findEdgeWTixESD
	}
		const _returnValuenQdqwIY = undefined;
		const _getKeyIgifdKo = () => { return _returnValuenQdqwIY };
		const _startVertexewWn77l = {
			"getKey": _getKeyIgifdKo
	}
		const _returnValue9XItJd = await bellmanFord(_graphhVeUB7k, _startVertexewWn77l)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedLODvx8X = false;
		const _graphThEG9ss = new Graph(_isDirectedLODvx8X)
		const _returnValueTWLDPjK = await _graphThEG9ss.getAllVertices()
		const _returnValuehHoCtN = "5WN1Ss9un4cntkaVFRKSDrrN4QNQJcH6lJKU2w8kbbW";
		const _getKeyJi59V6 = () => { return _returnValuehHoCtN };
		const _startVertexRYSFcJK = {
			"getKey": _getKeyJi59V6
	}
		const _returnValuest3o6d = await bellmanFord(_graphThEG9ss, _startVertexRYSFcJK)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedVFJawUQ = true;
		const _graphI7w05S0 = new Graph(_isDirectedVFJawUQ)
		const _returnValueVUTKt40 = await _graphI7w05S0.getAllEdges()
		const _returnValuenXGZBcF = await _graphI7w05S0.getAllVertices()
		const _returnValueFxLmjPd = await _graphI7w05S0.getAllEdges()
		const _returnValueFhtF5h = false;
		const _getKeyc8PJ24S = () => { return _returnValueFhtF5h };
		const _newVertexQEg9WNp = {
			"getKey": _getKeyc8PJ24S
	}
		const _returnValuefuDGlRv = await _graphI7w05S0.addVertex(_newVertexQEg9WNp)
		const _returnValueVhV9e5E = false;
		const _valuefWBgT5M = () => { return _returnValueVhV9e5E };
		const _returnValueEkdPYPC = "NOkAnE7UrJOuh73Iy1V1KINO3skCGsx8ZgsA1wGiRNfcpKhB15byLPPjozpL75lFtpcjOSB1IXPaFLNAIiDmIJfPC9qe9uQ8H2d";
		const _keyCallbackq1CHcDi = () => { return _returnValueEkdPYPC };
		const _startVertexQFkvOo9 = new DisjointSetItem(_valuefWBgT5M, _keyCallbackq1CHcDi)
		const _returnValuei7ad6jw = await _startVertexQFkvOo9.isRoot()
		const _valueAiXF9q7 = {
		
	}
		const _returnValueI5MkU5B = true;
		const _keyCallbackRdMXYbz = () => { return _returnValueI5MkU5B };
		const _parentItemPBTY9OL = new DisjointSetItem(_valueAiXF9q7, _keyCallbackRdMXYbz)
		const _parentItemXw8Km6 = null;
		const _forceSettingParentChildhtC9llb = false;
		const _returnValueXJL0DO = await _parentItemPBTY9OL.setParent(_parentItemXw8Km6, _forceSettingParentChildhtC9llb)
		const _returnValueTYyjDBZ = await _parentItemPBTY9OL.getRoot()
		const _returnValuedKydSqZ = await _parentItemPBTY9OL.isRoot()
		const _forceSettingParentChildR0DmLZ = true;
		const _returnValuenoZMSV1 = await _startVertexQFkvOo9.setParent(_parentItemPBTY9OL, _forceSettingParentChildR0DmLZ)
		const _returnValueLNKkO7 = await _startVertexQFkvOo9.getKey()
		const _returnValuev33aKD = await _startVertexQFkvOo9.getRoot()
		const _returnValueafGHpcW = await _startVertexQFkvOo9.getRank()
		const _returnValueTuH6kvF = await bellmanFord(_graphI7w05S0, _startVertexQFkvOo9)
	});
})