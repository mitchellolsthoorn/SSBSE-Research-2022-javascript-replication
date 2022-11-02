export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _graphLx2hZ8q = "mEjqmYL4gpD6ljYvSLRSiWQiCGenzoa5evO1hPVDfLtxwNravNzLoakoKY9tsp9vzAgKKWUOTc5XBbip1r";
		const _returnValuesG92adQ = await prim(_graphLx2hZ8q)
	});

	it('test for prim', async () => {
		const _arrayValueF3InlJo = []
		const _isDirectedTttD34s = [_arrayValueF3InlJo]
		const _returnValuecXXMNEt = "nlb9BIbA3nXfuI8BXngRiFrgie26gqlpqYNiufmq1hGFM";
		const _getAllVerticesjj5P4Iw = () => { return _returnValuecXXMNEt };
		const _graphXLm9CBK = {
			"isDirected": _isDirectedTttD34s,
		"getAllVertices": _getAllVerticesjj5P4Iw
	}
		const _returnValueze9tuMC = await prim(_graphXLm9CBK)
	});

	it('test for prim', async () => {
		const _isDirectedYqZx7YH = false;
		const _graphfrcH4Gj = new Graph(_isDirectedYqZx7YH)
		const _returnValueEk37kX = "KnMFudqmX0pUPIVEKApce9NDg4uuICtL8J8qC";
		const _returnValuesTKZP83 = () => { return _returnValueEk37kX };
		const _getKeyzVcAoB = () => { return _returnValuesTKZP83 };
		const _newVertexkWprpFS = {
			"getKey": _getKeyzVcAoB
	}
		const _returnValueEFhpaBz = await _graphfrcH4Gj.addVertex(_newVertexkWprpFS)
		const _returnValuemKX4PnP = await _graphfrcH4Gj.getVerticesIndices()
		const _returnValuewz0ykK = await prim(_graphfrcH4Gj)
	});
})