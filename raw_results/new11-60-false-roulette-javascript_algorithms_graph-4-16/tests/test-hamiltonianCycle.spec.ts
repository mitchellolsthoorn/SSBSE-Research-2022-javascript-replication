export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _graphGoillnD = undefined;
		const _returnValuemOEsitx = await hamiltonianCycle(_graphGoillnD)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValuedluTJkC = null;
		const _getVerticesIndicesrlGr8lf = () => { return _returnValuedluTJkC };
		const _returnValueWtVHt7R = undefined;
		const _getAdjacencyMatrixF7i1372 = () => { return _returnValueWtVHt7R };
		const _returnValueiAghxa = true;
		const _getAllVerticesUUh3Mz = () => { return _returnValueiAghxa };
		const _graphmHy87yZ = {
			"getVerticesIndices": _getVerticesIndicesrlGr8lf,
		"getAdjacencyMatrix": _getAdjacencyMatrixF7i1372,
		"getAllVertices": _getAllVerticesUUh3Mz
	}
		const _returnValuecTbezvp = await hamiltonianCycle(_graphmHy87yZ)
	});
})