export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _grapheYXJkjU = -5.051904273392889;
		const _returnValueFNCelyQ = await articulationPoints(_grapheYXJkjU)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedFcCar1g = false;
		const _graphKu7C9BN = new Graph(_isDirectedFcCar1g)
		const _returnValueChfxrR = null;
		const _getKey7LCFcZ = () => { return _returnValueChfxrR };
		const _newVertexqbq3it = {
			"getKey": _getKey7LCFcZ
	}
		const _returnValuetXEz189 = await _graphKu7C9BN.addVertex(_newVertexqbq3it)
		const _returnValueo8YiYvk = await _graphKu7C9BN.getWeight()
		const _returnValueAKZQ3Yu = await _graphKu7C9BN.getAllEdges()
		const _returnValuek3vTGlw = await articulationPoints(_graphKu7C9BN)
	});
})