export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _arrayValueB4AHVU7 = {
		
	}
		const _arrayValueHGX7MO = "4UuTzhOfmhL3Ez28dEkpwqd46H1pOGtqALqFCCqGGnOo";
		const _arrayValueQ7ZrayI = undefined;
		const _graphaJ63HKt = [_arrayValueB4AHVU7, _arrayValueHGX7MO, _arrayValueQ7ZrayI]
		const _returnValuebwXIAW = await bfTravellingSalesman(_graphaJ63HKt)
	});

	it('test for bfTravellingSalesman', async () => {
		const _arrayValuenmV7UG = -9.935265554535958;
		const _arrayValuebh3VtL5 = [_arrayValuenmV7UG]
		const _arrayValuegw83IZa = undefined;
		const _returnValuePrGfciy = "B8zIwhSxcAGAHHLVi7yEsUDnRXjrvJ46W1EzM1DDBIz6mBzDJYLkRhQNv31tXvcUakoNwiBJkE7ZX34rhY9E1suai4GkhvTbrq0";
		const _arrayValuerxzfrB = () => { return _returnValuePrGfciy };
		const _returnValueVd5UDU8 = [_arrayValuebh3VtL5, _arrayValuegw83IZa, _arrayValuerxzfrB]
		const _getAllVerticesYaNT1ey = () => { return _returnValueVd5UDU8 };
		const _getAdjacencyMatrixsdgzc4Y = undefined;
		const _returnValuezh8CsUs = null;
		const _getVerticesIndicesNGyi3jK = () => { return _returnValuezh8CsUs };
		const _grapho5kISrL = {
			"getAllVertices": _getAllVerticesYaNT1ey,
		"getAdjacencyMatrix": _getAdjacencyMatrixsdgzc4Y,
		"getVerticesIndices": _getVerticesIndicesNGyi3jK
	}
		const _returnValuegsv6R0Z = await bfTravellingSalesman(_grapho5kISrL)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedZxle6ew = true;
		const _graphRP0tkkX = new Graph(_isDirectedZxle6ew)
		const _returnValuecWjDCSl = await _graphRP0tkkX.getWeight()
		const _returnValueinhzRRd = -6.748609662929454;
		const _returnValueAyGB7mR = () => { return _returnValueinhzRRd };
		const _getKeyXo64uUB = () => { return _returnValueAyGB7mR };
		const _newVertexrTmrRpv = {
			"getKey": _getKeyXo64uUB
	}
		const _returnValue8mXQXy = await _graphRP0tkkX.addVertex(_newVertexrTmrRpv)
		const _returnValueZ7DVJhc = await _graphRP0tkkX.getWeight()
		const _returnValuerwOfHzd = await bfTravellingSalesman(_graphRP0tkkX)
	});
})