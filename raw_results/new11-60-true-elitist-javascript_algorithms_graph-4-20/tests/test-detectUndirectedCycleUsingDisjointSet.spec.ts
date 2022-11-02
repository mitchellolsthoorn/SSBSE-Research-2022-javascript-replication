export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValueUtDfnRM = undefined;
		const _arrayValueG5li3AH = true;
		const _returnValueUCuxRbq = -4.0993330473938645;
		const _arrayValuezXaw2P = () => { return _returnValueUCuxRbq };
		const _arrayValueqTgmVXr = false;
		const _arrayValue52s3WN = null;
		const _arrayValueJoeUsql = [_arrayValueqTgmVXr, _arrayValue52s3WN]
		const _arrayValueFSslni9 = [_arrayValueG5li3AH, _arrayValuezXaw2P, _arrayValueJoeUsql]
		const _returnValuePSvDRbf = [_arrayValueUtDfnRM, _arrayValueFSslni9]
		const _graphGKKBj0V = () => { return _returnValuePSvDRbf };
		const _returnValuemwlBJ5q = await detectUndirectedCycleUsingDisjointSet(_graphGKKBj0V)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedT2G5lQp = true;
		const _graphDRmEek9 = new Graph(_isDirectedT2G5lQp)
		const _returnValueSA1j5i5 = await _graphDRmEek9.getAllEdges()
		const _returnValuer65t4EO = await _graphDRmEek9.getVerticesIndices()
		const _returnValueQcZFwGr = await detectUndirectedCycleUsingDisjointSet(_graphDRmEek9)
	});
})