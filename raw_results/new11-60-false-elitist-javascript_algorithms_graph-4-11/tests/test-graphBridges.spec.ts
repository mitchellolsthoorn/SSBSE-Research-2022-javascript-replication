export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueLzUz9zi = -5.781867263162316;
		const _getAllVerticesdV5qIhk = () => { return _returnValueLzUz9zi };
		const _arrayValueK39Y5B0 = "CD41dIVTiYUcXJ";
		const _arrayValueu5Dgmof = undefined;
		const _returnValueeMwZiFC = [_arrayValueK39Y5B0, _arrayValueu5Dgmof]
		const _findEdgePMY4O5F = () => { return _returnValueeMwZiFC };
		const _graphtuu3nDT = {
			"getAllVertices": _getAllVerticesdV5qIhk,
		"findEdge": _findEdgePMY4O5F
	}
		const _returnValueYQCq9Mw = await graphBridges(_graphtuu3nDT)
	});
})