export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueI7RMi7L = null;
		const _getAllVerticesQF2n4dw = () => { return _returnValueI7RMi7L };
		const _returnValueC4PtLsV = false;
		const _findEdgePQhwZI = () => { return _returnValueC4PtLsV };
		const _graphWF3dMBn = {
			"getAllVertices": _getAllVerticesQF2n4dw,
		"findEdge": _findEdgePQhwZI
	}
		const _returnValuemXZMYhA = true;
		const _getKey0rShwB = () => { return _returnValuemXZMYhA };
		const _startVertexVqmlKyb = {
			"getKey": _getKey0rShwB
	}
		const _returnValueGJC91Ut = await dijkstra(_graphWF3dMBn, _startVertexVqmlKyb)
	});

	it('test for dijkstra', async () => {
		const _returnValueH0xwlbv = []
		const _getAllVerticeshNpSeR1 = () => { return _returnValueH0xwlbv };
		const _arrayValueRdx6yol = null;
		const _returnValuesaaUksH = [_arrayValueRdx6yol]
		const _findEdgehUZfYy6 = () => { return _returnValuesaaUksH };
		const _graphvf1kj3t = {
			"getAllVertices": _getAllVerticeshNpSeR1,
		"findEdge": _findEdgehUZfYy6
	}
		const _returnValueEsy3jGM = []
		const _getKeyDRDp6up = () => { return _returnValueEsy3jGM };
		const _startVertexmK6B1Q = {
			"getKey": _getKeyDRDp6up
	}
		const _returnValuexr4E6lj = await dijkstra(_graphvf1kj3t, _startVertexmK6B1Q)
	});
})