export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValuetEIlOEN = 6.794661428237426;
		const _getAllVertices1RbFy2 = () => { return _returnValuetEIlOEN };
		const _returnValueZrUaLEU = "OSvf0USzmj5Bg0IxFba24pUCvamUpdLbTzOWwiFTm9BRDGmfXJlJ8MjDDQ1o9QE9ozuH69t6pJ9hqbt6UUQDXe7W";
		const _findEdgePyLByT = () => { return _returnValueZrUaLEU };
		const _graphYAgqh1v = {
			"getAllVertices": _getAllVertices1RbFy2,
		"findEdge": _findEdgePyLByT
	}
		const _returnValueMTsexJ = await floydWarshall(_graphYAgqh1v)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueXhcrmLe = false;
		const _arrayValuezCR2dO = {
		
	}
		const _arrayValueLQseNvg = {
		
	}
		const _arrayValueyRjiRxc = [_arrayValueXhcrmLe, _arrayValuezCR2dO, _arrayValueLQseNvg]
		const _returnValuey8cN8Uy = [_arrayValueyRjiRxc]
		const _getAllVerticeszUxNyxW = () => { return _returnValuey8cN8Uy };
		const _returnValueXbA1IXc = undefined;
		const _findEdgeXiHTBLZ = () => { return _returnValueXbA1IXc };
		const _graphVHJKdNE = {
			"getAllVertices": _getAllVerticeszUxNyxW,
		"findEdge": _findEdgeXiHTBLZ
	}
		const _returnValueWQpyMw2 = await floydWarshall(_graphVHJKdNE)
	});

	it('test for floydWarshall', async () => {
		const _returnValuef1qvsZV = []
		const _arrayValueZMpiL9 = () => { return _returnValuef1qvsZV };
		const _returnValuePE8hvlF = {
		
	}
		const _arrayValueXEe7VtC = () => { return _returnValuePE8hvlF };
		const _arrayValueAnfpMrq = {
		
	}
		const _returnValueP1ozGKX = [_arrayValueZMpiL9, _arrayValueXEe7VtC, _arrayValueAnfpMrq]
		const _getAllVerticesNdEX1J = () => { return _returnValueP1ozGKX };
		const _returnValuecrLBb7c = true;
		const _findEdger2N9bq6 = () => { return _returnValuecrLBb7c };
		const _graphTJLNU1Z = {
			"getAllVertices": _getAllVerticesNdEX1J,
		"findEdge": _findEdger2N9bq6
	}
		const _returnValuehSN5Szh = await floydWarshall(_graphTJLNU1Z)
	});
})