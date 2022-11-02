export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _isDirectedrFLi0Nx = false;
		const _graphIkIvzLo = new Graph(_isDirectedrFLi0Nx)
		const _returnValuevy9rPq2 = await _graphIkIvzLo.getAllVertices()
		const _vertexKeyL5xrchh = true;
		const _returnValueTZfJ4M = await _graphIkIvzLo.getVertexByKey(_vertexKeyL5xrchh)
		const _startVertexYSWOMug = false;
		const _originalCallbackssVq4ElU = undefined;
		const _returnValuerjV3lIZ = await breadthFirstSearch(_graphIkIvzLo, _startVertexYSWOMug, _originalCallbackssVq4ElU)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueeUV1Ux3 = {
		
	}
		const _arrayValuebfrRCH = 9.898160702974764;
		const _arrayValueHVPBukl = undefined;
		const _arrayValueXGawSP = false;
		const _returnValueu64F6iL = [_arrayValueeUV1Ux3, _arrayValuebfrRCH, _arrayValueHVPBukl, _arrayValueXGawSP]
		const _getNeighborsD7Zj2CR = () => { return _returnValueu64F6iL };
		const _graph3Iw1jf = {
			"getNeighbors": _getNeighborsD7Zj2CR
	}
		const _startVertexaY3mzUL = undefined;
		const _originalCallbacksCqhCtS = {
		
	}
		const _returnValue5a4pys = await breadthFirstSearch(_graph3Iw1jf, _startVertexaY3mzUL, _originalCallbacksCqhCtS)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueuD9it3y = "yIhiZ5BEO5cSFEVU5flKYVF";
		const _graphdEeUAlb = new GraphVertex(_valueuD9it3y)
		const _returnValuegW5J2L6 = await _graphdEeUAlb.getKey()
		const _returnValueGz2kSSZ = await _graphdEeUAlb.getDegree()
		const _returnValueIKNKhlY = await _graphdEeUAlb.getNeighbors()
		const _startVertexLIqKE45 = "thsEWCHOliTeVO5J8NBMuztcQFGxj77mwdqmiQK76e4XcbHnixy41lMYY";
		const _arrayValuewYnUkbB = []
		const _arrayValuen9iEpNQ = true;
		const _originalCallbacksoRxDkph = [_arrayValuewYnUkbB, _arrayValuen9iEpNQ]
		const _returnValuesxnExoq = await breadthFirstSearch(_graphdEeUAlb, _startVertexLIqKE45, _originalCallbacksoRxDkph)
	});
})