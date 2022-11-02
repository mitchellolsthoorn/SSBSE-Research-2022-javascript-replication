export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueKwegmDg = []
		const _getAllVerticesBidm8fF = () => { return _returnValueKwegmDg };
		const _returnValueWITpeLm = undefined;
		const _findEdgeKWJ9PUS = () => { return _returnValueWITpeLm };
		const _graphPj5QZWY = {
			"getAllVertices": _getAllVerticesBidm8fF,
		"findEdge": _findEdgeKWJ9PUS
	}
		const _returnValueVka0LFl = await graphBridges(_graphPj5QZWY)
	});
})