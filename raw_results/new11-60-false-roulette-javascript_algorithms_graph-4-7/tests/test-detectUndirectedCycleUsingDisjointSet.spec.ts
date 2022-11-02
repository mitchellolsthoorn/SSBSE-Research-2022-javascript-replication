export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueFOQx1Ut = true;
		const _getAllVerticesKiKpbRs = () => { return _returnValueFOQx1Ut };
		const _arrayValueChZddGT = "y4HaFSWFASbmsYMhIrtexMbnhkgh482C1yZ6kYSR4bGmJHazMSRnFmVke3RiEtXOsm2aEm";
		const _arrayValueoIeoxfh = null;
		const _returnValueAxfLbs = [_arrayValueChZddGT, _arrayValueoIeoxfh]
		const _getAllEdges6u00ao = () => { return _returnValueAxfLbs };
		const _grapherYbqpS = {
			"getAllVertices": _getAllVerticesKiKpbRs,
		"getAllEdges": _getAllEdges6u00ao
	}
		const _returnValuexciwoVP = await detectUndirectedCycleUsingDisjointSet(_grapherYbqpS)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedfFnU14a = -8.79145784261989;
		const _graphvyfuCdO = new Graph(_isDirectedfFnU14a)
		const _returnValueve1R6DM = await _graphvyfuCdO.getWeight()
		const _returnValueFZHctce = await _graphvyfuCdO.getVerticesIndices()
		const _returnValue7WozrB = await _graphvyfuCdO.reverse()
		const _returnValueDTKWFjL = await detectUndirectedCycleUsingDisjointSet(_graphvyfuCdO)
	});
})