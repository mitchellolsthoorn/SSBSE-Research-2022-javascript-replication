export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _graphtTfRHsK = undefined;
		const _returnValueBKHYeDE = await floydWarshall(_graphtTfRHsK)
	});

	it('test for floydWarshall', async () => {
		const _returnValuesJLjHBN = "ZdFJXqkBmzxFJWYS4uwiQSJvAk34GvHdfvo";
		const _getAllVertices80QsQd = () => { return _returnValuesJLjHBN };
		const _returnValueUrhE2nY = []
		const _findEdgezujsKAT = () => { return _returnValueUrhE2nY };
		const _graphumKcJQG = {
			"getAllVertices": _getAllVertices80QsQd,
		"findEdge": _findEdgezujsKAT
	}
		const _returnValuewZj5rd = await floydWarshall(_graphumKcJQG)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedVcHoCMW = true;
		const _graphChMPnv0 = new Graph(_isDirectedVcHoCMW)
		const _returnValueSGwcsn5 = await _graphChMPnv0.reverse()
		const _returnValueWvebbHW = await floydWarshall(_graphChMPnv0)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueMejGCyz = undefined;
		const _arrayValuei42YBCG = "fRngdAVVMqGTxzazyHxpoX3GlrSye";
		const _arrayValueNSaySFZ = [_arrayValuei42YBCG]
		const _returnValueKTkEM6R = [_arrayValueMejGCyz, _arrayValueNSaySFZ]
		const _getAllVerticesabEP4B4 = () => { return _returnValueKTkEM6R };
		const _returnValuekDW4nGo = undefined;
		const _findEdge7ig2r5 = () => { return _returnValuekDW4nGo };
		const _graphyUUS8yH = {
			"getAllVertices": _getAllVerticesabEP4B4,
		"findEdge": _findEdge7ig2r5
	}
		const _returnValuebh7FkdD = await floydWarshall(_graphyUUS8yH)
	});
})