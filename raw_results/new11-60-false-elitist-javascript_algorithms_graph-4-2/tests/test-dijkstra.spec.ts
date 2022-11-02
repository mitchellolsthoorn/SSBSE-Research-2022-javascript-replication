export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueS5EaxVA = {
		
	}
		const _getAllVerticesOjFy30 = () => { return _returnValueS5EaxVA };
		const _returnValuet6NGQs = undefined;
		const _findEdgefP7rub = () => { return _returnValuet6NGQs };
		const _graphpuPcbp = {
			"getAllVertices": _getAllVerticesOjFy30,
		"findEdge": _findEdgefP7rub
	}
		const _arrayValuenQgCW6k = true;
		const _arrayValueR3WRFVV = -0.586063695452145;
		const _arrayValueFel7rRi = null;
		const _returnValueYPpoP8r = [_arrayValuenQgCW6k, _arrayValueR3WRFVV, _arrayValueFel7rRi]
		const _getKeyE07N7Tu = () => { return _returnValueYPpoP8r };
		const _startVertexxd7Wsdd = {
			"getKey": _getKeyE07N7Tu
	}
		const _returnValuej135H0o = await dijkstra(_graphpuPcbp, _startVertexxd7Wsdd)
	});

	it('test for dijkstra', async () => {
		const _returnValueaPo2M6E = []
		const _getAllVerticesqz0JpP1 = () => { return _returnValueaPo2M6E };
		const _returnValueYzBfCki = -2.343014696879962;
		const _findEdgeKahHOe = () => { return _returnValueYzBfCki };
		const _graphzOxF6U8 = {
			"getAllVertices": _getAllVerticesqz0JpP1,
		"findEdge": _findEdgeKahHOe
	}
		const _returnValuemvmRr1F = {
		
	}
		const _returnValueEAbFGj = () => { return _returnValuemvmRr1F };
		const _getKeywTYhLwt = () => { return _returnValueEAbFGj };
		const _startVertexULnlY8X = {
			"getKey": _getKeywTYhLwt
	}
		const _returnValueCmKPTwr = await dijkstra(_graphzOxF6U8, _startVertexULnlY8X)
	});
})