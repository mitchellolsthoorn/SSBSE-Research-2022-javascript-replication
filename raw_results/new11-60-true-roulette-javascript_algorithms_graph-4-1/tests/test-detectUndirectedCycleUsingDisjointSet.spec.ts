export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValuejR2SAug = true;
		const _arrayValuehSd3MR3 = "nagp89HtjiLxvnta26dWyhQL3rs5PB9lEaiAtK6pul2tLb4UmO64GvvirSX6BLPUKyvH9lteK";
		const _graphphbZjJk = [_arrayValuejR2SAug, _arrayValuehSd3MR3]
		const _returnValuedTANEhp = await detectUndirectedCycleUsingDisjointSet(_graphphbZjJk)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedZOOYEri = false;
		const _graphGkZbFES = new Graph(_isDirectedZOOYEri)
		const _returnValuevoi1UpV = await _graphGkZbFES.getAdjacencyMatrix()
		const _returnValueVZTfpxH = await _graphGkZbFES.reverse()
		const _arrayValueNjqPfSB = false;
		const _arrayValuexIvbFrq = null;
		const _arrayValued6KtTHz = [_arrayValueNjqPfSB, _arrayValuexIvbFrq]
		const _arrayValueUzOVVnT = undefined;
		const _vertexKeyigDO4m = [_arrayValued6KtTHz, _arrayValueUzOVVnT]
		const _returnValueX00Y2Tc = await _graphGkZbFES.getVertexByKey(_vertexKeyigDO4m)
		const _returnValuej2aMC9 = await _graphGkZbFES.getAllVertices()
		const _returnValueqLIeFbl = await detectUndirectedCycleUsingDisjointSet(_graphGkZbFES)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuecGsBhPH = []
		const _getAllVerticesFJLRJq2 = () => { return _returnValuecGsBhPH };
		const _returnValuexFCdE38 = {
		
	}
		const _arrayValuev5zTiuF = () => { return _returnValuexFCdE38 };
		const _returnValueUJp2YgB = false;
		const _arrayValuePtq26NJ = () => { return _returnValueUJp2YgB };
		const _returnValuesqHsD21 = [_arrayValuev5zTiuF, _arrayValuePtq26NJ]
		const _getAllEdgesbQ6KbCP = () => { return _returnValuesqHsD21 };
		const _graphSzAwfXL = {
			"getAllVertices": _getAllVerticesFJLRJq2,
		"getAllEdges": _getAllEdgesbQ6KbCP
	}
		const _returnValuec2YQqtg = await detectUndirectedCycleUsingDisjointSet(_graphSzAwfXL)
	});
})