export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueqV1NH4I = "8eLwSA2oA6ELD1XqmuwzjLMvNaamc1cq3Pc6JeFN5Mb";
		const _returnValueERJBZDh = () => { return _returnValueqV1NH4I };
		const _getVerticesIndicesnwkZ3x6 = () => { return _returnValueERJBZDh };
		const _getAdjacencyMatrixonKQinP = -6.729552445961472;
		const _returnValueis4N020 = 4.972366820949103;
		const _getAllVerticescBPnhmj = () => { return _returnValueis4N020 };
		const _graphXCVQAFF = {
			"getVerticesIndices": _getVerticesIndicesnwkZ3x6,
		"getAdjacencyMatrix": _getAdjacencyMatrixonKQinP,
		"getAllVertices": _getAllVerticescBPnhmj
	}
		const _returnValueB5zuAWV = await hamiltonianCycle(_graphXCVQAFF)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedxLU3Cta = false;
		const _graphY5gUrPV = new Graph(_isDirectedxLU3Cta)
		const _returnValuewGFqh73 = await _graphY5gUrPV.getWeight()
		const _returnValuetZQPZT4 = await hamiltonianCycle(_graphY5gUrPV)
	});
})