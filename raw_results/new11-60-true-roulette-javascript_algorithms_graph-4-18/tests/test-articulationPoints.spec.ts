export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _isDirectedRMOmdi = "ncWbngDZgD8QDiuRPqSPDYtUgCkc";
		const _graphHwKI8cd = new Graph(_isDirectedRMOmdi)
		const _returnValueq1OeUki = await _graphHwKI8cd.getAllEdges()
		const _returnValueZP3Mtq = await articulationPoints(_graphHwKI8cd)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedFupc7S = true;
		const _graphB1r3Ar9 = new Graph(_isDirectedFupc7S)
		const _returnValueRGRD5Ie = await _graphB1r3Ar9.getWeight()
		const _returnValuevn2kiqg = await _graphB1r3Ar9.toString()
		const _returnValueIVL3YkD = 7.420316868022557;
		const _getKeyXYsI0Er = () => { return _returnValueIVL3YkD };
		const _newVertexCu3kJSY = {
			"getKey": _getKeyXYsI0Er
	}
		const _returnValueSjAJef6 = await _graphB1r3Ar9.addVertex(_newVertexCu3kJSY)
		const _returnValueIjXK0C3 = await articulationPoints(_graphB1r3Ar9)
	});
})