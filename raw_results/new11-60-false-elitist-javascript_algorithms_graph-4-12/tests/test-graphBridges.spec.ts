export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueM33TAWo = "SFBi";
		const _getAllVerticesP88qK1Y = () => { return _returnValueM33TAWo };
		const _returnValuekyyrxsl = undefined;
		const _findEdgeZHQrbgE = () => { return _returnValuekyyrxsl };
		const _graphar8xSh = {
			"getAllVertices": _getAllVerticesP88qK1Y,
		"findEdge": _findEdgeZHQrbgE
	}
		const _returnValuehwImPu3 = await graphBridges(_graphar8xSh)
	});
})