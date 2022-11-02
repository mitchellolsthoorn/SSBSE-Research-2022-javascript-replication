export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedUCxLDz3 = []
		const _returnValuetV2CNxs = true;
		const _getAllVerticesoWfCPR = () => { return _returnValuetV2CNxs };
		const _graphsYo9k9 = {
			"isDirected": _isDirectedUCxLDz3,
		"getAllVertices": _getAllVerticesoWfCPR
	}
		const _returnValueuO6BImJ = await prim(_graphsYo9k9)
	});
})