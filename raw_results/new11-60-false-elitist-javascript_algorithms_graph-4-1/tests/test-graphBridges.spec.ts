export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueAlOHzXU = false;
		const _getAllVerticesjmgCzgf = () => { return _returnValueAlOHzXU };
		const _returnValueiqwBBDK = {
		
	}
		const _findEdgemWbxtt = () => { return _returnValueiqwBBDK };
		const _graphCbGqTLZ = {
			"getAllVertices": _getAllVerticesjmgCzgf,
		"findEdge": _findEdgemWbxtt
	}
		const _returnValuehmKwk9A = await graphBridges(_graphCbGqTLZ)
	});
})