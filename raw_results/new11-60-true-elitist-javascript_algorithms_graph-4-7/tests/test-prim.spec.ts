export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedxn3Xm3u = "RPYOG67aGALIUDXleohA2ibktaHA5fEY71RQBlvLdrsO3y5ejfaAH9STpqlDsoKDpUd1tUnrb";
		const _returnValueLMrD9dI = []
		const _getAllVerticesgjHp2Qs = () => { return _returnValueLMrD9dI };
		const _graphgwrpseC = {
			"isDirected": _isDirectedxn3Xm3u,
		"getAllVertices": _getAllVerticesgjHp2Qs
	}
		const _returnValuefenrwiU = await prim(_graphgwrpseC)
	});
})