export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _isDirectedSeTxI4 = false;
		const _graphvP4o8U1 = new Graph(_isDirectedSeTxI4)
		const _returnValueNviFGdP = await _graphvP4o8U1.getVerticesIndices()
		const _returnValueClpV74 = await _graphvP4o8U1.reverse()
		const _returnValueyJbM0RB = await _graphvP4o8U1.getAllEdges()
		const _arrayValueZLut2QM = "fLGSitbobCRGF3JaoYVLP5mnF52F";
		const _arrayValueAO7L9x = undefined;
		const _returnValuedso23JO = [_arrayValueZLut2QM, _arrayValueAO7L9x]
		const _vertexKey5hby7m = () => { return _returnValuedso23JO };
		const _returnValueGAXu51O = await _graphvP4o8U1.getVertexByKey(_vertexKey5hby7m)
		const _returnValueZK329Lf = await bfTravellingSalesman(_graphvP4o8U1)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedgzlJjnQ = true;
		const _graphTInVFKU = new Graph(_isDirectedgzlJjnQ)
		const _returnValueMlXokLz = await _graphTInVFKU.getVerticesIndices()
		const _returnValuehuNX9Bx = await _graphTInVFKU.getWeight()
		const _returnValuemoEYa3 = null;
		const _getKeyZub3OJ = () => { return _returnValuemoEYa3 };
		const _newVertexVzAQwqk = {
			"getKey": _getKeyZub3OJ
	}
		const _returnValuebql4eDk = await _graphTInVFKU.addVertex(_newVertexVzAQwqk)
		const _returnValueUjU22M1 = await bfTravellingSalesman(_graphTInVFKU)
	});
})