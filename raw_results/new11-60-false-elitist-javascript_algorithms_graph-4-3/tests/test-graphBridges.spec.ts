export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValuetpbSqQY = "j2UM9W2kMEWq3DFaxc48IvIKBPswTwjv5xzL1nqT3rsDqDeDizWfqLxJsTkntnKWjWhNwmFiamTsH9SnL4ekorlG8";
		const _getAllVerticespM8bj86 = () => { return _returnValuetpbSqQY };
		const _returnValueu8HP2rs = undefined;
		const _findEdgelx0bv34 = () => { return _returnValueu8HP2rs };
		const _graphKnJt2Zt = {
			"getAllVertices": _getAllVerticespM8bj86,
		"findEdge": _findEdgelx0bv34
	}
		const _returnValuek14tXsS = await graphBridges(_graphKnJt2Zt)
	});
})