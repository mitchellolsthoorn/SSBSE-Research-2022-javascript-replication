export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueFrFbkF = false;
		const _returnValuenBEUSaZ = () => { return _returnValueFrFbkF };
		const _getAllVerticeszHnAmlr = () => { return _returnValuenBEUSaZ };
		const _returnValueO6o1vOH = undefined;
		const _findEdgeNqIQ3h = () => { return _returnValueO6o1vOH };
		const _graphP4siklK = {
			"getAllVertices": _getAllVerticeszHnAmlr,
		"findEdge": _findEdgeNqIQ3h
	}
		const _returnValueYwcIlz7 = undefined;
		const _getKeytDTzgXv = () => { return _returnValueYwcIlz7 };
		const _startVertexiI154f8 = {
			"getKey": _getKeytDTzgXv
	}
		const _returnValueFSBhlcH = await dijkstra(_graphP4siklK, _startVertexiI154f8)
	});

	it('test for dijkstra', async () => {
		const _returnValueykIEZEb = []
		const _getAllVerticesFjuy3d0 = () => { return _returnValueykIEZEb };
		const _returnValuePqlVI3h = -4.711625907667481;
		const _findEdgeJPLBtJV = () => { return _returnValuePqlVI3h };
		const _graphEoQTM4A = {
			"getAllVertices": _getAllVerticesFjuy3d0,
		"findEdge": _findEdgeJPLBtJV
	}
		const _returnValuesKgI1Ol = {
		
	}
		const _getKeyPbIJAuQ = () => { return _returnValuesKgI1Ol };
		const _startVertexEjMb811 = {
			"getKey": _getKeyPbIJAuQ
	}
		const _returnValueGoZLEuN = await dijkstra(_graphEoQTM4A, _startVertexEjMb811)
	});
})