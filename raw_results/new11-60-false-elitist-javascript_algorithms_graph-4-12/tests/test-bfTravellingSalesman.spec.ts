export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValuej0QRs1 = null;
		const _getAllVerticesvpElb1E = () => { return _returnValuej0QRs1 };
		const _returnValueq68mnxz = null;
		const _getAdjacencyMatrixe3Lf14 = () => { return _returnValueq68mnxz };
		const _returnValueDaqiDTG = undefined;
		const _getVerticesIndicesDgW7I89 = () => { return _returnValueDaqiDTG };
		const _graphKypof2y = {
			"getAllVertices": _getAllVerticesvpElb1E,
		"getAdjacencyMatrix": _getAdjacencyMatrixe3Lf14,
		"getVerticesIndices": _getVerticesIndicesDgW7I89
	}
		const _returnValueK2wPSJ1 = await bfTravellingSalesman(_graphKypof2y)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueiTimiEq = {
		
	}
		const _getAllVerticesScEFk1 = () => { return _returnValueiTimiEq };
		const _returnValueScEkQey = {
		
	}
		const _getAdjacencyMatrixhpFY6AZ = () => { return _returnValueScEkQey };
		const _returnValueniKarlw = false;
		const _getVerticesIndicesIEv4Pvw = () => { return _returnValueniKarlw };
		const _graphYUxyM1s = {
			"getAllVertices": _getAllVerticesScEFk1,
		"getAdjacencyMatrix": _getAdjacencyMatrixhpFY6AZ,
		"getVerticesIndices": _getVerticesIndicesIEv4Pvw
	}
		const _returnValueQtv1vOZ = await bfTravellingSalesman(_graphYUxyM1s)
	});
})