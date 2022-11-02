export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedxT24Qh3 = "cD8L9ifv7QiLF3AN9mYPaMsdrs1lwliq24FA8sm63i6g3aoOsnkxpM1KpEwSX8llttUXvwh3qX303ne3ROvK";
		const _returnValueBUInlOz = {
		
	}
		const _getAllEdgesfuvW7dj = () => { return _returnValueBUInlOz };
		const _returnValueuvwDhP = true;
		const _getAllVerticesInvCcyC = () => { return _returnValueuvwDhP };
		const _graphogMa1Y7 = {
			"isDirected": _isDirectedxT24Qh3,
		"getAllEdges": _getAllEdgesfuvW7dj,
		"getAllVertices": _getAllVerticesInvCcyC
	}
		const _returnValuelRldod3 = await kruskal(_graphogMa1Y7)
	});

	it('test for kruskal', async () => {
		const _isDirectedZcFJwlP = null;
		const _returnValueevs8xj4 = "1Ue85BUuWsGDBu86fEyOV6acdn0p";
		const _getAllEdgesalwXta = () => { return _returnValueevs8xj4 };
		const _returnValueZPfV5q = true;
		const _getAllVerticesSxZ3ll0 = () => { return _returnValueZPfV5q };
		const _graphmRSpLb3 = {
			"isDirected": _isDirectedZcFJwlP,
		"getAllEdges": _getAllEdgesalwXta,
		"getAllVertices": _getAllVerticesSxZ3ll0
	}
		const _returnValuenybFhzl = await kruskal(_graphmRSpLb3)
	});
})