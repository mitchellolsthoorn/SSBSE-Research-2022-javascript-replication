export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValuegSh5wbd = false;
		const _graphB3gjcdq = () => { return _returnValuegSh5wbd };
		const _returnValueFJSpLfs = await graphBridges(_graphB3gjcdq)
	});

	it('test for graphBridges', async () => {
		const _isDirectedaRptQ89 = false;
		const _graphx22MPAI = new Graph(_isDirectedaRptQ89)
		const _returnValueiRMOSn = 4.8022762659973885;
		const _getKeyvZ7GwXM = () => { return _returnValueiRMOSn };
		const _newVertexLXgt2E = {
			"getKey": _getKeyvZ7GwXM
	}
		const _returnValueBG0MUKC = await _graphx22MPAI.addVertex(_newVertexLXgt2E)
		const _returnValuejTJ4VNp = await _graphx22MPAI.reverse()
		const _returnValueGTnfnOu = await _graphx22MPAI.toString()
		const _returnValueCmEdhUR = await graphBridges(_graphx22MPAI)
	});
})