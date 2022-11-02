export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _arrayValueFV7sfJn = null;
		const _graphNmTPyK = [_arrayValueFV7sfJn]
		const _returnValueDUWJaUc = await floydWarshall(_graphNmTPyK)
	});

	it('test for floydWarshall', async () => {
		const _returnValue1Kr9tn = false;
		const _getAllVerticesCID8QNk = () => { return _returnValue1Kr9tn };
		const _returnValueJWMJQMH = true;
		const _findEdgeSnp6TR = () => { return _returnValueJWMJQMH };
		const _graphrKSSFRp = {
			"getAllVertices": _getAllVerticesCID8QNk,
		"findEdge": _findEdgeSnp6TR
	}
		const _returnValueIYIUz9b = await floydWarshall(_graphrKSSFRp)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedeveK1FW = true;
		const _graphQCXrFC = new Graph(_isDirectedeveK1FW)
		const _returnValueiiUxoJs = await _graphQCXrFC.getWeight()
		const _returnValueTXWkOhy = await _graphQCXrFC.getAllEdges()
		const _returnValueauB9pGr = await floydWarshall(_graphQCXrFC)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueS04m5iE = false;
		const _returnValuetmuJSRC = [_arrayValueS04m5iE]
		const _getAllVerticesAWGMBeg = () => { return _returnValuetmuJSRC };
		const _returnValueONiKhbf = null;
		const _findEdgeljIoZrF = () => { return _returnValueONiKhbf };
		const _graphuH2IsE = {
			"getAllVertices": _getAllVerticesAWGMBeg,
		"findEdge": _findEdgeljIoZrF
	}
		const _returnValueQR7aboX = await floydWarshall(_graphuH2IsE)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuewK938Zn = -8.22930971960379;
		const _arrayValueXdh2rM9 = "NajPUd9dPFWLTnAmVi4uAYygsqxg883punMh93Husiw";
		const _returnValueKodcwyT = [_arrayValuewK938Zn, _arrayValueXdh2rM9]
		const _getAllVerticeso3A3Xhb = () => { return _returnValueKodcwyT };
		const _returnValueGqDhvsw = null;
		const _findEdgeAiehqlQ = () => { return _returnValueGqDhvsw };
		const _graphqXCFthV = {
			"getAllVertices": _getAllVerticeso3A3Xhb,
		"findEdge": _findEdgeAiehqlQ
	}
		const _returnValuehbajVnh = await floydWarshall(_graphqXCFthV)
	});
})