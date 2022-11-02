export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _graphJidsatH = "XMezl3WtXQL2ANDtorW9OJ5D9gXv62vNwdu";
		const _returnValueZT1DNLY = await floydWarshall(_graphJidsatH)
	});

	it('test for floydWarshall', async () => {
		const _returnValueBNnOxYn = null;
		const _getAllVerticesNfZrddt = () => { return _returnValueBNnOxYn };
		const _returnValuePsW2IFw = "8KjQ";
		const _findEdgelyXFc7U = () => { return _returnValuePsW2IFw };
		const _graphnfqsPVu = {
			"getAllVertices": _getAllVerticesNfZrddt,
		"findEdge": _findEdgelyXFc7U
	}
		const _returnValueJKeDNua = await floydWarshall(_graphnfqsPVu)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedrDScbVp = true;
		const _graphadPPbYn = new Graph(_isDirectedrDScbVp)
		const _returnValueqJnLhDf = await _graphadPPbYn.toString()
		const _returnValueNQwlone = await _graphadPPbYn.toString()
		const _returnValueaXnP6mj = await floydWarshall(_graphadPPbYn)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedRA4W53v = false;
		const _graphLsmmagx = new Graph(_isDirectedRA4W53v)
		const _returnValueLwKZ4Cj = await _graphLsmmagx.toString()
		const _returnValueAwNuEP5 = null;
		const _returnValuefF7qsn8 = () => { return _returnValueAwNuEP5 };
		const _getKeyKibr4nS = () => { return _returnValuefF7qsn8 };
		const _newVertexBGHOSEm = {
			"getKey": _getKeyKibr4nS
	}
		const _returnValuefZI4hzI = await _graphLsmmagx.addVertex(_newVertexBGHOSEm)
		const _returnValueZiJM10Y = await floydWarshall(_graphLsmmagx)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueA0CwFle = true;
		const _arrayValueBNowTfr = -1.1395270535592985;
		const _returnValuewKV36v5 = [_arrayValueA0CwFle, _arrayValueBNowTfr]
		const _getAllVerticesneKWDWD = () => { return _returnValuewKV36v5 };
		const _returnValueNVCARcB = "2sxTNDQLMHCbiiDu7kH7VHaUudZIgGoVEl9YI3fuaTkwywlRwXeDNE95gM8BdqT6mjFbT9wkHE5nC187T2Qr38I6N1DK0";
		const _findEdgeVdu6CCm = () => { return _returnValueNVCARcB };
		const _graphFW6oVy2 = {
			"getAllVertices": _getAllVerticesneKWDWD,
		"findEdge": _findEdgeVdu6CCm
	}
		const _returnValuezu4aPMP = await floydWarshall(_graphFW6oVy2)
	});
})