export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _arrayValuev0tgMF5 = undefined;
		const _arrayValuekByb98P = true;
		const _graphiutVr5b = [_arrayValuev0tgMF5, _arrayValuekByb98P]
		const _returnValuee54P1i7 = await prim(_graphiutVr5b)
	});

	it('test for prim', async () => {
		const _isDirectedCVtpQLQ = {
		
	}
		const _returnValuewWZxPMB = 3.8061198079650183;
		const _getAllVerticesLVXl88 = () => { return _returnValuewWZxPMB };
		const _graphIbCe54W = {
			"isDirected": _isDirectedCVtpQLQ,
		"getAllVertices": _getAllVerticesLVXl88
	}
		const _returnValueTXm2v2w = await prim(_graphIbCe54W)
	});

	it('test for prim', async () => {
		const _isDirectedr0b1O11 = false;
		const _graphTxkb9Rl = new Graph(_isDirectedr0b1O11)
		const _returnValueQg3JI60 = false;
		const _getKeyYP7Ccc = () => { return _returnValueQg3JI60 };
		const _newVertexOeJTuVZ = {
			"getKey": _getKeyYP7Ccc
	}
		const _returnValuex6pJVn = await _graphTxkb9Rl.addVertex(_newVertexOeJTuVZ)
		const _returnValuetgetGN0 = await prim(_graphTxkb9Rl)
	});
})