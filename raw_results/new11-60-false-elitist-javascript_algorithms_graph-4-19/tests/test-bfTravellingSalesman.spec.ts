export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueOBHetTo = undefined;
		const _getAllVerticesJEBOLdV = () => { return _returnValueOBHetTo };
		const _returnValuekfmlQq3 = true;
		const _getAdjacencyMatrixRztiiOO = () => { return _returnValuekfmlQq3 };
		const _returnValuenxZB4Lb = false;
		const _getVerticesIndicesEyG7Htq = () => { return _returnValuenxZB4Lb };
		const _graphSxqkuZu = {
			"getAllVertices": _getAllVerticesJEBOLdV,
		"getAdjacencyMatrix": _getAdjacencyMatrixRztiiOO,
		"getVerticesIndices": _getVerticesIndicesEyG7Htq
	}
		const _returnValueeBzDseC = await bfTravellingSalesman(_graphSxqkuZu)
	});

	it('test for bfTravellingSalesman', async () => {
		const _arrayValueGo3i9fU = 6.810577836850605;
		const _returnValueF2MHyQn = [_arrayValueGo3i9fU]
		const _returnValuePHpmCj2 = () => { return _returnValueF2MHyQn };
		const _getAllVerticesQJvac5 = () => { return _returnValuePHpmCj2 };
		const _arrayValuedPT7rwE = 2.1381429898587427;
		const _arrayValueILOw4r6 = []
		const _arrayValueeNplCW2 = {
		
	}
		const _returnValuehC1mQax = [_arrayValuedPT7rwE, _arrayValueILOw4r6, _arrayValueeNplCW2]
		const _getAdjacencyMatrixEZ5juuI = () => { return _returnValuehC1mQax };
		const _getVerticesIndicesn5YoQbR = {
		
	}
		const _graphtYwFiDc = {
			"getAllVertices": _getAllVerticesQJvac5,
		"getAdjacencyMatrix": _getAdjacencyMatrixEZ5juuI,
		"getVerticesIndices": _getVerticesIndicesn5YoQbR
	}
		const _returnValueGUNtBwj = await bfTravellingSalesman(_graphtYwFiDc)
	});
})