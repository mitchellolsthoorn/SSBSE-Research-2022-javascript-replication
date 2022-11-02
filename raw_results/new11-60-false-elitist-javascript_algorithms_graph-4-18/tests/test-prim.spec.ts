export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedZ3siae5 = "VJTsD3KlpNIHulAePhxkYfl82mxL25SkkSbsM5xeOytnW766tOw94WhSgN7SVQbzs8e";
		const _returnValueo4tAxDC = "IwEfu6jPVgPxp5eCcwJJJwwdpEzH5";
		const _returnValuerkIcsxD = () => { return _returnValueo4tAxDC };
		const _getAllVerticesRKrKHJR = () => { return _returnValuerkIcsxD };
		const _graphtmtL5g5 = {
			"isDirected": _isDirectedZ3siae5,
		"getAllVertices": _getAllVerticesRKrKHJR
	}
		const _returnValueksZN5eT = await prim(_graphtmtL5g5)
	});
})