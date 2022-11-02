export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _graphLhuzRC = "oc1jQuGfSkBzqHbfKYmeS";
		const _returnValuewtIUfoz = await graphBridges(_graphLhuzRC)
	});

	it('test for graphBridges', async () => {
		const _isDirectedTMIEbB1 = true;
		const _graphvOc2FJJ = new Graph(_isDirectedTMIEbB1)
		const _returnValueDBgE92 = "BhcT1JYAIOhbioFFB1nVXvGUjWmshExXC6ag0iVLRwsLHrh7EXdOvemR2k8J5Bh9jzM11MUoV7Xr6mDFRCiYDPyOMX4SVr20";
		const _getKeySSpLwE6 = () => { return _returnValueDBgE92 };
		const _newVertexLSgl2qj = {
			"getKey": _getKeySSpLwE6
	}
		const _returnValueqKSpZxR = await _graphvOc2FJJ.addVertex(_newVertexLSgl2qj)
		const _returnValueFKsuo4h = await _graphvOc2FJJ.getWeight()
		const _returnValueTg6cUEq = await _graphvOc2FJJ.getVerticesIndices()
		const _returnValueyeuzo2E = await _graphvOc2FJJ.getAllVertices()
		const _returnValuelIxjUd6 = await graphBridges(_graphvOc2FJJ)
	});
})