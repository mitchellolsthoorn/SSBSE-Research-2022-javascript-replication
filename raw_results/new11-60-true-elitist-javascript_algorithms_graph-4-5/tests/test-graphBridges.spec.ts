export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueq9I3Vb = null;
		const _graphXYq4xcj = () => { return _returnValueq9I3Vb };
		const _returnValuezXmwAyk = await graphBridges(_graphXYq4xcj)
	});

	it('test for graphBridges', async () => {
		const _isDirectedbIb2yex = true;
		const _graphgyBAipG = new Graph(_isDirectedbIb2yex)
		const _returnValueCsdBy1x = await _graphgyBAipG.toString()
		const _returnValueVjvOgZF = "cp3aVgedIvUYRMJEMNW7zPEwgLt04BorJXS11DRMWVGrm65AcTyYVxK1dr";
		const _getKeyo9vrxMw = () => { return _returnValueVjvOgZF };
		const _newVertexiMa3uXk = {
			"getKey": _getKeyo9vrxMw
	}
		const _returnValueMyc1DcP = await _graphgyBAipG.addVertex(_newVertexiMa3uXk)
		const _returnValueNtgnGC = await _graphgyBAipG.getAllEdges()
		const _returnValued9uQsPi = await graphBridges(_graphgyBAipG)
	});
})