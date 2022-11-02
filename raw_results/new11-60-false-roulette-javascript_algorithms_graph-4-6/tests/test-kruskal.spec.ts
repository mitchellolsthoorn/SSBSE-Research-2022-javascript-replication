export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _arrayValuer6h6gT4 = undefined;
		const _graphFGGRzP8 = [_arrayValuer6h6gT4]
		const _returnValueIJKbd6Q = await kruskal(_graphFGGRzP8)
	});

	it('test for kruskal', async () => {
		const _isDirectedz7oDpt = -2.4281627648577224;
		const _returnValueYbbrZxo = null;
		const _getAllEdgesEqmju5R = () => { return _returnValueYbbrZxo };
		const _returnValueAERKu1v = 8.306635879354044;
		const _returnValueIMki8bV = () => { return _returnValueAERKu1v };
		const _getAllVerticesGNcjw2R = () => { return _returnValueIMki8bV };
		const _graph9LQ7rh = {
			"isDirected": _isDirectedz7oDpt,
		"getAllEdges": _getAllEdgesEqmju5R,
		"getAllVertices": _getAllVerticesGNcjw2R
	}
		const _returnValue4L1qKO = await kruskal(_graph9LQ7rh)
	});

	it('test for kruskal', async () => {
		const _isDirectedOdz4N0J = null;
		const _returnValuekAsopz3 = "pW41LRtOLq3qD20SJAYfDRRBIe4iSzG25LBney08YmKxY9hGX9A282a4kfPjFCS5hejnHZR8qlh093V1ThIeh";
		const _getAllEdgesbRM8BIG = () => { return _returnValuekAsopz3 };
		const _arrayValuex0DT7kn = null;
		const _arrayValueszfRmv = -2.2573487855530514;
		const _returnValueY4p6J6h = null;
		const _returnValueBtcOPdR = () => { return _returnValueY4p6J6h };
		const _arrayValueV1mokpR = () => { return _returnValueBtcOPdR };
		const _arrayValueSVTo4ki = [_arrayValueV1mokpR]
		const _returnValue3SeVid = [_arrayValuex0DT7kn, _arrayValueszfRmv, _arrayValueSVTo4ki]
		const _getAllVerticesxAkSeNM = () => { return _returnValue3SeVid };
		const _graphYvJ80Sf = {
			"isDirected": _isDirectedOdz4N0J,
		"getAllEdges": _getAllEdgesbRM8BIG,
		"getAllVertices": _getAllVerticesxAkSeNM
	}
		const _returnValuenm5rqDy = await kruskal(_graphYvJ80Sf)
	});
})