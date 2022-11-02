export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueCijqOq = {
		
	}
		const _getAllVerticesKQqq2Vx = () => { return _returnValueCijqOq };
		const _returnValuespjPH6y = undefined;
		const _findEdgeL1GXDY1 = () => { return _returnValuespjPH6y };
		const _graphm6usuK = {
			"getAllVertices": _getAllVerticesKQqq2Vx,
		"findEdge": _findEdgeL1GXDY1
	}
		const _returnValuepw4vG2 = await graphBridges(_graphm6usuK)
	});
})