export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _arrayValueHcMrPwA = null;
		const _arrayValueixpgkfG = null;
		const _arrayValueKUyo05C = false;
		const _arrayValueMh4pM4i = false;
		const _arrayValueaE7oJ37 = [_arrayValueixpgkfG, _arrayValueKUyo05C, _arrayValueMh4pM4i]
		const _arrayValueRfyTgCZ = null;
		const _graphg36MeKN = [_arrayValueHcMrPwA, _arrayValueaE7oJ37, _arrayValueRfyTgCZ]
		const _returnValueL6wJIvD = await floydWarshall(_graphg36MeKN)
	});

	it('test for floydWarshall', async () => {
		const _returnValuedEwRIm = -5.657369520456808;
		const _getAllVerticesJ5taDR6 = () => { return _returnValuedEwRIm };
		const _returnValuezMonU7l = "hmhZGn65uA";
		const _findEdgeAi1onW = () => { return _returnValuezMonU7l };
		const _graphAOJq8W1 = {
			"getAllVertices": _getAllVerticesJ5taDR6,
		"findEdge": _findEdgeAi1onW
	}
		const _returnValueSHviNS9 = await floydWarshall(_graphAOJq8W1)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuekAGK3mw = null;
		const _arrayValueUgF5pRz = [_arrayValuekAGK3mw]
		const _arrayValueHjmBdyF = null;
		const _arrayValuetaSUeD = false;
		const _returnValueJbMAZh = [_arrayValueUgF5pRz, _arrayValueHjmBdyF, _arrayValuetaSUeD]
		const _getAllVerticesJ1jghsu = () => { return _returnValueJbMAZh };
		const _returnValueWTUgunG = -9.35993525153884;
		const _findEdgef4kwDMM = () => { return _returnValueWTUgunG };
		const _graphDyaMKPG = {
			"getAllVertices": _getAllVerticesJ1jghsu,
		"findEdge": _findEdgef4kwDMM
	}
		const _returnValueUKQ1K7 = await floydWarshall(_graphDyaMKPG)
	});
})