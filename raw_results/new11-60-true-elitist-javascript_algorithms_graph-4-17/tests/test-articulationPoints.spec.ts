export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueByfOXdE = -3.3180272734227403;
		const _getAllVerticesuMR57vV = () => { return _returnValueByfOXdE };
		const _graphuNvTvqJ = {
			"getAllVertices": _getAllVerticesuMR57vV
	}
		const _returnValueR7mhiH0 = await articulationPoints(_graphuNvTvqJ)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedMykO7k = false;
		const _graphN6LRXW4 = new Graph(_isDirectedMykO7k)
		const _returnValueRJJImJg = true;
		const _getKeyrpEwMzc = () => { return _returnValueRJJImJg };
		const _newVertexhHZgDxD = {
			"getKey": _getKeyrpEwMzc
	}
		const _returnValueYxrkVKQ = await _graphN6LRXW4.addVertex(_newVertexhHZgDxD)
		const _returnValueXgaRk2z = await _graphN6LRXW4.getAllVertices()
		const _returnValueg1A5lGP = await articulationPoints(_graphN6LRXW4)
	});
})