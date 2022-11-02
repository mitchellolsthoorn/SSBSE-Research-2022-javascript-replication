export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValuekolCFh7 = -0.9704879108687905;
		const _getAllVerticesoLxNeMC = () => { return _returnValuekolCFh7 };
		const _findEdgef7UNcLl = "mkt1GC86USUzmLBteg4gJu2BlUyyWU733OequfhjyLvhD7x34LR4nXdkO";
		const _graphKXvoiU3 = {
			"getAllVertices": _getAllVerticesoLxNeMC,
		"findEdge": _findEdgef7UNcLl
	}
		const _returnValueS3ihFP = await floydWarshall(_graphKXvoiU3)
	});

	it('test for floydWarshall', async () => {
		const _returnValuepcYEPFV = {
		
	}
		const _arrayValueBojukO = () => { return _returnValuepcYEPFV };
		const _arrayValueVM44Zv = [_arrayValueBojukO]
		const _arrayValueGwRNeLL = "V";
		const _returnValueQXq22kz = [_arrayValueVM44Zv, _arrayValueGwRNeLL]
		const _getAllVerticestdQ8ifs = () => { return _returnValueQXq22kz };
		const _returnValuehT0Wids = {
		
	}
		const _findEdgexHeabgG = () => { return _returnValuehT0Wids };
		const _graphyq9bkz5 = {
			"getAllVertices": _getAllVerticestdQ8ifs,
		"findEdge": _findEdgexHeabgG
	}
		const _returnValuewUNedhF = await floydWarshall(_graphyq9bkz5)
	});
})