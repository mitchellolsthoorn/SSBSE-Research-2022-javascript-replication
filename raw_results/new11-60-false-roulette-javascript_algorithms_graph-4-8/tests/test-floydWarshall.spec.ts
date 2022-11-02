export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueLIkE2ze = "31P6k1csJBBHMrwv8ew3LjUOWKXFdoLzYNrURMmjwJURxpTbKESyGVYIMsxhs8ZN3N1LK39q3Nm3YLmuCT58L1MHflBZK";
		const _getAllVerticesyT3CdaB = () => { return _returnValueLIkE2ze };
		const _returnValueVBZqf7s = "BWlXwOPHOvrStsocUhO9W8jdzYl6h2tkrnbbGfsvD2ovCkDrsXRz";
		const _findEdgeMycAbS = () => { return _returnValueVBZqf7s };
		const _graphzd8vqiN = {
			"getAllVertices": _getAllVerticesyT3CdaB,
		"findEdge": _findEdgeMycAbS
	}
		const _returnValuerOMnfTP = await floydWarshall(_graphzd8vqiN)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueHp8VbRb = null;
		const _returnValuezaL6NrT = [_arrayValueHp8VbRb]
		const _getAllVerticeshr4cR4 = () => { return _returnValuezaL6NrT };
		const _returnValueWNf0asm = 5.8096881420933;
		const _findEdgeNtN7cnl = () => { return _returnValueWNf0asm };
		const _graphXCSu8xk = {
			"getAllVertices": _getAllVerticeshr4cR4,
		"findEdge": _findEdgeNtN7cnl
	}
		const _returnValuedefZLd3 = await floydWarshall(_graphXCSu8xk)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueZVYJwp = null;
		const _arrayValueDc1As97 = "4EHz5S0Ey4rAFTSXXR38Si3hj87aLazOJGzwl1D2zozlTKbRrbTpJgxqC4ozz6cQnMdH5hfGniaFYciYKLogwD4nab6hi";
		const _arrayValueKTTYrM = {
		
	}
		const _arrayValueYzaQjJ = undefined;
		const _returnValueRXwSuC = [_arrayValueZVYJwp, _arrayValueDc1As97, _arrayValueKTTYrM, _arrayValueYzaQjJ]
		const _getAllVerticessOsbn8j = () => { return _returnValueRXwSuC };
		const _returnValuei0IqblT = undefined;
		const _findEdgewZi8hKB = () => { return _returnValuei0IqblT };
		const _graphfCwUMmC = {
			"getAllVertices": _getAllVerticessOsbn8j,
		"findEdge": _findEdgewZi8hKB
	}
		const _returnValueCr4u7w = await floydWarshall(_graphfCwUMmC)
	});
})