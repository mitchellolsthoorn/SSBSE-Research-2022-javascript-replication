export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueWmrM6OC = "ejupwe2qzRaopnkf2y1nfAAQ2wWyOhBTyBKVnv5Y2mH9TRUBCYoOm9JhFLcfAXtaUqSlTkCGFruG1FMNURQFAz9RZUCYR";
		const _returnValueWvqiGDc = () => { return _returnValueWmrM6OC };
		const _getAllVerticesDDRSkoK = () => { return _returnValueWvqiGDc };
		const _returnValuelKhksQH = 5.770883493008315;
		const _findEdgeN3e3r4w = () => { return _returnValuelKhksQH };
		const _graphILzl7XV = {
			"getAllVertices": _getAllVerticesDDRSkoK,
		"findEdge": _findEdgeN3e3r4w
	}
		const _returnValueu9VV0J = await graphBridges(_graphILzl7XV)
	});
})