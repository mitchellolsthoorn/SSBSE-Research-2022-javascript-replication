export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _returnValueUEyfHeR = null;
		const _isDirectedJchcACK = () => { return _returnValueUEyfHeR };
		const _getAllEdgeslB5adf = true;
		const _arrayValuePgpDvbj = null;
		const _arrayValuezSD64FJ = 8.967764095285098;
		const _arrayValuefleGKnX = true;
		const _getAllVerticespeG3MRx = [_arrayValuePgpDvbj, _arrayValuezSD64FJ, _arrayValuefleGKnX]
		const _graphHt3DkDE = {
			"isDirected": _isDirectedJchcACK,
		"getAllEdges": _getAllEdgeslB5adf,
		"getAllVertices": _getAllVerticespeG3MRx
	}
		const _returnValuec025XgV = await kruskal(_graphHt3DkDE)
	});

	it('test for kruskal', async () => {
		const _isDirectedFlJphL8 = null;
		const _returnValueqk5A2EY = "hDnlEKiLu3bFaWX9pmS1LnNat1Cc2Skv4eNaadBJFA7b6sLMCGB9nhnl4CK5yN6BYVaXGStwx2nDr";
		const _getAllEdgesFJXFEMO = () => { return _returnValueqk5A2EY };
		const _returnValueCb0TTW = "joHHICCRGe4G8djt8soujBF9e2mtcfy6B6GfAuADgvYxio9SnhIHRqoagjRzCCLqtDSkCy3";
		const _arrayValueA1m53zI = () => { return _returnValueCb0TTW };
		const _returnValuet1hHheF = [_arrayValueA1m53zI]
		const _getAllVerticesRpe8ip = () => { return _returnValuet1hHheF };
		const _graphNSVtY3b = {
			"isDirected": _isDirectedFlJphL8,
		"getAllEdges": _getAllEdgesFJXFEMO,
		"getAllVertices": _getAllVerticesRpe8ip
	}
		const _returnValuecREZ4KS = await kruskal(_graphNSVtY3b)
	});
})