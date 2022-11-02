export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueM39KXD7 = "onKNny9aPLGQv2z55556A2Czclly4qiuRMff";
		const _getAllVerticesob4E4vF = () => { return _returnValueM39KXD7 };
		const _returnValueDY8fJ6 = undefined;
		const _findEdget2lhcZd = () => { return _returnValueDY8fJ6 };
		const _graphBKg9fSJ = {
			"getAllVertices": _getAllVerticesob4E4vF,
		"findEdge": _findEdget2lhcZd
	}
		const _returnValuepCcYiMw = await floydWarshall(_graphBKg9fSJ)
	});

	it('test for floydWarshall', async () => {
		const _returnValueqYRFPyl = []
		const _getAllVerticesiOln2zk = () => { return _returnValueqYRFPyl };
		const _returnValueYgLdTGn = null;
		const _returnValuehYyNfyd = () => { return _returnValueYgLdTGn };
		const _findEdgeGPdQk84 = () => { return _returnValuehYyNfyd };
		const _graphWcaIrmj = {
			"getAllVertices": _getAllVerticesiOln2zk,
		"findEdge": _findEdgeGPdQk84
	}
		const _returnValueEqY6iTZ = await floydWarshall(_graphWcaIrmj)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueTSqjT3I = false;
		const _arrayValue5iRMeZ = false;
		const _returnValueQWx5Bm3 = false;
		const _arrayValueqcXN1Qq = () => { return _returnValueQWx5Bm3 };
		const _returnValueBIFni70 = [_arrayValueqcXN1Qq]
		const _arrayValueNYJWA4K = () => { return _returnValueBIFni70 };
		const _returnValueMJSN3ud = [_arrayValueTSqjT3I, _arrayValue5iRMeZ, _arrayValueNYJWA4K]
		const _getAllVerticesuadQkhq = () => { return _returnValueMJSN3ud };
		const _returnValuetSEuyYd = null;
		const _findEdgeH8fqjdI = () => { return _returnValuetSEuyYd };
		const _graphHqAaHMX = {
			"getAllVertices": _getAllVerticesuadQkhq,
		"findEdge": _findEdgeH8fqjdI
	}
		const _returnValuefQGnFN7 = await floydWarshall(_graphHqAaHMX)
	});
})