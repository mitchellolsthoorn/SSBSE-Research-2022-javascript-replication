export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _graphK4V2M3X = "rVFGxltaMV6CQDxyBbsx8mczMUJzvqfUx1NhNpSu5abberiDkYqf";
		const _returnValuewHXcnKf = await kruskal(_graphK4V2M3X)
	});

	it('test for kruskal', async () => {
		const _isDirectedxnhg0Hy = null;
		const _returnValueObfP8Cg = "juHg3Fr63P5LcTu8a69Fglo2rvmwf6ULgBV4nwFG6tVuOAGS";
		const _getAllEdgesnXsPs6w = () => { return _returnValueObfP8Cg };
		const _returnValuejA1lldC = undefined;
		const _getAllVerticesGiuFqF8 = () => { return _returnValuejA1lldC };
		const _graphKFtWbpq = {
			"isDirected": _isDirectedxnhg0Hy,
		"getAllEdges": _getAllEdgesnXsPs6w,
		"getAllVertices": _getAllVerticesGiuFqF8
	}
		const _returnValueodIIBk = await kruskal(_graphKFtWbpq)
	});

	it('test for kruskal', async () => {
		const _arrayValuebNbPeJb = null;
		const _arrayValueIQ3koCD = false;
		const _arrayValuejZUpQ6A = [_arrayValuebNbPeJb, _arrayValueIQ3koCD]
		const _isDirectedSyyQKim = [_arrayValuejZUpQ6A]
		const _arrayValuedkwppg = null;
		const _arrayValuejAH4aNf = null;
		const _arrayValueyaIoKl1 = "2xC9mTrRvbKvPdchbuj";
		const _returnValueBal1UQt = [_arrayValuedkwppg, _arrayValuejAH4aNf, _arrayValueyaIoKl1]
		const _getAllEdgeseGKThEy = () => { return _returnValueBal1UQt };
		const _returnValueQGqmjUg = null;
		const _getAllVerticessMOsyWt = () => { return _returnValueQGqmjUg };
		const _graphoKmV8N8 = {
			"isDirected": _isDirectedSyyQKim,
		"getAllEdges": _getAllEdgeseGKThEy,
		"getAllVertices": _getAllVerticessMOsyWt
	}
		const _returnValueodKQ7y = await kruskal(_graphoKmV8N8)
	});
})