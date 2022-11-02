export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedW7ypZIe = undefined;
		const _returnValuetv053Wb = null;
		const _getAllVerticesCuSz1Le = () => { return _returnValuetv053Wb };
		const _graphL99nHBW = {
			"isDirected": _isDirectedW7ypZIe,
		"getAllVertices": _getAllVerticesCuSz1Le
	}
		const _returnValueWCG5yRI = await prim(_graphL99nHBW)
	});

	it('test for prim', async () => {
		const _isDirectedKG0z3Ak = -5.783226715809146;
		const _returnValueQwFilFH = true;
		const _getAllVerticesRhBW09 = () => { return _returnValueQwFilFH };
		const _graphNA06w2Q = {
			"isDirected": _isDirectedKG0z3Ak,
		"getAllVertices": _getAllVerticesRhBW09
	}
		const _returnValueq4jsKMN = await prim(_graphNA06w2Q)
	});

	it('test for prim', async () => {
		const _isDirectedwrvPqRE = false;
		const _graphyzD2j9I = new Graph(_isDirectedwrvPqRE)
		const _returnValueGuTDFx = await _graphyzD2j9I.reverse()
		const _returnValueMIvAy2 = undefined;
		const _getKeyeUjrh5i = () => { return _returnValueMIvAy2 };
		const _newVertexVjKoc6A = {
			"getKey": _getKeyeUjrh5i
	}
		const _returnValuetFujm4K = await _graphyzD2j9I.addVertex(_newVertexVjKoc6A)
		const _returnValueoZe9U6 = await prim(_graphyzD2j9I)
	});
})