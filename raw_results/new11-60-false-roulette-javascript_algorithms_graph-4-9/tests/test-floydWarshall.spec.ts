export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _arrayValueuqvkvKd = true;
		const _returnValueAywPFbK = [_arrayValueuqvkvKd]
		const _getAllVerticesANXaqzZ = () => { return _returnValueAywPFbK };
		const _arrayValueKOqzbRQ = 4.548818298209831;
		const _arrayValuevFdJhnD = "2YG2YXcnaiLPNG3ckNx8JvvhqZzbVSV47yrpQ2e8nkY2lEUuVeCVtCoI";
		const _returnValueE3gmPUX = [_arrayValueKOqzbRQ, _arrayValuevFdJhnD]
		const _findEdgeYeMMu8x = () => { return _returnValueE3gmPUX };
		const _graphhZFt0rc = {
			"getAllVertices": _getAllVerticesANXaqzZ,
		"findEdge": _findEdgeYeMMu8x
	}
		const _returnValueDoZUmNT = await floydWarshall(_graphhZFt0rc)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuer4pPA0 = null;
		const _arrayValueiWGMW1 = 8.389631542330939;
		const _returnValuenKbphqu = [_arrayValuer4pPA0, _arrayValueiWGMW1]
		const _getAllVerticesMpaAXq6 = () => { return _returnValuenKbphqu };
		const _returnValuemiFybVL = {
		
	}
		const _findEdgeo9WzXcu = () => { return _returnValuemiFybVL };
		const _graphjM7sIvJ = {
			"getAllVertices": _getAllVerticesMpaAXq6,
		"findEdge": _findEdgeo9WzXcu
	}
		const _returnValuewlfLezY = await floydWarshall(_graphjM7sIvJ)
	});
})