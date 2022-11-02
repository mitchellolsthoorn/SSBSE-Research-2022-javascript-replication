export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedcCicrsx = []
		const _returnValueIiu9soP = false;
		const _getAllVerticeswA7HetI = () => { return _returnValueIiu9soP };
		const _graphPwApKw = {
			"isDirected": _isDirectedcCicrsx,
		"getAllVertices": _getAllVerticeswA7HetI
	}
		const _returnValueeuQgK9 = await prim(_graphPwApKw)
	});
})