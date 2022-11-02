export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _getVerticesIndicesr71jXWx = true;
		const _returnValueQlD9iPF = "FaHUfqjRnI6vbKP6b0WMMolnfXmK0K";
		const _getAdjacencyMatrixaAAVCC2 = () => { return _returnValueQlD9iPF };
		const _returnValueFuHhMEi = "lgcb5Hk4QetvqFGY71dniYc1FgNYg2Xkn8vqFtx3bz7mZzRxjpUr6nI91M8UBkxvB6qHc2OG4luQcsqU7EUdnNbJCg";
		const _getAllVerticesoNyzoWO = () => { return _returnValueFuHhMEi };
		const _graphPsxyCS = {
			"getVerticesIndices": _getVerticesIndicesr71jXWx,
		"getAdjacencyMatrix": _getAdjacencyMatrixaAAVCC2,
		"getAllVertices": _getAllVerticesoNyzoWO
	}
		const _returnValuewUx1XyS = await hamiltonianCycle(_graphPsxyCS)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValuePQPe9oa = []
		const _getVerticesIndices8R0904 = () => { return _returnValuePQPe9oa };
		const _returnValuek320IV = null;
		const _getAdjacencyMatrixS6Q9IzX = () => { return _returnValuek320IV };
		const _arrayValueRMoX4cc = "5WMDLYC9L7AGAnv7fU5qYYcDNGl1mlcOufrcJdCKllUcQKYg9qPzwBpwnQxNNFpyyG5U4Yety";
		const _arrayValueifNctIV = {
		
	}
		const _returnValueu3sdlwG = 1.10130386659608;
		const _arrayValueRZrPOIu = () => { return _returnValueu3sdlwG };
		const _arrayValueoEK7nmX = [_arrayValueRMoX4cc, _arrayValueifNctIV, _arrayValueRZrPOIu]
		const _arrayValueXPbvr1K = [_arrayValueoEK7nmX]
		const _returnValueYDmlx7i = [_arrayValueXPbvr1K]
		const _getAllVerticesx6wRMKa = () => { return _returnValueYDmlx7i };
		const _graphDRrjOhF = {
			"getVerticesIndices": _getVerticesIndices8R0904,
		"getAdjacencyMatrix": _getAdjacencyMatrixS6Q9IzX,
		"getAllVertices": _getAllVerticesx6wRMKa
	}
		const _returnValueVlSUfuM = await hamiltonianCycle(_graphDRrjOhF)
	});
})