export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _getVerticesIndiceskGSDPTs = 0.034657332209063085;
		const _arrayValueAp9s4S6 = null;
		const _arrayValueVGJlLBr = undefined;
		const _returnValuepB9kyYn = [_arrayValueAp9s4S6, _arrayValueVGJlLBr]
		const _getAdjacencyMatrixZ9dfIZ6 = () => { return _returnValuepB9kyYn };
		const _arrayValuesAri2PW = null;
		const _arrayValuel3BSor3 = undefined;
		const _returnValuePWC9vHD = [_arrayValuesAri2PW, _arrayValuel3BSor3]
		const _returnValueKZSP6eC = () => { return _returnValuePWC9vHD };
		const _getAllVerticesrlbeWZd = () => { return _returnValueKZSP6eC };
		const _graphSDzgBxD = {
			"getVerticesIndices": _getVerticesIndiceskGSDPTs,
		"getAdjacencyMatrix": _getAdjacencyMatrixZ9dfIZ6,
		"getAllVertices": _getAllVerticesrlbeWZd
	}
		const _returnValuedKu9yGM = await hamiltonianCycle(_graphSDzgBxD)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValuecktHgRV = false;
		const _getVerticesIndicesexdSkzH = () => { return _returnValuecktHgRV };
		const _returnValueEc8zcVH = null;
		const _getAdjacencyMatrixky2m9oT = () => { return _returnValueEc8zcVH };
		const _returnValueC0hJdqX = "Ham5LVWSKMeuKwzfYgCJF8uZ0u6H6Jj";
		const _getAllVerticesjnUzECF = () => { return _returnValueC0hJdqX };
		const _graphWBjyBa8 = {
			"getVerticesIndices": _getVerticesIndicesexdSkzH,
		"getAdjacencyMatrix": _getAdjacencyMatrixky2m9oT,
		"getAllVertices": _getAllVerticesjnUzECF
	}
		const _returnValuePB9rrAE = await hamiltonianCycle(_graphWBjyBa8)
	});
})