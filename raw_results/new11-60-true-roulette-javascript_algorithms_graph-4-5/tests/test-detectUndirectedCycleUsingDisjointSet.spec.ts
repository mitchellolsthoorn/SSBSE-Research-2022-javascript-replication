export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _graphdBbtf4Q = "yD8Z2CfzF3CQMjsroTvEfnit5qCANFAFx5UUna5b9fPu5n1qlU0LWAf6onQZfeeTEKnc7HgOm4sOsNBPiFGA03osm42vPvMELn";
		const _returnValue3aiCpp = await detectUndirectedCycleUsingDisjointSet(_graphdBbtf4Q)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedeHkQOQb = true;
		const _graphBlFPgJA = new Graph(_isDirectedeHkQOQb)
		const _returnValuem0oRzQk = await _graphBlFPgJA.getVerticesIndices()
		const _returnValueEF4PfWy = await detectUndirectedCycleUsingDisjointSet(_graphBlFPgJA)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueB1GSQZQ = []
		const _getAllVerticescQ5OLx5 = () => { return _returnValueB1GSQZQ };
		const _arrayValueKVCJOuk = 7.895551468584799;
		const _arrayValueQkbSwJt = -0.6830583526259133;
		const _arrayValueBL5DgaX = undefined;
		const _arrayValueip0ZI4 = null;
		const _arrayValueYCzDeXl = [_arrayValueKVCJOuk, _arrayValueQkbSwJt, _arrayValueBL5DgaX, _arrayValueip0ZI4]
		const _arrayValuedWSSCQr = false;
		const _returnValuedZVUlZe = [_arrayValueYCzDeXl, _arrayValuedWSSCQr]
		const _getAllEdgeslrD0Snp = () => { return _returnValuedZVUlZe };
		const _graphCVgj333 = {
			"getAllVertices": _getAllVerticescQ5OLx5,
		"getAllEdges": _getAllEdgeslrD0Snp
	}
		const _returnValuewZx7Nx = await detectUndirectedCycleUsingDisjointSet(_graphCVgj333)
	});
})