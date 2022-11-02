export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValuexouo7CL = undefined;
		const _getAllVerticesYrlXQRx = () => { return _returnValuexouo7CL };
		const _arrayValuenEvmEZP = null;
		const _arrayValueI7TohKm = 8.559168579487665;
		const _arrayValueHIZfQQs = -8.176765631198824;
		const _returnValueu5w55EP = [_arrayValuenEvmEZP, _arrayValueI7TohKm, _arrayValueHIZfQQs]
		const _findEdgeVZeRoPg = () => { return _returnValueu5w55EP };
		const _graphI1BOilM = {
			"getAllVertices": _getAllVerticesYrlXQRx,
		"findEdge": _findEdgeVZeRoPg
	}
		const _returnValueJfIUytp = await floydWarshall(_graphI1BOilM)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedFtgtDqz = false;
		const _graphQo2Kq2R = new Graph(_isDirectedFtgtDqz)
		const _returnValuelQcItCa = await _graphQo2Kq2R.getAllVertices()
		const _returnValueFg9YNiz = await _graphQo2Kq2R.toString()
		const _returnValuecn4vl1Q = await _graphQo2Kq2R.getWeight()
		const _returnValuefXYYvO3 = await _graphQo2Kq2R.getWeight()
		const _returnValues5iSYXW = await floydWarshall(_graphQo2Kq2R)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuecuY0zud = {
		
	}
		const _arrayValueUcvXG6F = false;
		const _arrayValue7osq8S = null;
		const _returnValuexht8YJd = [_arrayValuecuY0zud, _arrayValueUcvXG6F, _arrayValue7osq8S]
		const _getAllVerticesvTJrMS2 = () => { return _returnValuexht8YJd };
		const _arrayValueACTOux = "T";
		const _returnValuekOTgAwJ = "ESbaFRocRRXCOpzgFvH8trKF6M7rr7JfkxMEcxWosoxmzGv86nYepWJuyheopax8";
		const _arrayValuedXVYfcI = () => { return _returnValuekOTgAwJ };
		const _returnValueQxRVLj = [_arrayValueACTOux, _arrayValuedXVYfcI]
		const _findEdgeI2hyq29 = () => { return _returnValueQxRVLj };
		const _graphsUdCfgv = {
			"getAllVertices": _getAllVerticesvTJrMS2,
		"findEdge": _findEdgeI2hyq29
	}
		const _returnValuemxQZ2a3 = await floydWarshall(_graphsUdCfgv)
	});
})