export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _graphIKHKLXc = "I9CJ5TgoceYe8JxsupPUzt140GOpc9A8SN";
		const _returnValuextbdHsB = await detectUndirectedCycleUsingDisjointSet(_graphIKHKLXc)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedEASBWfC = true;
		const _graphl4VAz7 = new Graph(_isDirectedEASBWfC)
		const _returnValueZPbvh5q = await _graphl4VAz7.getAllVertices()
		const _vertexKeydwCMT8 = "wMaKhni9jB33ZjwtW";
		const _returnValueiM3Bzeo = await _graphl4VAz7.getVertexByKey(_vertexKeydwCMT8)
		const _returnValuepXThyWq = await _graphl4VAz7.reverse()
		const _returnValueMSPnwMq = await _graphl4VAz7.getAllEdges()
		const _returnValueQFSRLXn = await detectUndirectedCycleUsingDisjointSet(_graphl4VAz7)
	});
})