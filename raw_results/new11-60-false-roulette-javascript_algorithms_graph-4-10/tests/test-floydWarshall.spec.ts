export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _graphG9VeNfu = undefined;
		const _returnValuelldOHr9 = await floydWarshall(_graphG9VeNfu)
	});

	it('test for floydWarshall', async () => {
		const _returnValueqYPfZ7Z = undefined;
		const _getAllVerticesd1bICAQ = () => { return _returnValueqYPfZ7Z };
		const _returnValueAlbmLhx = 8.027676208479704;
		const _findEdgeckt5rC = () => { return _returnValueAlbmLhx };
		const _graphlXsBZfC = {
			"getAllVertices": _getAllVerticesd1bICAQ,
		"findEdge": _findEdgeckt5rC
	}
		const _returnValueY8ubNDN = await floydWarshall(_graphlXsBZfC)
	});

	it('test for floydWarshall', async () => {
		const _returnValuemxfadbJ = 0.34710130028618735;
		const _getAllVerticesaEmhowM = () => { return _returnValuemxfadbJ };
		const _findEdgegEegk7L = undefined;
		const _graphGfUHeBG = {
			"getAllVertices": _getAllVerticesaEmhowM,
		"findEdge": _findEdgegEegk7L
	}
		const _returnValueljraSCb = await floydWarshall(_graphGfUHeBG)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedBRHuXQj = true;
		const _graphM54fKIY = new Graph(_isDirectedBRHuXQj)
		const _returnValueh6pcwoF = await _graphM54fKIY.reverse()
		const _returnValueuKtnK4P = await _graphM54fKIY.reverse()
		const _returnValuewjbtRAq = await _graphM54fKIY.getAllVertices()
		const _returnValuebssnxHs = await _graphM54fKIY.getVerticesIndices()
		const _returnValueZLaN8Db = await floydWarshall(_graphM54fKIY)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueW41hYfg = "zpw0DiwT1YJ5JNEUlH1Sd1jSkO6EkOpo7HFoBKHJZV3KNwMg";
		const _arrayValueaAkV944 = null;
		const _arrayValuexEzYxW = null;
		const _arrayValuegtpzZba = [_arrayValueW41hYfg, _arrayValueaAkV944, _arrayValuexEzYxW]
		const _arrayValue4RC5bY = null;
		const _returnValuegxqx7IT = [_arrayValuegtpzZba, _arrayValue4RC5bY]
		const _getAllVerticesJ4CnVeg = () => { return _returnValuegxqx7IT };
		const _returnValuerUFNdXK = 6.810363775095002;
		const _findEdgeYxwjAr = () => { return _returnValuerUFNdXK };
		const _graphzXlx1gh = {
			"getAllVertices": _getAllVerticesJ4CnVeg,
		"findEdge": _findEdgeYxwjAr
	}
		const _returnValueRu6nUkP = await floydWarshall(_graphzXlx1gh)
	});
})