export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueumFv3M = undefined;
		const _getAllVerticesbwJpsUG = () => { return _returnValueumFv3M };
		const _returnValueULlmZEq = -1.462005938866172;
		const _returnValueFYX3pc5 = () => { return _returnValueULlmZEq };
		const _arrayValuecDYTrz = () => { return _returnValueFYX3pc5 };
		const _arrayValueswMs8zo = true;
		const _returnValuexl0cQCB = []
		const _arrayValuebo9pToV = () => { return _returnValuexl0cQCB };
		const _returnValuegf09bZZ = [_arrayValuecDYTrz, _arrayValueswMs8zo, _arrayValuebo9pToV]
		const _findEdgesneOx8R = () => { return _returnValuegf09bZZ };
		const _graphXtKXFpI = {
			"getAllVertices": _getAllVerticesbwJpsUG,
		"findEdge": _findEdgesneOx8R
	}
		const _returnValueW5XNPqf = await floydWarshall(_graphXtKXFpI)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuegBrzDTi = "n9rIL9gU8H3GhMHaN3278vNiWz3ruYjkq1Bap4qm14geROJtbVmEgU22tFYe9OG6Ug5wrt1RbscMRso1kHD66hJ4ehgN";
		const _returnValueE7aYLW = [_arrayValuegBrzDTi]
		const _getAllVerticesBPuWGSd = () => { return _returnValueE7aYLW };
		const _returnValueqRghOD = -3.992627277442619;
		const _findEdgecs86G3L = () => { return _returnValueqRghOD };
		const _graphK8EfKLN = {
			"getAllVertices": _getAllVerticesBPuWGSd,
		"findEdge": _findEdgecs86G3L
	}
		const _returnValuezFrPc4 = await floydWarshall(_graphK8EfKLN)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueYVXr6J0 = {
		
	}
		const _arrayValuedJq7wnO = null;
		const _arrayValueiMLIBfl = "vDVFhki1Jh4SDzf";
		const _returnValueMko7dSR = "lJ5gamPYzjwNOOL57yNFEY4GFxdLXCyDhDgeXYZM9jaJlfpIPiCnreLXi5N6Hpk63pqjZ";
		const _arrayValueYRN7w7 = () => { return _returnValueMko7dSR };
		const _returnValueYbo1Czl = [_arrayValueYVXr6J0, _arrayValuedJq7wnO, _arrayValueiMLIBfl, _arrayValueYRN7w7]
		const _getAllVerticesSyoBjZK = () => { return _returnValueYbo1Czl };
		const _returnValuevi7JHd = 8.94419152255075;
		const _findEdgeSztD8io = () => { return _returnValuevi7JHd };
		const _graphguHLRur = {
			"getAllVertices": _getAllVerticesSyoBjZK,
		"findEdge": _findEdgeSztD8io
	}
		const _returnValueqApAClr = await floydWarshall(_graphguHLRur)
	});
})