export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _isDirectedSZoV0K = true;
		const _graphu0PaIgD = new Graph(_isDirectedSZoV0K)
		const _returnValuePLpjBKI = await _graphu0PaIgD.getAdjacencyMatrix()
		const _returnValueFim8H2w = await bfTravellingSalesman(_graphu0PaIgD)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedAb1g9q = false;
		const _graphOwutf1K = new Graph(_isDirectedAb1g9q)
		const _returnValueesbKUa = await _graphOwutf1K.toString()
		const _returnValueS3ZEVm = "qJ4oxx4GGUjQO1wnaY";
		const _returnValueRbC4bVq = () => { return _returnValueS3ZEVm };
		const _getKeyxhag2M5 = () => { return _returnValueRbC4bVq };
		const _newVertexMifdMHr = {
			"getKey": _getKeyxhag2M5
	}
		const _returnValuekVpCWOv = await _graphOwutf1K.addVertex(_newVertexMifdMHr)
		const _returnValueIRypBpp = await bfTravellingSalesman(_graphOwutf1K)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedFCLVnWR = undefined;
		const _graphU9mYYO2 = new Graph(_isDirectedFCLVnWR)
		const _valuez0TZKx7 = null;
		const _newVertexWHAWK1Y = new GraphVertex(_valuez0TZKx7)
		const _returnValuefaYBIVH = true;
		const _callbackC6CJYxa = () => { return _returnValuefaYBIVH };
		const _returnValuen4KdVWx = await _newVertexWHAWK1Y.toString(_callbackC6CJYxa)
		const _returnValuewxnSCI = await _graphU9mYYO2.addVertex(_newVertexWHAWK1Y)
		const _returnValueUf9ZGJ2 = await _graphU9mYYO2.getAllVertices()
		const _returnValuemy5kDDA = await bfTravellingSalesman(_graphU9mYYO2)
	});
})