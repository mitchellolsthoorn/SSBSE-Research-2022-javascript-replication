export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValues6Vhxb1 = true;
		const _getAllVerticesoFtt2MF = () => { return _returnValues6Vhxb1 };
		const _returnValuejmcdKSs = 3.0873759470896793;
		const _findEdgevKSG4Oa = () => { return _returnValuejmcdKSs };
		const _graphvnIE5h = {
			"getAllVertices": _getAllVerticesoFtt2MF,
		"findEdge": _findEdgevKSG4Oa
	}
		const _returnValueumDrSGW = await floydWarshall(_graphvnIE5h)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuetZWDbON = false;
		const _arrayValuelx7Y4Bf = false;
		const _arrayValue8Ih8QS = [_arrayValuetZWDbON, _arrayValuelx7Y4Bf]
		const _arrayValueGcqrPkw = undefined;
		const _returnValue9Fff65 = [_arrayValue8Ih8QS, _arrayValueGcqrPkw]
		const _getAllVerticesrLnT8YC = () => { return _returnValue9Fff65 };
		const _returnValueXGxjya6 = false;
		const _findEdgewqZUv6V = () => { return _returnValueXGxjya6 };
		const _graphC5AQuFB = {
			"getAllVertices": _getAllVerticesrLnT8YC,
		"findEdge": _findEdgewqZUv6V
	}
		const _returnValueltgKaPu = await floydWarshall(_graphC5AQuFB)
	});
})