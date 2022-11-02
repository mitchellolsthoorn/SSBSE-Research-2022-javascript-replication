export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueRiACZ7f = null;
		const _getAllVerticesBmncohz = () => { return _returnValueRiACZ7f };
		const _getAdjacencyMatrixtOG84nD = -6.708623146913614;
		const _returnValueO5xpOUw = true;
		const _getVerticesIndicesA0h9kpe = () => { return _returnValueO5xpOUw };
		const _graphBjnq11n = {
			"getAllVertices": _getAllVerticesBmncohz,
		"getAdjacencyMatrix": _getAdjacencyMatrixtOG84nD,
		"getVerticesIndices": _getVerticesIndicesA0h9kpe
	}
		const _returnValueDDys4nB = await bfTravellingSalesman(_graphBjnq11n)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueAVkpEG = 1.8227129161598832;
		const _getAllVerticeslu4kkx1 = () => { return _returnValueAVkpEG };
		const _returnValuegmgCx3Q = true;
		const _getAdjacencyMatrixyBWPWxP = () => { return _returnValuegmgCx3Q };
		const _returnValuel0uieHw = null;
		const _getVerticesIndicesyCmCFYR = () => { return _returnValuel0uieHw };
		const _graphwvctp9 = {
			"getAllVertices": _getAllVerticeslu4kkx1,
		"getAdjacencyMatrix": _getAdjacencyMatrixyBWPWxP,
		"getVerticesIndices": _getVerticesIndicesyCmCFYR
	}
		const _returnValuedPZizLL = await bfTravellingSalesman(_graphwvctp9)
	});
})