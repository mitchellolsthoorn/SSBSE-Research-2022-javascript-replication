export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueTQau1e = -7.951948010293043;
		const _getVerticesIndicesG2m3jJY = () => { return _returnValueTQau1e };
		const _returnValuel9CKk2P = -1.2002787148281229;
		const _getAdjacencyMatrixBvwQTT9 = () => { return _returnValuel9CKk2P };
		const _returnValueYGeaZPx = undefined;
		const _getAllVertices0clHPN = () => { return _returnValueYGeaZPx };
		const _graphjTT8yt = {
			"getVerticesIndices": _getVerticesIndicesG2m3jJY,
		"getAdjacencyMatrix": _getAdjacencyMatrixBvwQTT9,
		"getAllVertices": _getAllVertices0clHPN
	}
		const _returnValueorZbSHb = await hamiltonianCycle(_graphjTT8yt)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValuetQoStE = true;
		const _getVerticesIndicesOk929s = () => { return _returnValuetQoStE };
		const _returnValueTcGdeMl = false;
		const _returnValueQc9jeuu = () => { return _returnValueTcGdeMl };
		const _returnValueJW5mVg = () => { return _returnValueQc9jeuu };
		const _getAdjacencyMatrixWYNagU = () => { return _returnValueJW5mVg };
		const _returnValueBjfeui = 6.883987054152026;
		const _getAllVerticesy6jHVx = () => { return _returnValueBjfeui };
		const _graphJJzQUGV = {
			"getVerticesIndices": _getVerticesIndicesOk929s,
		"getAdjacencyMatrix": _getAdjacencyMatrixWYNagU,
		"getAllVertices": _getAllVerticesy6jHVx
	}
		const _returnValueCOyjtpQ = await hamiltonianCycle(_graphJJzQUGV)
	});
})