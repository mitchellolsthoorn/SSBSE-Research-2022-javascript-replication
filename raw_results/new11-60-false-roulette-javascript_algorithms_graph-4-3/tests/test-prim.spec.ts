export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _graphFQW6TNY = "nbOGbolws8bydQ2RRmfloy5s9M4r4d2SVqRlowcGADRQNcU4F0Xd8v2khKD8o3CuDGzSA3b33TRLtRfFhKz5XdHBkVoxEXSb";
		const _returnValueexwpPq = await prim(_graphFQW6TNY)
	});

	it('test for prim', async () => {
		const _isDirectedESiBThT = "9tGKYj05AcSpBUT3pxjzfJ3BEisagsXuMjHPQ4vKAmhNIyH9gy2c3yIaAOCaY1RElz";
		const _getAllVerticesXG2I5Xo = true;
		const _graphWjfKIGL = {
			"isDirected": _isDirectedESiBThT,
		"getAllVertices": _getAllVerticesXG2I5Xo
	}
		const _returnValuedu7Uw4 = await prim(_graphWjfKIGL)
	});

	it('test for prim', async () => {
		const _isDirectedudCLbBz = false;
		const _graphk3JdvNN = new Graph(_isDirectedudCLbBz)
		const _returnValueosfwIE4 = await _graphk3JdvNN.getWeight()
		const _returnValuepDKky3N = null;
		const _getKeynG5jU62 = () => { return _returnValuepDKky3N };
		const _newVertexHvrx2u = {
			"getKey": _getKeynG5jU62
	}
		const _returnValueLHwwECK = await _graphk3JdvNN.addVertex(_newVertexHvrx2u)
		const _returnValueXN6T5ny = await _graphk3JdvNN.toString()
		const _returnValueeu2gauy = await prim(_graphk3JdvNN)
	});
})