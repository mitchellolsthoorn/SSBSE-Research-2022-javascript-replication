export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValue0u5tv1 = 2.310119650934597;
		const _getAllVerticesVvcwO9 = () => { return _returnValue0u5tv1 };
		const _returnValueseNRqf7 = -0.8567868767689575;
		const _getAdjacencyMatrixGujKLu = () => { return _returnValueseNRqf7 };
		const _returnValuer81mXOT = {
		
	}
		const _getVerticesIndicesam9eOwG = () => { return _returnValuer81mXOT };
		const _graphgLhUIfR = {
			"getAllVertices": _getAllVerticesVvcwO9,
		"getAdjacencyMatrix": _getAdjacencyMatrixGujKLu,
		"getVerticesIndices": _getVerticesIndicesam9eOwG
	}
		const _returnValueYu4WRNR = await bfTravellingSalesman(_graphgLhUIfR)
	});
})