export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueRoyye30 = -2.4718159483898514;
		const _getAllVerticesRqy47WY = () => { return _returnValueRoyye30 };
		const _graphd3H0tv = {
			"getAllVertices": _getAllVerticesRqy47WY
	}
		const _returnValueO3s7Rd = await articulationPoints(_graphd3H0tv)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedt0m7vix = false;
		const _graphvTpKEJf = new Graph(_isDirectedt0m7vix)
		const _returnValueUet1iyo = true;
		const _getKeyLiuOltL = () => { return _returnValueUet1iyo };
		const _newVertexETW0k0p = {
			"getKey": _getKeyLiuOltL
	}
		const _returnValueiS1zDwC = await _graphvTpKEJf.addVertex(_newVertexETW0k0p)
		const _returnValueYoGIYBz = await _graphvTpKEJf.toString()
		const _returnValuejmH6pPI = await _graphvTpKEJf.getVerticesIndices()
		const _returnValuetHmOd7b = await articulationPoints(_graphvTpKEJf)
	});
})