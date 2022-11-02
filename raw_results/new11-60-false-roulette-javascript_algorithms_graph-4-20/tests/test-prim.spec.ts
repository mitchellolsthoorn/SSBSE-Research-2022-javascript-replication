export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _returnValueWE2ifB = -4.127935970012693;
		const _isDirectedRruznbs = () => { return _returnValueWE2ifB };
		const _returnValuenpVgnTU = null;
		const _getAllVerticessVlmgyP = () => { return _returnValuenpVgnTU };
		const _graphJMt0qsM = {
			"isDirected": _isDirectedRruznbs,
		"getAllVertices": _getAllVerticessVlmgyP
	}
		const _returnValueUf1b30I = await prim(_graphJMt0qsM)
	});

	it('test for prim', async () => {
		const _isDirectedkjSSJn = false;
		const _graphDP2vQCN = new Graph(_isDirectedkjSSJn)
		const _returnValueWLpErbt = await _graphDP2vQCN.getAdjacencyMatrix()
		const _arrayValuektCPi2N = null;
		const _arrayValueGA1J8kd = false;
		const _arrayValueA39PTLU = -1.36741907231292;
		const _returnValuesTgYcjW = [_arrayValuektCPi2N, _arrayValueGA1J8kd, _arrayValueA39PTLU]
		const _getKeyEkXHGuz = () => { return _returnValuesTgYcjW };
		const _newVertexlQPrP0 = {
			"getKey": _getKeyEkXHGuz
	}
		const _returnValuePf05GBC = await _graphDP2vQCN.addVertex(_newVertexlQPrP0)
		const _returnValueCaMJPIN = await _graphDP2vQCN.getWeight()
		const _returnValueogDuJbE = await prim(_graphDP2vQCN)
	});
})