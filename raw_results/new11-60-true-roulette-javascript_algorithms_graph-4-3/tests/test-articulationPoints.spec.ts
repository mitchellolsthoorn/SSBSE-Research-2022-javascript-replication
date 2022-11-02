export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuevI17Q11 = true;
		const _getAllVerticesoK5BvhA = () => { return _returnValuevI17Q11 };
		const _graphmTB7HBM = {
			"getAllVertices": _getAllVerticesoK5BvhA
	}
		const _returnValueYVDvUzx = await articulationPoints(_graphmTB7HBM)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedldTm0BV = true;
		const _graph2OTpTp = new Graph(_isDirectedldTm0BV)
		const _returnValueT9zx0eC = "pxSTzzQqhkHKaa1TwXVDTk77zone";
		const _getKeyAXvxoTs = () => { return _returnValueT9zx0eC };
		const _newVertex4LaexS = {
			"getKey": _getKeyAXvxoTs
	}
		const _returnValueQZ7oWbp = await _graph2OTpTp.addVertex(_newVertex4LaexS)
		const _returnValuejC6boLc = await _graph2OTpTp.getVerticesIndices()
		const _returnValuer2M7m2L = await _graph2OTpTp.getAllEdges()
		const _returnValueAHVyCgC = await articulationPoints(_graph2OTpTp)
	});
})