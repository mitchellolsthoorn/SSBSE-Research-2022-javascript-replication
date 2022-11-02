export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValuetUKQ4jD = "vqqvkbigwvKIIJ0TQB5JjJdwi8ky";
		const _getAllVertices74Xt6N = () => { return _returnValuetUKQ4jD };
		const _returnValueH6EDQm = 9.018794403074722;
		const _getAdjacencyMatrixoCo6KPQ = () => { return _returnValueH6EDQm };
		const _returnValuen3oavUw = []
		const _getVerticesIndicesUM2g24R = () => { return _returnValuen3oavUw };
		const _graphKZvtpkw = {
			"getAllVertices": _getAllVertices74Xt6N,
		"getAdjacencyMatrix": _getAdjacencyMatrixoCo6KPQ,
		"getVerticesIndices": _getVerticesIndicesUM2g24R
	}
		const _returnValueNZh6cbN = await bfTravellingSalesman(_graphKZvtpkw)
	});
})