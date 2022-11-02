export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueEAg04Aw = 1.4881258077034936;
		const _getAllVerticesw9ZWwXi = () => { return _returnValueEAg04Aw };
		const _returnValueVdXMkq9 = 0.2828722965874686;
		const _findEdgekVseMI = () => { return _returnValueVdXMkq9 };
		const _graphJdYXi8T = {
			"getAllVertices": _getAllVerticesw9ZWwXi,
		"findEdge": _findEdgekVseMI
	}
		const _returnValueNe81Hx = undefined;
		const _getKeys1WQdd6 = () => { return _returnValueNe81Hx };
		const _startVertexPAa4jH = {
			"getKey": _getKeys1WQdd6
	}
		const _returnValueRN1oazh = await dijkstra(_graphJdYXi8T, _startVertexPAa4jH)
	});

	it('test for dijkstra', async () => {
		const _returnValueJb3MXGB = []
		const _getAllVerticesmP13ehr = () => { return _returnValueJb3MXGB };
		const _returnValueJ4zlekq = false;
		const _findEdgewPSbVsI = () => { return _returnValueJ4zlekq };
		const _graphTK0tV0M = {
			"getAllVertices": _getAllVerticesmP13ehr,
		"findEdge": _findEdgewPSbVsI
	}
		const _returnValueH3MZt98 = null;
		const _getKeyVzP4Ry = () => { return _returnValueH3MZt98 };
		const _startVertexvLX2Ek = {
			"getKey": _getKeyVzP4Ry
	}
		const _returnValueDhdhg1t = await dijkstra(_graphTK0tV0M, _startVertexvLX2Ek)
	});
})