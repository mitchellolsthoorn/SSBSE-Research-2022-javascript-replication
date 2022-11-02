export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _arrayValuejI1lXrU = false;
		const _arrayValueByGO8Y = "Sf3wOuUR3BUn8rzGBDZVwh2c4baEWFcpAzq3nBhykSRGFk6B4Hesd0jB1KRJOGqvS3xx";
		const _returnValuemTQsAlB = [_arrayValuejI1lXrU, _arrayValueByGO8Y]
		const _getAllVerticeslaXQI8a = () => { return _returnValuemTQsAlB };
		const _findEdgecSuudC = true;
		const _graphdI0bVSL = {
			"getAllVertices": _getAllVerticeslaXQI8a,
		"findEdge": _findEdgecSuudC
	}
		const _returnValueAFG1xov = await floydWarshall(_graphdI0bVSL)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueHAwRoj = true;
		const _arrayValueYj9EAr8 = null;
		const _arrayValueDvnFAv = undefined;
		const _arrayValuelM7cj19 = true;
		const _arrayValueHKf8zJ9 = [_arrayValueYj9EAr8, _arrayValueDvnFAv, _arrayValuelM7cj19]
		const _arrayValueCEDLGIu = "4LEUyroTGtSCEuqWtVIaRDOT1IBBKCPSSwj1v4U";
		const _arrayValuewdjrGic = "oSYs2QOF";
		const _arrayValueWx00xrm = false;
		const _arrayValuelTKZKGO = [_arrayValueCEDLGIu, _arrayValuewdjrGic, _arrayValueWx00xrm]
		const _arrayValuejiToBUx = 0.8969527152676946;
		const _returnValuebARccy8 = [_arrayValueHAwRoj, _arrayValueHKf8zJ9, _arrayValuelTKZKGO, _arrayValuejiToBUx]
		const _getAllVerticesmVkSXh = () => { return _returnValuebARccy8 };
		const _returnValued8qRrSW = undefined;
		const _findEdgebVSZLc6 = () => { return _returnValued8qRrSW };
		const _graphrusY4e = {
			"getAllVertices": _getAllVerticesmVkSXh,
		"findEdge": _findEdgebVSZLc6
	}
		const _returnValueWfBQV7K = await floydWarshall(_graphrusY4e)
	});
})