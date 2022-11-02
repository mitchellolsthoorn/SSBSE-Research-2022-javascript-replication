export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _arrayValuev9qmDlf = null;
		const _graphTNnk9Qv = [_arrayValuev9qmDlf]
		const _returnValueRoJaP88 = await kruskal(_graphTNnk9Qv)
	});

	it('test for kruskal', async () => {
		const _isDirectedpfc3fRG = true;
		const _returnValuea4Ct0e9 = "VoOBBoA5deocm9dkEF3L0AitIJRqo";
		const _getAllEdgesmLWWEpF = () => { return _returnValuea4Ct0e9 };
		const _returnValueBUiJzvO = -4.730094378856481;
		const _getAllVerticesBsYY1zP = () => { return _returnValueBUiJzvO };
		const _graphkMJbmdz = {
			"isDirected": _isDirectedpfc3fRG,
		"getAllEdges": _getAllEdgesmLWWEpF,
		"getAllVertices": _getAllVerticesBsYY1zP
	}
		const _returnValuemxaAgOQ = await kruskal(_graphkMJbmdz)
	});

	it('test for kruskal', async () => {
		const _isDirectedQJpQKhz = null;
		const _returnValueJqd8prp = "QYUDNw55Imdf7uaKGFVWLz86VXKtefdOp80KwbxRJbJ4uQNy3i3qciKINn9zF4YUt6TNJqsGKQPo";
		const _getAllEdgesXm5ROzT = () => { return _returnValueJqd8prp };
		const _returnValueowRJry = undefined;
		const _getAllVerticesRSQUp4W = () => { return _returnValueowRJry };
		const _graphwW7WUH = {
			"isDirected": _isDirectedQJpQKhz,
		"getAllEdges": _getAllEdgesXm5ROzT,
		"getAllVertices": _getAllVerticesRSQUp4W
	}
		const _returnValueBgvLry1 = await kruskal(_graphwW7WUH)
	});
})