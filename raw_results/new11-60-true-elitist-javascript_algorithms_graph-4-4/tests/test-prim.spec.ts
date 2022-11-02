export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedKqzdUTH = -4.2362762356652786;
		const _returnValuenK3vLqg = undefined;
		const _getAllVerticesKObcmic = () => { return _returnValuenK3vLqg };
		const _graphP1A9hFz = {
			"isDirected": _isDirectedKqzdUTH,
		"getAllVertices": _getAllVerticesKObcmic
	}
		const _returnValuePgdtPUp = await prim(_graphP1A9hFz)
	});

	it('test for prim', async () => {
		const _isDirectedhi9p978 = false;
		const _graphG7l2jr = new Graph(_isDirectedhi9p978)
		const _returnValueed0UzG8 = await _graphG7l2jr.reverse()
		const _returnValuetP3RHjD = true;
		const _getKeyk0qY7s5 = () => { return _returnValuetP3RHjD };
		const _newVertexMXLUZzZ = {
			"getKey": _getKeyk0qY7s5
	}
		const _returnValuec6XSmGd = await _graphG7l2jr.addVertex(_newVertexMXLUZzZ)
		const _returnValueRCbyhV = await prim(_graphG7l2jr)
	});
})