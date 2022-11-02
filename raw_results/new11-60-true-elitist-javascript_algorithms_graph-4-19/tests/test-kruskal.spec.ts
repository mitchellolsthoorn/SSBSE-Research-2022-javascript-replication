export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedYkpgKgQ = undefined;
		const _returnValuesw6Mfny = true;
		const _getAllEdgesvhNYTE = () => { return _returnValuesw6Mfny };
		const _returnValuegYQ78GG = null;
		const _getAllVerticesQuPVhlK = () => { return _returnValuegYQ78GG };
		const _graphEQSdb2 = {
			"isDirected": _isDirectedYkpgKgQ,
		"getAllEdges": _getAllEdgesvhNYTE,
		"getAllVertices": _getAllVerticesQuPVhlK
	}
		const _returnValueSRjDUlP = await kruskal(_graphEQSdb2)
	});

	it('test for kruskal', async () => {
		const _returnValueal8VJhY = "jGb3AYo8P0HNc9fDof57";
		const _isDirectede1dZHIG = () => { return _returnValueal8VJhY };
		const _getAllEdgesgl489Ja = undefined;
		const _getAllVerticesUY1EKpl = null;
		const _graphKsE4Sni = {
			"isDirected": _isDirectede1dZHIG,
		"getAllEdges": _getAllEdgesgl489Ja,
		"getAllVertices": _getAllVerticesUY1EKpl
	}
		const _returnValueaqerSR7 = await kruskal(_graphKsE4Sni)
	});

	it('test for kruskal', async () => {
		const _isDirectedO7Q0dIv = null;
		const _arrayValue6GZtkF = "gOa87wUPwkfe4";
		const _arrayValueom8al3q = -4.189398561570559;
		const _returnValuee40AULE = [_arrayValue6GZtkF, _arrayValueom8al3q]
		const _getAllEdgesY9VvBNw = () => { return _returnValuee40AULE };
		const _returnValuezwGtct = "I9VIzeTbUYAvPzQbGRYUaqP2mJn3dxSjqJKUiylFLROoj6VZsyGuX";
		const _getAllVerticesCMy0BC = () => { return _returnValuezwGtct };
		const _graphuxMxiwo = {
			"isDirected": _isDirectedO7Q0dIv,
		"getAllEdges": _getAllEdgesY9VvBNw,
		"getAllVertices": _getAllVerticesCMy0BC
	}
		const _returnValueopoXiQO = await kruskal(_graphuxMxiwo)
	});
})