export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueZ5fJu0d = null;
		const _getAllVerticesqvSzvLs = () => { return _returnValueZ5fJu0d };
		const _graphAVU8dEA = {
			"getAllVertices": _getAllVerticesqvSzvLs
	}
		const _returnValueXSP9vK1 = await articulationPoints(_graphAVU8dEA)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedwsCR7bZ = undefined;
		const _graphpow0rwp = new Graph(_isDirectedwsCR7bZ)
		const _returnValueZFtH8Db = undefined;
		const _getKeyYHms5Ug = () => { return _returnValueZFtH8Db };
		const _newVertex5ASBcB = {
			"getKey": _getKeyYHms5Ug
	}
		const _returnValueKvh7y5D = await _graphpow0rwp.addVertex(_newVertex5ASBcB)
		const _returnValueFIA1BaD = await _graphpow0rwp.reverse()
		const _returnValueX59N3V2 = await _graphpow0rwp.reverse()
		const _returnValueRWCwgVg = await _graphpow0rwp.getVerticesIndices()
		const _returnValueF5UYqo1 = await articulationPoints(_graphpow0rwp)
	});
})