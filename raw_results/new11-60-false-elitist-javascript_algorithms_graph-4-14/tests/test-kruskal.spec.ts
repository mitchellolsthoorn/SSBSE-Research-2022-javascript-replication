export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedTQZZQ4 = null;
		const _returnValuewnt0GRZ = "yMrwhgNqzAZGJfCnvI8MhQPThRoP9N8Gg9yhr3XqB3hU4yEUjvA6pNlnlVs1ocv1uEoVg6iss89W9dgxQ9Hrs";
		const _returnValueVOmngej = () => { return _returnValuewnt0GRZ };
		const _getAllEdgesPnlOime = () => { return _returnValueVOmngej };
		const _returnValueyeHBwJA = undefined;
		const _getAllVerticesDI3gsG = () => { return _returnValueyeHBwJA };
		const _graphE7fyll0 = {
			"isDirected": _isDirectedTQZZQ4,
		"getAllEdges": _getAllEdgesPnlOime,
		"getAllVertices": _getAllVerticesDI3gsG
	}
		const _returnValueoWXkk9u = await kruskal(_graphE7fyll0)
	});

	it('test for kruskal', async () => {
		const _arrayValueFlchej = null;
		const _arrayValueit0xbFu = undefined;
		const _isDirectedfsG1WFy = [_arrayValueFlchej, _arrayValueit0xbFu]
		const _getAllEdgesZWFutk = null;
		const _returnValuedIS5jr = false;
		const _getAllVerticesuHqvi1g = () => { return _returnValuedIS5jr };
		const _graphbLRhXHv = {
			"isDirected": _isDirectedfsG1WFy,
		"getAllEdges": _getAllEdgesZWFutk,
		"getAllVertices": _getAllVerticesuHqvi1g
	}
		const _returnValuefYl90y7 = await kruskal(_graphbLRhXHv)
	});

	it('test for kruskal', async () => {
		const _isDirectedlj32Wg = false;
		const _returnValueYLvILwG = "iYuQ1AzRQGTPYAzCP2H11QKgpOp1QBhx4OgrVIZjxQrkUQWfQ3SFNWIqwEHJ2osbjUsqoQmu5TqdP";
		const _getAllEdgesoe0401A = () => { return _returnValueYLvILwG };
		const _arrayValueUVrR6sm = undefined;
		const _arrayValueCtOmXjl = 5.123089144916683;
		const _arrayValueldeplCc = undefined;
		const _returnValueyk89jmM = [_arrayValueUVrR6sm, _arrayValueCtOmXjl, _arrayValueldeplCc]
		const _getAllVerticesblrZ3R5 = () => { return _returnValueyk89jmM };
		const _graphZkLcrI = {
			"isDirected": _isDirectedlj32Wg,
		"getAllEdges": _getAllEdgesoe0401A,
		"getAllVertices": _getAllVerticesblrZ3R5
	}
		const _returnValueyhrOkkK = await kruskal(_graphZkLcrI)
	});
})