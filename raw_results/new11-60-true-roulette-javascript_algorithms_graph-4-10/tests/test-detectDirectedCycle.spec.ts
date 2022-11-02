export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValuePG4Qsts = undefined;
		const _arrayValueJt9sBYi = () => { return _returnValuePG4Qsts };
		const _arrayValueo0b8iXX = undefined;
		const _graphEbmP0nq = [_arrayValueJt9sBYi, _arrayValueo0b8iXX]
		const _returnValueQgasPWr = await detectDirectedCycle(_graphEbmP0nq)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedoPhkLN = true;
		const _graphFs97Y2b = new Graph(_isDirectedoPhkLN)
		const _returnValueQGFXQbE = await _graphFs97Y2b.getAllVertices()
		const _returnValuerKdl7n8 = await _graphFs97Y2b.reverse()
		const _returnValueYC1g0Tw = await detectDirectedCycle(_graphFs97Y2b)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedHCZUUGy = true;
		const _graphn5nEy2x = new Graph(_isDirectedHCZUUGy)
		const _returnValueAaEzoBT = null;
		const _getKeyHBFItFB = () => { return _returnValueAaEzoBT };
		const _newVertexBFxQPN = {
			"getKey": _getKeyHBFItFB
	}
		const _returnValueMBM60Lr = await _graphn5nEy2x.addVertex(_newVertexBFxQPN)
		const _returnValuee8oHp2w = await detectDirectedCycle(_graphn5nEy2x)
	});
})