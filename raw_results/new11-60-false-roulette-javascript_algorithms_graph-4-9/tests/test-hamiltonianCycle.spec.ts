export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValue2MUApe = {
		
	}
		const _getVerticesIndicesc1oUEp6 = () => { return _returnValue2MUApe };
		const _returnValueIQvIctD = "o0SQwCXgYNQo5vTNnb3a58mbVqOZFPAiBiRWXv4fl7fyk2jHpzLl5nsMYk4EBMXkMa9AlagV";
		const _getAdjacencyMatrixytC5E4N = () => { return _returnValueIQvIctD };
		const _returnValueaEBQ63Y = "XTvKacAEBxDXum6kSCejtL2jVnwNzowWtctbNRwD2eicc5a32yFFHfAdTWIx1NlHcxZ89mZYV1wog5HI1ytsUqs";
		const _getAllVerticesgaYnlBB = () => { return _returnValueaEBQ63Y };
		const _graphZm5E3KA = {
			"getVerticesIndices": _getVerticesIndicesc1oUEp6,
		"getAdjacencyMatrix": _getAdjacencyMatrixytC5E4N,
		"getAllVertices": _getAllVerticesgaYnlBB
	}
		const _returnValuesHnenUl = await hamiltonianCycle(_graphZm5E3KA)
	});
})