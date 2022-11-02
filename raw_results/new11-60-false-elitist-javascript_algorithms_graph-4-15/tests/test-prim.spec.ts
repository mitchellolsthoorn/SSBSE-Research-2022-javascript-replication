export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedVIAmkB = {
		
	}
		const _returnValueIXEjoJM = null;
		const _getAllVerticesKjYnBcQ = () => { return _returnValueIXEjoJM };
		const _graphqBlwwF1 = {
			"isDirected": _isDirectedVIAmkB,
		"getAllVertices": _getAllVerticesKjYnBcQ
	}
		const _returnValuelUqYOUH = await prim(_graphqBlwwF1)
	});
})