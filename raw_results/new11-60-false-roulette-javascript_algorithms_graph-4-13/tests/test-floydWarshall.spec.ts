export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _arrayValueU3SLE3B = 5.619639744658064;
		const _arrayValue8TJZkQ = true;
		const _returnValueYYFtcSL = null;
		const _arrayValuefJJNdKq = () => { return _returnValueYYFtcSL };
		const _graphwqPL5se = [_arrayValueU3SLE3B, _arrayValue8TJZkQ, _arrayValuefJJNdKq]
		const _returnValueYkvzQdv = await floydWarshall(_graphwqPL5se)
	});

	it('test for floydWarshall', async () => {
		const _returnValuedv8zsAD = "RON5smacPGZByfBWqKptk7P7UNztL1iYRnAQZ1AkVukDhrdFD5BegpUg9uEC4myjtC65QXfmzmQAb15s8Bp5W1j0hgx";
		const _getAllVerticescEtHpkZ = () => { return _returnValuedv8zsAD };
		const _returnValuekW2kU2 = false;
		const _findEdgeCXqJnrA = () => { return _returnValuekW2kU2 };
		const _graphnLdPohe = {
			"getAllVertices": _getAllVerticescEtHpkZ,
		"findEdge": _findEdgeCXqJnrA
	}
		const _returnValuefKeu3D = await floydWarshall(_graphnLdPohe)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuev8Oqia = 5.281476910742963;
		const _returnValueGwLd7HJ = [_arrayValuev8Oqia]
		const _getAllVerticesJJqEL3x = () => { return _returnValueGwLd7HJ };
		const _arrayValueBzHPyG8 = -3.796977509302132;
		const _arrayValuejoktMXP = undefined;
		const _returnValueVTkbnVY = [_arrayValueBzHPyG8, _arrayValuejoktMXP]
		const _returnValuey5yM1Jb = () => { return _returnValueVTkbnVY };
		const _findEdgeJQMhEy2 = () => { return _returnValuey5yM1Jb };
		const _graphGszcnHt = {
			"getAllVertices": _getAllVerticesJJqEL3x,
		"findEdge": _findEdgeJQMhEy2
	}
		const _returnValueMTfyKJA = await floydWarshall(_graphGszcnHt)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueBhQxjWK = null;
		const _returnValueX3515Hz = 8.521815831703694;
		const _arrayValueISEfYAg = () => { return _returnValueX3515Hz };
		const _arrayValueTWJUm9 = false;
		const _returnValuecWcfjn4 = [_arrayValueBhQxjWK, _arrayValueISEfYAg, _arrayValueTWJUm9]
		const _getAllVerticesRVkamFV = () => { return _returnValuecWcfjn4 };
		const _returnValueph89aY0 = "mxAbU8Sl5jwgXH8VdoHjNdTD4WNsp4eYlnPPokFbVceWbID";
		const _returnValueuLRmi08 = () => { return _returnValueph89aY0 };
		const _findEdgetTprvYH = () => { return _returnValueuLRmi08 };
		const _graphfCkEJI1 = {
			"getAllVertices": _getAllVerticesRVkamFV,
		"findEdge": _findEdgetTprvYH
	}
		const _returnValuenZsFmNd = await floydWarshall(_graphfCkEJI1)
	});
})