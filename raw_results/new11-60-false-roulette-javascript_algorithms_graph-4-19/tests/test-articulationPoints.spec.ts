export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueELBZ6S2 = undefined;
		const _graphHbnaG6 = () => { return _returnValueELBZ6S2 };
		const _returnValueronVU49 = await articulationPoints(_graphHbnaG6)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedxhkbWng = true;
		const _graphwRc8Mrd = new Graph(_isDirectedxhkbWng)
		const _returnValuePmjOqp = await _graphwRc8Mrd.getAllEdges()
		const _returnValuewfRJoUD = undefined;
		const _getKeyHBh52d5 = () => { return _returnValuewfRJoUD };
		const _newVertexK1t0kt0 = {
			"getKey": _getKeyHBh52d5
	}
		const _returnValues4uTAFi = await _graphwRc8Mrd.addVertex(_newVertexK1t0kt0)
		const _returnValueMuRr9iR = await articulationPoints(_graphwRc8Mrd)
	});
})