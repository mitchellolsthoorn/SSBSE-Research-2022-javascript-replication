export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _graphMzxmo2A = "mUTeHIDRL8YVl";
		const _returnValueTUAbmD = await kruskal(_graphMzxmo2A)
	});

	it('test for kruskal', async () => {
		const _arrayValueKR56a9S = true;
		const _arrayValuezLF3LNX = false;
		const _arrayValueILQtuNW = {
		
	}
		const _arrayValueV5bbbVH = [_arrayValuezLF3LNX, _arrayValueILQtuNW]
		const _returnValueNYHebb = [_arrayValueKR56a9S, _arrayValueV5bbbVH]
		const _isDirectedWFgoIQX = () => { return _returnValueNYHebb };
		const _returnValueV5VJzg = "WSdkkYff0AZ7uvDI3Q03DQHbyaoPBoegplcN0UWxBUoTlYtGM7";
		const _getAllEdgesDsQjp1F = () => { return _returnValueV5VJzg };
		const _getAllVerticeszK0EKmR = false;
		const _graphx8RF9wQ = {
			"isDirected": _isDirectedWFgoIQX,
		"getAllEdges": _getAllEdgesDsQjp1F,
		"getAllVertices": _getAllVerticeszK0EKmR
	}
		const _returnValueCje2Akg = await kruskal(_graphx8RF9wQ)
	});

	it('test for kruskal', async () => {
		const _isDirectedFkqVKKT = null;
		const _returnValueUxyiCjv = "nMpNEdib1OH6hTSFsSjIznxFIu2FLc0MhxkGqKAOYUhwKYW9EzZBCHk70Oi";
		const _getAllEdgesTStdi0m = () => { return _returnValueUxyiCjv };
		const _returnValuefghVsqn = undefined;
		const _getAllVerticesU3tMh7a = () => { return _returnValuefghVsqn };
		const _graphlxd7Tet = {
			"isDirected": _isDirectedFkqVKKT,
		"getAllEdges": _getAllEdgesTStdi0m,
		"getAllVertices": _getAllVerticesU3tMh7a
	}
		const _returnValueG2rBAmv = await kruskal(_graphlxd7Tet)
	});
})