export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _arrayValueWaOeob = false;
		const _arrayValueZar45XT = undefined;
		const _arrayValueEk0hLg = false;
		const _arrayValuejwRsn3g = [_arrayValueZar45XT, _arrayValueEk0hLg]
		const _arrayValuea2sSLx = 5.252601466070065;
		const _returnValuekypCHzL = [_arrayValueWaOeob, _arrayValuejwRsn3g, _arrayValuea2sSLx]
		const _getAllVerticesGOkwt16 = () => { return _returnValuekypCHzL };
		const _returnValuesKnPuT = -7.309818819422315;
		const _findEdgeIVa3fBI = () => { return _returnValuesKnPuT };
		const _graphmCByts = {
			"getAllVertices": _getAllVerticesGOkwt16,
		"findEdge": _findEdgeIVa3fBI
	}
		const _returnValueAOAZXyV = await graphBridges(_graphmCByts)
	});
})