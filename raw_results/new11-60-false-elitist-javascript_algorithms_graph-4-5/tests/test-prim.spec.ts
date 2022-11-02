export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedry9F6gq = -9.822488681189684;
		const _returnValueAhnLae6 = null;
		const _getAllVerticesWONYMNw = () => { return _returnValueAhnLae6 };
		const _graphQcjkAQu = {
			"isDirected": _isDirectedry9F6gq,
		"getAllVertices": _getAllVerticesWONYMNw
	}
		const _returnValuetCMlQVD = await prim(_graphQcjkAQu)
	});
})