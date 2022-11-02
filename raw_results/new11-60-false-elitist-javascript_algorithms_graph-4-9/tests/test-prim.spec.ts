export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _arrayValuegCJKBnY = {
		
	}
		const _isDirectedJd0YqX5 = [_arrayValuegCJKBnY]
		const _returnValueqVUesnx = "C8kdDTx5Dq57iW3m6I978e";
		const _getAllVerticesE3pP5Ht = () => { return _returnValueqVUesnx };
		const _graphCh0eByZ = {
			"isDirected": _isDirectedJd0YqX5,
		"getAllVertices": _getAllVerticesE3pP5Ht
	}
		const _returnValuejmi4yz = await prim(_graphCh0eByZ)
	});
})