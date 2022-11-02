export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _arrayValueOkygzxV = undefined;
		const _arrayValueFnf0orj = null;
		const _returnValuegP5TE1M = undefined;
		const _arrayValueXrEpECe = () => { return _returnValuegP5TE1M };
		const _arrayValueoKTYfGt = null;
		const _graphmPLsTYt = [_arrayValueOkygzxV, _arrayValueFnf0orj, _arrayValueXrEpECe, _arrayValueoKTYfGt]
		const _returnValuee6lExe1 = await detectDirectedCycle(_graphmPLsTYt)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedl3AeIKU = false;
		const _graphqLUatEa = new Graph(_isDirectedl3AeIKU)
		const _returnValueLfnEdIu = await _graphqLUatEa.toString()
		const _returnValueOlH1yL = await _graphqLUatEa.getVerticesIndices()
		const _returnValuetUZgb4o = await _graphqLUatEa.getAdjacencyMatrix()
		const _returnValueHf3vyae = await _graphqLUatEa.getAllEdges()
		const _returnValueqKbUaV = await detectDirectedCycle(_graphqLUatEa)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedmLFmUJR = undefined;
		const _graphrmLQI2g = new Graph(_isDirectedmLFmUJR)
		const _returnValuewTEI9Zb = await _graphrmLQI2g.getWeight()
		const _returnValuegbwEp6 = 4.454981812600227;
		const _getKeyrmeNeRY = () => { return _returnValuegbwEp6 };
		const _newVertexDcWrvQl = {
			"getKey": _getKeyrmeNeRY
	}
		const _returnValueH1Lf15G = await _graphrmLQI2g.addVertex(_newVertexDcWrvQl)
		const _returnValuekg2bWSB = await detectDirectedCycle(_graphrmLQI2g)
	});
})