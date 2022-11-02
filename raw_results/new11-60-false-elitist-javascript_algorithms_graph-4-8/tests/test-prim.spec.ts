export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirected9XYdfe = -4.6622229445829;
		const _returnValueZW14rQF = "JkXYTuDg8aBg90tr8WKz6l";
		const _getAllVerticessc13Mfm = () => { return _returnValueZW14rQF };
		const _graphZu2Sqtj = {
			"isDirected": _isDirected9XYdfe,
		"getAllVertices": _getAllVerticessc13Mfm
	}
		const _returnValueetqhZ05 = await prim(_graphZu2Sqtj)
	});
})