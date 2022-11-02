export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuegoc4s3S = -0.642522249934828;
		const _getAllVerticesjI5Gxut = () => { return _returnValuegoc4s3S };
		const _returnValueVSZv1wb = true;
		const _getAllEdgesfTmJNKM = () => { return _returnValueVSZv1wb };
		const _graphw3o9ePw = {
			"getAllVertices": _getAllVerticesjI5Gxut,
		"getAllEdges": _getAllEdgesfTmJNKM
	}
		const _returnValue90vVO0 = await detectUndirectedCycleUsingDisjointSet(_graphw3o9ePw)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirecteddMbV7fy = -7.741536289066628;
		const _graphLeHDVTy = new Graph(_isDirecteddMbV7fy)
		const _vertexKeyFpMdOE = false;
		const _returnValueqYMexla = await _graphLeHDVTy.getVertexByKey(_vertexKeyFpMdOE)
		const _returnValueFbwLEYB = await _graphLeHDVTy.toString()
		const _returnValuepMpmoVD = await _graphLeHDVTy.getAdjacencyMatrix()
		const _returnValueUyfprWO = await _graphLeHDVTy.getVerticesIndices()
		const _returnValuetMsjtFj = await detectUndirectedCycleUsingDisjointSet(_graphLeHDVTy)
	});
})