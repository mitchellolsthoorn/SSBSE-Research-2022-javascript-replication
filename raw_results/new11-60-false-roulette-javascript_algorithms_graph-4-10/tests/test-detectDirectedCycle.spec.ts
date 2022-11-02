export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _arrayValuemMnE6m8 = 8.189432293758454;
		const _arrayValuel51oDrD = {
		
	}
		const _graph6pxQXJ = [_arrayValuemMnE6m8, _arrayValuel51oDrD]
		const _returnValueLqxeKpH = await detectDirectedCycle(_graph6pxQXJ)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedTrJs5CG = false;
		const _graphySMVh9D = new Graph(_isDirectedTrJs5CG)
		const _returnValuecM24JKY = await _graphySMVh9D.getAllEdges()
		const _returnValuecHXlKLU = await detectDirectedCycle(_graphySMVh9D)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectednTcVnNX = true;
		const _graphmHrxau = new Graph(_isDirectednTcVnNX)
		const _returnValuesnp5qW = await _graphmHrxau.getVerticesIndices()
		const _returnValueHQCkbKm = await _graphmHrxau.getVerticesIndices()
		const _returnValuee4eyX9w = "znv8FPhDxpzR4baKm8yhsN6eHEBudCF4oYEDXs82xmLtMeJckPyMt6TuBibFmsb6Kn6";
		const _getKeyJzDaTzm = () => { return _returnValuee4eyX9w };
		const _newVertexNMKPUko = {
			"getKey": _getKeyJzDaTzm
	}
		const _returnValuelDaYC73 = await _graphmHrxau.addVertex(_newVertexNMKPUko)
		const _returnValueICjrUJ = await _graphmHrxau.reverse()
		const _returnValueRcNYH0U = await detectDirectedCycle(_graphmHrxau)
	});
})