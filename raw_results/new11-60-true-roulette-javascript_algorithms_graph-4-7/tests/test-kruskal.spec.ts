export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _arrayValueohk4C0C = {
		
	}
		const _arrayValuee83khxD = -8.071174111559861;
		const _arrayValuentZLL1k = undefined;
		const _returnValueUxSm1R = [_arrayValuee83khxD, _arrayValuentZLL1k]
		const _arrayValueZU6AsrQ = () => { return _returnValueUxSm1R };
		const _arrayValueIQzVGc4 = 7.6018855544214325;
		const _arrayValueBiCmxpq = false;
		const _arrayValueV9cuR6Q = [_arrayValueIQzVGc4, _arrayValueBiCmxpq]
		const _arrayValueIn7Hukv = {
		
	}
		const _arrayValueXxVxMm = [_arrayValueIn7Hukv]
		const _arrayValueFIG4kyV = [_arrayValueV9cuR6Q, _arrayValueXxVxMm]
		const _isDirectedbcpV6i = [_arrayValueohk4C0C, _arrayValueZU6AsrQ, _arrayValueFIG4kyV]
		const _returnValueYjQjEK = undefined;
		const _getAllEdgesXAoYOWS = () => { return _returnValueYjQjEK };
		const _getAllVerticeskmwhUNq = true;
		const _graphfgeOWnb = {
			"isDirected": _isDirectedbcpV6i,
		"getAllEdges": _getAllEdgesXAoYOWS,
		"getAllVertices": _getAllVerticeskmwhUNq
	}
		const _returnValueCKvdIl = await kruskal(_graphfgeOWnb)
	});

	it('test for kruskal', async () => {
		const _isDirectedGvlXtE1 = false;
		const _graphersZKum = new Graph(_isDirectedGvlXtE1)
		const _returnValuee2RI4kC = await _graphersZKum.getAdjacencyMatrix()
		const _returnValuelgVi9Lg = await kruskal(_graphersZKum)
	});
})