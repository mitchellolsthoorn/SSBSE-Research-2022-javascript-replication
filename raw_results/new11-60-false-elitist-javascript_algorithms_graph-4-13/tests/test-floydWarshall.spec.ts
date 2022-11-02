export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueyuIeIy = "FgfnA4F7ng5RKVg4i5HYPqFD02jOElkAB69UV60fsIdHbuVz2MgbPnJRTJ9bgBt5CpFsCpjngXXSehpXJF";
		const _getAllVerticesz8n9mpr = () => { return _returnValueyuIeIy };
		const _returnValuezzXZdrr = undefined;
		const _findEdgeEuVieOR = () => { return _returnValuezzXZdrr };
		const _graphXjmaIYt = {
			"getAllVertices": _getAllVerticesz8n9mpr,
		"findEdge": _findEdgeEuVieOR
	}
		const _returnValueJWzrLIj = await floydWarshall(_graphXjmaIYt)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuewgysDIe = null;
		const _arrayValuewjrIjIx = []
		const _arrayValuePN1N9u8 = 6.218650142917252;
		const _arrayValueFVB2t5r = "LdHHqvvvG";
		const _arrayValueOTgt7yS = [_arrayValuePN1N9u8, _arrayValueFVB2t5r]
		const _returnValuesEZCNg4 = [_arrayValuewgysDIe, _arrayValuewjrIjIx, _arrayValueOTgt7yS]
		const _getAllVerticesVOUh6Zq = () => { return _returnValuesEZCNg4 };
		const _returnValuesoVtGzB = false;
		const _findEdgeG5ORKoq = () => { return _returnValuesoVtGzB };
		const _graphvdhVHt = {
			"getAllVertices": _getAllVerticesVOUh6Zq,
		"findEdge": _findEdgeG5ORKoq
	}
		const _returnValuePJZFbLW = await floydWarshall(_graphvdhVHt)
	});
})