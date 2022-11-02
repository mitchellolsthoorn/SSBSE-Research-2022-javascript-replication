export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _getAllVerticesrWZMXmR = undefined;
		const _graphSRPQj0k = {
			"getAllVertices": _getAllVerticesrWZMXmR
	}
		const _returnValuehCLOijI = await articulationPoints(_graphSRPQj0k)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedf337fi = false;
		const _graphOsurBMk = new Graph(_isDirectedf337fi)
		const _returnValueA7I86WV = await _graphOsurBMk.getAllEdges()
		const _returnValueUutbNb7 = "KBDykkA5fbeWf";
		const _getNeighbors9xYihX = () => { return _returnValueUutbNb7 };
		const _vertexK0iZZKI = {
			"getNeighbors": _getNeighbors9xYihX
	}
		const _returnValueXoa1Png = await _graphOsurBMk.getNeighbors(_vertexK0iZZKI)
		const _returnValueNeiN8R = await _graphOsurBMk.getWeight()
		const _returnValuepvkfgy6 = 8.61408318158021;
		const _getKeyjDpwJn0 = () => { return _returnValuepvkfgy6 };
		const _newVertexBcpBGzr = {
			"getKey": _getKeyjDpwJn0
	}
		const _returnValuehJK2RuD = await _graphOsurBMk.addVertex(_newVertexBcpBGzr)
		const _returnValuelLSZCDt = await articulationPoints(_graphOsurBMk)
	});
})