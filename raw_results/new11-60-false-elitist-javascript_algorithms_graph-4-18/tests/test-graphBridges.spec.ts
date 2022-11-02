export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _getAllVerticesCblEbi9 = "hq3gUSqaszE8AwBEVRA6Fk8aD1reC";
		const _returnValuecAjKZzu = true;
		const _findEdgeaAW3Pw1 = () => { return _returnValuecAjKZzu };
		const _graphwTiktuZ = {
			"getAllVertices": _getAllVerticesCblEbi9,
		"findEdge": _findEdgeaAW3Pw1
	}
		const _returnValue3usuKo = await graphBridges(_graphwTiktuZ)
	});
})