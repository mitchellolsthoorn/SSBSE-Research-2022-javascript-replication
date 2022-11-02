export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _graphKpuDLyb = "8KoaaMWHwpLrczXuWEzlsm6OPesxW9K4ukcmndubqGt9VEaoNFqNNi7pIC3UyA";
		const _returnValuepOsIZ7T = await prim(_graphKpuDLyb)
	});

	it('test for prim', async () => {
		const _isDirectedq9ctOl = true;
		const _graphEyiSjHr = new Graph(_isDirectedq9ctOl)
		const _returnValueKdHGDed = await _graphEyiSjHr.getAllVertices()
		const _vertexKeyIXEKKz = -2.7621656430895456;
		const _returnValueVKSialA = await _graphEyiSjHr.getVertexByKey(_vertexKeyIXEKKz)
		const _returnValueSq6V2tq = await _graphEyiSjHr.getWeight()
		const _returnValuemSA63ji = await prim(_graphEyiSjHr)
	});

	it('test for prim', async () => {
		const _isDirectedwDlTEks = false;
		const _graphGSXp8lE = new Graph(_isDirectedwDlTEks)
		const _returnValuecPExuYr = await _graphGSXp8lE.getAllVertices()
		const _returnValueXYCYxX3 = await _graphGSXp8lE.getAllEdges()
		const _returnValueGFHkaFl = null;
		const _getKeydBPY7DV = () => { return _returnValueGFHkaFl };
		const _newVertexAVOA9U = {
			"getKey": _getKeydBPY7DV
	}
		const _returnValueqVln1Tl = await _graphGSXp8lE.addVertex(_newVertexAVOA9U)
		const _returnValuewATc4x7 = await prim(_graphGSXp8lE)
	});
})