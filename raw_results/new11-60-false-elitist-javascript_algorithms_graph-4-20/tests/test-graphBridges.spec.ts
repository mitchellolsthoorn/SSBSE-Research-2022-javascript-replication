export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueUIcwF1d = "pD93uIYGW7s0l9pa4cVQnFCBVJoC8aT3q77jVN";
		const _getAllVerticesD1rLwRV = () => { return _returnValueUIcwF1d };
		const _returnValueAlHbRmn = "LuWPcg";
		const _findEdgei3MKSaj = () => { return _returnValueAlHbRmn };
		const _graphrPBIYX4 = {
			"getAllVertices": _getAllVerticesD1rLwRV,
		"findEdge": _findEdgei3MKSaj
	}
		const _returnValuehgsYpv = await graphBridges(_graphrPBIYX4)
	});
})