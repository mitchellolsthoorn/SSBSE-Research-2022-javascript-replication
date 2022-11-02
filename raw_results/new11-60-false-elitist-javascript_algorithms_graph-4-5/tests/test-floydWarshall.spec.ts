export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueoTl9Tlw = false;
		const _getAllVerticesrQ28sY = () => { return _returnValueoTl9Tlw };
		const _arrayValuem7WCych = null;
		const _returnValuebWKbfVo = [_arrayValuem7WCych]
		const _findEdgeLtWanZe = () => { return _returnValuebWKbfVo };
		const _graphUrUe8Mx = {
			"getAllVertices": _getAllVerticesrQ28sY,
		"findEdge": _findEdgeLtWanZe
	}
		const _returnValuexc4LsCE = await floydWarshall(_graphUrUe8Mx)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueISkxvgG = null;
		const _arrayValueRlUVXbt = -4.778127592801878;
		const _arrayValuegtZ1ZlK = -3.7326209447461753;
		const _arrayValuewG4X82P = -1.7659418295872946;
		const _returnValuetOms5ji = [_arrayValueISkxvgG, _arrayValueRlUVXbt, _arrayValuegtZ1ZlK, _arrayValuewG4X82P]
		const _getAllVertices7fKan6 = () => { return _returnValuetOms5ji };
		const _arrayValueUjbry08 = 4.42422902734995;
		const _findEdgeNYKDyhr = [_arrayValueUjbry08]
		const _graphcIBqJC = {
			"getAllVertices": _getAllVertices7fKan6,
		"findEdge": _findEdgeNYKDyhr
	}
		const _returnValuevMKPqyi = await floydWarshall(_graphcIBqJC)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuen6uYRx0 = false;
		const _arrayValueBbQuNnl = undefined;
		const _returnValuemaSjZBp = [_arrayValuen6uYRx0, _arrayValueBbQuNnl]
		const _getAllVerticesm5Wg4TQ = () => { return _returnValuemaSjZBp };
		const _returnValueyx7JdEc = -2.10421039245015;
		const _findEdgezE48gBK = () => { return _returnValueyx7JdEc };
		const _graphlVNWAGL = {
			"getAllVertices": _getAllVerticesm5Wg4TQ,
		"findEdge": _findEdgezE48gBK
	}
		const _returnValuejhG9Ldw = await floydWarshall(_graphlVNWAGL)
	});
})