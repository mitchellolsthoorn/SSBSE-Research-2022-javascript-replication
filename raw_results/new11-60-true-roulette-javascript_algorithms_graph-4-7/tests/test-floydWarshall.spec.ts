export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _arrayValuekreEiYr = null;
		const _graphv1QMQzs = [_arrayValuekreEiYr]
		const _returnValueYj56Gw = await floydWarshall(_graphv1QMQzs)
	});

	it('test for floydWarshall', async () => {
		const _returnValueriQC2az = "z7NgJFBVbkCskTh7uIfoQJ6vRN2pdAiHwyMIIN0SRbeBygqb5og99xPuTIsoQlDvoKK";
		const _getAllVerticesmB3CHkL = () => { return _returnValueriQC2az };
		const _returnValueZbLzuhI = {
		
	}
		const _findEdgearAAw0r = () => { return _returnValueZbLzuhI };
		const _graphSvyExO = {
			"getAllVertices": _getAllVerticesmB3CHkL,
		"findEdge": _findEdgearAAw0r
	}
		const _returnValueXioDA6I = await floydWarshall(_graphSvyExO)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedERhi0b1 = false;
		const _graphHGRKEV2 = new Graph(_isDirectedERhi0b1)
		const _returnValuelH27Xfs = await _graphHGRKEV2.toString()
		const _returnValuepB1Sv5N = await _graphHGRKEV2.toString()
		const _returnValuewNoP5uf = await floydWarshall(_graphHGRKEV2)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueTh2OiKt = undefined;
		const _arrayValuedkeMer0 = undefined;
		const _returnValueeqLy07g = [_arrayValueTh2OiKt, _arrayValuedkeMer0]
		const _getAllVerticesC8Gf0f = () => { return _returnValueeqLy07g };
		const _returnValuewVapm3Q = true;
		const _findEdgezjoYJVW = () => { return _returnValuewVapm3Q };
		const _graphmTua099 = {
			"getAllVertices": _getAllVerticesC8Gf0f,
		"findEdge": _findEdgezjoYJVW
	}
		const _returnValueefgLqmS = await floydWarshall(_graphmTua099)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuefG6w5k = "JoXLnMqp5FKNa07XNg96kVScTAaTE4QhohKE1IKGjXBMtRwQNNdhVM";
		const _arrayValueL0SQc1 = "mNua7HVwEGtO64s9PfumSuIFzTsLSU41z65NzGuS6csyGf9aZQw8YW3PIHMUk3ERKdaiFxuO14qmOkaz3MJ815z";
		const _arrayValueKq257U9 = "rXTr";
		const _arrayValueM70IRri = undefined;
		const _arrayValuevikV8po = [_arrayValuefG6w5k, _arrayValueL0SQc1, _arrayValueKq257U9, _arrayValueM70IRri]
		const _arrayValuez31AYiU = "jqgTkgLT0K26U1ltdIKpBlaBy3zsMRwNUcqT12T04VybBXfEqUxRdShvd9y";
		const _returnValueZy3wo9l = [_arrayValuevikV8po, _arrayValuez31AYiU]
		const _getAllVerticesCnfjRb6 = () => { return _returnValueZy3wo9l };
		const _returnValueQ2zgOXW = "VPlPJ3qrqeIyb1VaHve0po22AsDBchOvaSMO18alSxM1Mvi6jppzy";
		const _findEdge1FVJMG = () => { return _returnValueQ2zgOXW };
		const _graphCVjwIuv = {
			"getAllVertices": _getAllVerticesCnfjRb6,
		"findEdge": _findEdge1FVJMG
	}
		const _returnValueEwWiXDB = await floydWarshall(_graphCVjwIuv)
	});
})