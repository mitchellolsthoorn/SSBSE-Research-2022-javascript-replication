export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueCtOew3i = null;
		const _getAllVerticesJHU803H = () => { return _returnValueCtOew3i };
		const _returnValueLMeT5V1 = undefined;
		const _getAdjacencyMatrixQhmTZvi = () => { return _returnValueLMeT5V1 };
		const _getVerticesIndicesc2fALpJ = undefined;
		const _graphnlX5sZ2 = {
			"getAllVertices": _getAllVerticesJHU803H,
		"getAdjacencyMatrix": _getAdjacencyMatrixQhmTZvi,
		"getVerticesIndices": _getVerticesIndicesc2fALpJ
	}
		const _returnValueoXQsy3Y = await bfTravellingSalesman(_graphnlX5sZ2)
	});

	it('test for bfTravellingSalesman', async () => {
		const _arrayValueAfmdrq = undefined;
		const _arrayValuenSQnTvJ = false;
		const _arrayValueRBCxRE = [_arrayValueAfmdrq, _arrayValuenSQnTvJ]
		const _arrayValue5AIhr7 = -4.78346723281936;
		const _arrayValuecTLVatL = undefined;
		const _returnValueNCYw9xS = [_arrayValueRBCxRE, _arrayValue5AIhr7, _arrayValuecTLVatL]
		const _getAllVerticesqMc5Pcn = () => { return _returnValueNCYw9xS };
		const _arrayValueq7OtDhX = null;
		const _returnValueAWWYwRQ = [_arrayValueq7OtDhX]
		const _getAdjacencyMatrixvuSw6b = () => { return _returnValueAWWYwRQ };
		const _getVerticesIndicesYq4bQQv = undefined;
		const _graphTwJYh1V = {
			"getAllVertices": _getAllVerticesqMc5Pcn,
		"getAdjacencyMatrix": _getAdjacencyMatrixvuSw6b,
		"getVerticesIndices": _getVerticesIndicesYq4bQQv
	}
		const _returnValuebTiJbEL = await bfTravellingSalesman(_graphTwJYh1V)
	});
})