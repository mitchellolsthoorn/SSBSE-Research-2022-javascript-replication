export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueAWPNEQv = undefined;
		const _getAllVerticesDLSyBo5 = () => { return _returnValueAWPNEQv };
		const _returnValueBaaoumK = -6.857583732182866;
		const _getAdjacencyMatrixiLGICAa = () => { return _returnValueBaaoumK };
		const _returnValueKedFuWm = null;
		const _getVerticesIndicesfBRyVUb = () => { return _returnValueKedFuWm };
		const _graphCxTQoG = {
			"getAllVertices": _getAllVerticesDLSyBo5,
		"getAdjacencyMatrix": _getAdjacencyMatrixiLGICAa,
		"getVerticesIndices": _getVerticesIndicesfBRyVUb
	}
		const _returnValuePKAZ7kK = await bfTravellingSalesman(_graphCxTQoG)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueFIxk5aQ = {
		
	}
		const _getAllVerticesgTcYaVA = () => { return _returnValueFIxk5aQ };
		const _returnValueg0LmAZ3 = -3.3420064818333604;
		const _getAdjacencyMatrixjLvR2MB = () => { return _returnValueg0LmAZ3 };
		const _returnValueOBM1bA = -5.207310083667631;
		const _getVerticesIndicesSVYdx7n = () => { return _returnValueOBM1bA };
		const _graphO96CvIs = {
			"getAllVertices": _getAllVerticesgTcYaVA,
		"getAdjacencyMatrix": _getAdjacencyMatrixjLvR2MB,
		"getVerticesIndices": _getVerticesIndicesSVYdx7n
	}
		const _returnValueyu4B57j = await bfTravellingSalesman(_graphO96CvIs)
	});
})