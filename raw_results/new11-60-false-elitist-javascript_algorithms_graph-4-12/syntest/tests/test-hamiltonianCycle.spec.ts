export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueJ66TA6z = {
		
	}
		const _getVerticesIndicesy3WjOBr = () => { return _returnValueJ66TA6z };
		const _returnValueGyQZpsp = null;
		const _getAdjacencyMatrixeESk8rB = () => { return _returnValueGyQZpsp };
		const _returnValuePpRDz89 = undefined;
		const _returnValueKtiP7K = () => { return _returnValuePpRDz89 };
		const _arrayValueL9Jt635 = () => { return _returnValueKtiP7K };
		const _arrayValueBwKpyBj = -0.014815655952386209;
		const _returnValuehIMV2Bi = [_arrayValueL9Jt635, _arrayValueBwKpyBj]
		const _getAllVerticesvrKJC0s = () => { return _returnValuehIMV2Bi };
		const _graphI5Qg8xJ = {
			"getVerticesIndices": _getVerticesIndicesy3WjOBr,
		"getAdjacencyMatrix": _getAdjacencyMatrixeESk8rB,
		"getAllVertices": _getAllVerticesvrKJC0s
	}
		const _returnValueSnOZttB = await hamiltonianCycle(_graphI5Qg8xJ)
	});
})