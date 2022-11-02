export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueKIUwe1 = null;
		const _getAllVerticest7WGw9j = () => { return _returnValueKIUwe1 };
		const _graphPeyR7j2 = {
			"getAllVertices": _getAllVerticest7WGw9j
	}
		const _returnValuezpWh3SP = await articulationPoints(_graphPeyR7j2)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedKiisW1V = false;
		const _graphY8Mm43m = new Graph(_isDirectedKiisW1V)
		const _returnValueMqBXx0B = -0.5891681320319613;
		const _getKeyb1LYgb8 = () => { return _returnValueMqBXx0B };
		const _newVertexupwidvP = {
			"getKey": _getKeyb1LYgb8
	}
		const _returnValueuWhRs06 = await _graphY8Mm43m.addVertex(_newVertexupwidvP)
		const _returnValuehv6c8Ud = await _graphY8Mm43m.getAllEdges()
		const _returnValueUOnVyMR = await articulationPoints(_graphY8Mm43m)
	});
})