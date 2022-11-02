export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueDTPc44A = []
		const _getVerticesIndicesJGifTDV = () => { return _returnValueDTPc44A };
		const _returnValuevz0TsKG = null;
		const _getAdjacencyMatrixZJ7rm4Q = () => { return _returnValuevz0TsKG };
		const _arrayValueXVKaDaZ = undefined;
		const _arrayValuelXsofT5 = {
		
	}
		const _arrayValuecE8M4HQ = null;
		const _arrayValueu4wAOh = [_arrayValuecE8M4HQ]
		const _arrayValuebflqYoq = {
		
	}
		const _returnValuex5puduP = [_arrayValueXVKaDaZ, _arrayValuelXsofT5, _arrayValueu4wAOh, _arrayValuebflqYoq]
		const _getAllVerticesgXYoQf = () => { return _returnValuex5puduP };
		const _graphMRLfr6v = {
			"getVerticesIndices": _getVerticesIndicesJGifTDV,
		"getAdjacencyMatrix": _getAdjacencyMatrixZJ7rm4Q,
		"getAllVertices": _getAllVerticesgXYoQf
	}
		const _returnValueqEVvcRU = await hamiltonianCycle(_graphMRLfr6v)
	});
})