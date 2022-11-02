export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueSAYhQtf = null;
		const _reverseAoZV6Qg = () => { return _returnValueSAYhQtf };
		const _graphmHq27sj = {
			"reverse": _reverseAoZV6Qg
	}
		const _returnValueJA6BzS = await stronglyConnectedComponents(_graphmHq27sj)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedWp21ru = true;
		const _graphWcoABwv = new Graph(_isDirectedWp21ru)
		const _vertexKeyTwJ1o0X = -5.9126462891729865;
		const _returnValuezS1PL17 = await _graphWcoABwv.getVertexByKey(_vertexKeyTwJ1o0X)
		const _returnValueZC86Dxb = await stronglyConnectedComponents(_graphWcoABwv)
	});
})