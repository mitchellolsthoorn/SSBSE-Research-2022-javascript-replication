export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphvMn4zkF = "BhS5JDRiG3Oww9Kd4t";
		const _returnValueIxEk6BD = await bfTravellingSalesman(_graphvMn4zkF)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuenRqfUDJ = "JBVwLAwfks9cpJ07JliOWlOGm0sTtAlNhTfXvVKaCssFrCuGAjRq5nH8phPkMK2WXzF2OCVEQ8r";
		const _getAllVerticeskacTVpA = () => { return _returnValuenRqfUDJ };
		const _arrayValueuCzv3oM = "rnd3T";
		const _returnValueDzH0lkM = [_arrayValueuCzv3oM]
		const _getAdjacencyMatrixlMiCMmO = () => { return _returnValueDzH0lkM };
		const _returnValueRV0eH3f = true;
		const _getVerticesIndicesEDkJvyN = () => { return _returnValueRV0eH3f };
		const _graphyjrSaB = {
			"getAllVertices": _getAllVerticeskacTVpA,
		"getAdjacencyMatrix": _getAdjacencyMatrixlMiCMmO,
		"getVerticesIndices": _getVerticesIndicesEDkJvyN
	}
		const _returnValueg03esG = await bfTravellingSalesman(_graphyjrSaB)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedz4tvUel = true;
		const _graphTtkvKr8 = new Graph(_isDirectedz4tvUel)
		const _returnValuelE1sJkB = "ieaIn7SD5xF89qBQUQRlB6ecPw2TRoaDGYaZIJvPYBu2h107JKmINEBSEQac2Y1F";
		const _getKeyMTCAB6 = () => { return _returnValuelE1sJkB };
		const _newVertexvNdtNRz = {
			"getKey": _getKeyMTCAB6
	}
		const _returnValueMzxebo = await _graphTtkvKr8.addVertex(_newVertexvNdtNRz)
		const _returnValueDiM3pf = await _graphTtkvKr8.getAllVertices()
		const _returnValuexCVfsMW = await bfTravellingSalesman(_graphTtkvKr8)
	});
})