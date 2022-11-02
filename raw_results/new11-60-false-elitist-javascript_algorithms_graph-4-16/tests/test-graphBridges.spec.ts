export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _arrayValueiRstuyo = 7.233094099854611;
		const _returnValueCgyDsmP = [_arrayValueiRstuyo]
		const _getAllVerticesinhgptx = () => { return _returnValueCgyDsmP };
		const _findEdgev2q3hjE = undefined;
		const _graphmRUkGn6 = {
			"getAllVertices": _getAllVerticesinhgptx,
		"findEdge": _findEdgev2q3hjE
	}
		const _returnValueCao6Xxv = await graphBridges(_graphmRUkGn6)
	});
})