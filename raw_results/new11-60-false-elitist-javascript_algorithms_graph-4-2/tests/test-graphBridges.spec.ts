export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueae7XNct = null;
		const _getAllVerticesszIEHH7 = () => { return _returnValueae7XNct };
		const _returnValueRJ3xvws = undefined;
		const _findEdgeX04px06 = () => { return _returnValueRJ3xvws };
		const _graphp6kjSD6 = {
			"getAllVertices": _getAllVerticesszIEHH7,
		"findEdge": _findEdgeX04px06
	}
		const _returnValue7IypOe = await graphBridges(_graphp6kjSD6)
	});
})