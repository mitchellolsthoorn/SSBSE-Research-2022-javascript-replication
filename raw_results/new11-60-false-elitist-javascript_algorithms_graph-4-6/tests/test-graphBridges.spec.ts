export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueRU2mRt8 = 0.17272662955639362;
		const _getAllVerticesEaeipD = () => { return _returnValueRU2mRt8 };
		const _returnValueq63y0Yd = undefined;
		const _findEdgeuarBVLP = () => { return _returnValueq63y0Yd };
		const _graphXOlHsB4 = {
			"getAllVertices": _getAllVerticesEaeipD,
		"findEdge": _findEdgeuarBVLP
	}
		const _returnValueVM04i3 = await graphBridges(_graphXOlHsB4)
	});
})