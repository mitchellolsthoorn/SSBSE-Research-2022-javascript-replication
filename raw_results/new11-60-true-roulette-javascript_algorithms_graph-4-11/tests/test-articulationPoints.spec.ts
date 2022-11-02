export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _graphdIQzGCW = "phGLDN4c9vqS6CGDVxPUesK16NhFi8BBWTMUbbXgx8wximpa2vw7QNbSKobzxJN7Ye7DYrHVEPPTirydYT4SyUrJvoTdZL";
		const _returnValueMC7IHN = await articulationPoints(_graphdIQzGCW)
	});

	it('test for articulationPoints', async () => {
		const _isDirecteddpRsrdN = false;
		const _graphAxVd8bO = new Graph(_isDirecteddpRsrdN)
		const _returnValueO37PUSc = await _graphAxVd8bO.getVerticesIndices()
		const _returnValueLL99ghb = null;
		const _getKeyYu3oZh = () => { return _returnValueLL99ghb };
		const _newVertexz7basvj = {
			"getKey": _getKeyYu3oZh
	}
		const _returnValuebjR4kDf = await _graphAxVd8bO.addVertex(_newVertexz7basvj)
		const _returnValueYX5bY59 = await _graphAxVd8bO.toString()
		const _returnValueQfm6Hw = await articulationPoints(_graphAxVd8bO)
	});
})