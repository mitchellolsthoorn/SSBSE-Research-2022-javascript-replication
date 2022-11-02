export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueXH80JlE = undefined;
		const _graphb8oyxCS = () => { return _returnValueXH80JlE };
		const _returnValuePe18ZSb = await hamiltonianCycle(_graphb8oyxCS)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueuqMeoHz = {
		
	}
		const _getVerticesIndicesefa1TQv = () => { return _returnValueuqMeoHz };
		const _returnValuea9yba6 = -6.201079568878691;
		const _returnValueeo1xg5T = () => { return _returnValuea9yba6 };
		const _getAdjacencyMatrixEVbxSq0 = () => { return _returnValueeo1xg5T };
		const _returnValuesGaNwe8 = 7.0146885417417835;
		const _getAllVerticestjuCXVl = () => { return _returnValuesGaNwe8 };
		const _graphRuzz6CJ = {
			"getVerticesIndices": _getVerticesIndicesefa1TQv,
		"getAdjacencyMatrix": _getAdjacencyMatrixEVbxSq0,
		"getAllVertices": _getAllVerticestjuCXVl
	}
		const _returnValuehVHgJt = await hamiltonianCycle(_graphRuzz6CJ)
	});
})