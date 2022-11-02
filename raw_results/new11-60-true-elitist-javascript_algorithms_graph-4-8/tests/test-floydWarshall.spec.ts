export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _arrayValueWMoVl01 = undefined;
		const _arrayValueehsQRhA = -8.487400735685593;
		const _arrayValuep3huqER = undefined;
		const _arrayValueVtWi5fy = false;
		const _arrayValueqdIiTG = [_arrayValueehsQRhA, _arrayValuep3huqER, _arrayValueVtWi5fy]
		const _arrayValuexOe0A00 = null;
		const _returnValueBcXj2XZ = [_arrayValueWMoVl01, _arrayValueqdIiTG, _arrayValuexOe0A00]
		const _getAllVerticesK2NOCw5 = () => { return _returnValueBcXj2XZ };
		const _returnValueSXtrEk = null;
		const _findEdge61r80r = () => { return _returnValueSXtrEk };
		const _graphM3o0RCa = {
			"getAllVertices": _getAllVerticesK2NOCw5,
		"findEdge": _findEdge61r80r
	}
		const _returnValuerlXUKzM = await floydWarshall(_graphM3o0RCa)
	});
})