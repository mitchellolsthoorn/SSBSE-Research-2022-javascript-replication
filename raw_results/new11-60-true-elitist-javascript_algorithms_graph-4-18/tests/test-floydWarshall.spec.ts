export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueWycbbeA = -1.5594693977000187;
		const _getAllVerticesrMGiSH = () => { return _returnValueWycbbeA };
		const _returnValueUO9PXln = null;
		const _findEdgeMP3zQ5s = () => { return _returnValueUO9PXln };
		const _graphWlMgMhB = {
			"getAllVertices": _getAllVerticesrMGiSH,
		"findEdge": _findEdgeMP3zQ5s
	}
		const _returnValueP0bH0Oh = await floydWarshall(_graphWlMgMhB)
	});

	it('test for floydWarshall', async () => {
		const _returnValueMyEK1Jz = []
		const _getAllVerticesxdQDHt = () => { return _returnValueMyEK1Jz };
		const _returnValueMBTUlFK = false;
		const _findEdgebCXs67G = () => { return _returnValueMBTUlFK };
		const _graph0h0AH7 = {
			"getAllVertices": _getAllVerticesxdQDHt,
		"findEdge": _findEdgebCXs67G
	}
		const _returnValueGNhCuG = await floydWarshall(_graph0h0AH7)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuebOaYzho = null;
		const _arrayValuekR6IGSw = {
		
	}
		const _returnValuebVSUGg5 = [_arrayValuebOaYzho, _arrayValuekR6IGSw]
		const _getAllVerticesHWr4iXY = () => { return _returnValuebVSUGg5 };
		const _returnValueFEeME4d = undefined;
		const _findEdgehSqysy = () => { return _returnValueFEeME4d };
		const _graphxanZKmf = {
			"getAllVertices": _getAllVerticesHWr4iXY,
		"findEdge": _findEdgehSqysy
	}
		const _returnValueoOmW9ez = await floydWarshall(_graphxanZKmf)
	});
})