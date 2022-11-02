export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _graphdPgReN3 = undefined;
		const _returnValueSPmLXCy = await eulerianPath(_graphdPgReN3)
	});

	it('test for eulerianPath', async () => {
		const _returnValue6XEixG = []
		const _getAllEdgesiv73i9y = () => { return _returnValue6XEixG };
		const _returnValueNzx6gW8 = null;
		const _getAllVerticesyjq4GDi = () => { return _returnValueNzx6gW8 };
		const _deleteEdgehnGdMaO = null;
		const _graphxT9aLTz = {
			"getAllEdges": _getAllEdgesiv73i9y,
		"getAllVertices": _getAllVerticesyjq4GDi,
		"deleteEdge": _deleteEdgehnGdMaO
	}
		const _returnValuez0Nabx8 = await eulerianPath(_graphxT9aLTz)
	});

	it('test for eulerianPath', async () => {
		const _returnValueLLtGJY = []
		const _getAllEdgesGkzHTd = () => { return _returnValueLLtGJY };
		const _returnValueMRcE6EV = []
		const _getAllVerticesIcro1Kq = () => { return _returnValueMRcE6EV };
		const _returnValuefiRz5I3 = null;
		const _deleteEdgeiz3Leg7 = () => { return _returnValuefiRz5I3 };
		const _graphA1jQhgR = {
			"getAllEdges": _getAllEdgesGkzHTd,
		"getAllVertices": _getAllVerticesIcro1Kq,
		"deleteEdge": _deleteEdgeiz3Leg7
	}
		const _returnValuepgqUPLq = await eulerianPath(_graphA1jQhgR)
	});
})