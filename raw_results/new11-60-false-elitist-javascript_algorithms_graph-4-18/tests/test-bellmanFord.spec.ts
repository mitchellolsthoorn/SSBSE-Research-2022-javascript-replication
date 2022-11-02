export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueEZp9XLN = true;
		const _getAllVerticeswWApHmx = () => { return _returnValueEZp9XLN };
		const _returnValuewU3Ost2 = "QXMNTitAtByF65JUtcl3xBcGtE5vkF94F";
		const _getVertexByKeylccdlY = () => { return _returnValuewU3Ost2 };
		const _returnValuetN37dDL = false;
		const _getNeighborssjUR8O = () => { return _returnValuetN37dDL };
		const _arrayValueVERf5bx = undefined;
		const _arrayValuecY61wp8 = false;
		const _arrayValueh6afdJp = null;
		const _arrayValueFeqcqlP = {
		
	}
		const _returnValueXKlclXA = [_arrayValueVERf5bx, _arrayValuecY61wp8, _arrayValueh6afdJp, _arrayValueFeqcqlP]
		const _findEdgeXIQVdHm = () => { return _returnValueXKlclXA };
		const _graphGGFAj2 = {
			"getAllVertices": _getAllVerticeswWApHmx,
		"getVertexByKey": _getVertexByKeylccdlY,
		"getNeighbors": _getNeighborssjUR8O,
		"findEdge": _findEdgeXIQVdHm
	}
		const _returnValuekMf4ehl = {
		
	}
		const _getKeyEEVUdVn = () => { return _returnValuekMf4ehl };
		const _startVertexIEN0LLg = {
			"getKey": _getKeyEEVUdVn
	}
		const _returnValueVB9CtEF = await bellmanFord(_graphGGFAj2, _startVertexIEN0LLg)
	});

	it('test for bellmanFord', async () => {
		const _returnValueUWaYc1i = []
		const _getAllVerticesERHMvi0 = () => { return _returnValueUWaYc1i };
		const _returnValuee1ZrjT = "14wUXkrjhKRajDK5DgkNsteibiQkKNkJ7MjJk";
		const _returnValuedkPD7Dg = () => { return _returnValuee1ZrjT };
		const _getVertexByKeyttnRDy1 = () => { return _returnValuedkPD7Dg };
		const _returnValueCBbeHn = 2.9177419285273594;
		const _getNeighborsRZWLRuM = () => { return _returnValueCBbeHn };
		const _returnValuevrWxnYO = {
		
	}
		const _findEdgeySAzgd = () => { return _returnValuevrWxnYO };
		const _graphqTP1umA = {
			"getAllVertices": _getAllVerticesERHMvi0,
		"getVertexByKey": _getVertexByKeyttnRDy1,
		"getNeighbors": _getNeighborsRZWLRuM,
		"findEdge": _findEdgeySAzgd
	}
		const _returnValueHRJL63D = null;
		const _getKeyCK6MaG = () => { return _returnValueHRJL63D };
		const _startVertexFkAXl8B = {
			"getKey": _getKeyCK6MaG
	}
		const _returnValueFooW4T1 = await bellmanFord(_graphqTP1umA, _startVertexFkAXl8B)
	});
})