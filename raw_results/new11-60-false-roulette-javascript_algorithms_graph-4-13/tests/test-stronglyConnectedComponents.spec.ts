export {}
import Comparator from "../../benchmark/large_projects/javascript-algorithms/src/utils/comparator/Comparator.js";
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _compareFunctionox28mRv = null;
		const _graphn2tcat = new Comparator(_compareFunctionox28mRv)
		const _returnValueKKp7z5b = null;
		const _returnValuelLl8429 = () => { return _returnValueKKp7z5b };
		const _aEANzr9b = () => { return _returnValuelLl8429 };
		const _bqFzd75S = {
		
	}
		const _returnValueLsUohH0 = await _graphn2tcat.greaterThan(_aEANzr9b, _bqFzd75S)
		const _aVmQpTEi = true;
		const _bv78Lq7G = false;
		const _returnValueoCHZa9D = await _graphn2tcat.greaterThan(_aVmQpTEi, _bv78Lq7G)
		const _arrayValuelvjg5HS = false;
		const _aXIS6k7 = [_arrayValuelvjg5HS]
		const _bMUcJk6G = "tJhCnZg5";
		const _returnValueYuhfrGK = await _graphn2tcat.lessThan(_aXIS6k7, _bMUcJk6G)
		const _apU8wgFr = false;
		const _returnValueOcsNDou = "ctEGAIYEa7lSNWXiprJXmlR3qVkq7qwOzco6BF66tKPOVxgakJ2VvX59JFX69g7OCFnoCFWQd9ebklfOXOtdEcDn";
		const _bHHmIjdO = () => { return _returnValueOcsNDou };
		const _returnValueMJSVwJG = await _graphn2tcat.lessThan(_apU8wgFr, _bHHmIjdO)
		const _returnValueJKOkBEm = await stronglyConnectedComponents(_graphn2tcat)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedF9CHhEv = false;
		const _graphWdub2pc = new Graph(_isDirectedF9CHhEv)
		const _returnValueM2YQWh8 = await _graphWdub2pc.getAllEdges()
		const _vertexKeyG7ory0s = -6.578098127765179;
		const _returnValueSs1VvVn = await _graphWdub2pc.getVertexByKey(_vertexKeyG7ory0s)
		const _returnValuekcgXB3h = await _graphWdub2pc.getVerticesIndices()
		const _returnValuejR5YVOQ = await _graphWdub2pc.reverse()
		const _returnValuenO1YBMU = await stronglyConnectedComponents(_graphWdub2pc)
	});
})