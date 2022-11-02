export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValuexdt1NT2 = null;
		const _getAllVerticesQuMeZDE = () => { return _returnValuexdt1NT2 };
		const _arrayValueI4jWj0X = -0.8645112599954903;
		const _arrayValueL5sGGJh = "X9dR5chOMdHROYuIVSy4IFg3KuItWJVZ5fckahe";
		const _returnValueMqQD2Uf = [_arrayValueI4jWj0X, _arrayValueL5sGGJh]
		const _findEdgeXYnDjvR = () => { return _returnValueMqQD2Uf };
		const _graphQKpflQl = {
			"getAllVertices": _getAllVerticesQuMeZDE,
		"findEdge": _findEdgeXYnDjvR
	}
		const _returnValuebmf2fAp = await floydWarshall(_graphQKpflQl)
	});

	it('test for floydWarshall', async () => {
		const _returnValuerWmRrs = true;
		const _getAllVerticesToRJcdT = () => { return _returnValuerWmRrs };
		const _arrayValueToe40cI = {
		
	}
		const _arrayValueEInDNQd = undefined;
		const _arrayValuev3kLuDl = undefined;
		const _returnValueqQAcOPP = [_arrayValueToe40cI, _arrayValueEInDNQd, _arrayValuev3kLuDl]
		const _findEdgesM8ijvQ = () => { return _returnValueqQAcOPP };
		const _graphRpvVeJ = {
			"getAllVertices": _getAllVerticesToRJcdT,
		"findEdge": _findEdgesM8ijvQ
	}
		const _returnValueN5K2ABy = await floydWarshall(_graphRpvVeJ)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuep3BZfs = null;
		const _arrayValueubUXAz = -6.740156978502646;
		const _arrayValuencAC5EY = {
		
	}
		const _returnValueqR0SmEZ = [_arrayValuep3BZfs, _arrayValueubUXAz, _arrayValuencAC5EY]
		const _getAllVerticesT8JjZxh = () => { return _returnValueqR0SmEZ };
		const _returnValueQoYn7wE = undefined;
		const _findEdgeB9ik6tk = () => { return _returnValueQoYn7wE };
		const _graphdz99EXD = {
			"getAllVertices": _getAllVerticesT8JjZxh,
		"findEdge": _findEdgeB9ik6tk
	}
		const _returnValuerplX0H = await floydWarshall(_graphdz99EXD)
	});
})