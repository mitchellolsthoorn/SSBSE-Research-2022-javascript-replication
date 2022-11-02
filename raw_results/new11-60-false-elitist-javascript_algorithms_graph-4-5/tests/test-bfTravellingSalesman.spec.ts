export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueWY0V0Bh = undefined;
		const _getAllVerticesJvdHzpW = () => { return _returnValueWY0V0Bh };
		const _returnValue25FruK = null;
		const _getAdjacencyMatrixZwnkZM1 = () => { return _returnValue25FruK };
		const _returnValuePmCOvj8 = null;
		const _getVerticesIndicesNkOxqPp = () => { return _returnValuePmCOvj8 };
		const _graphUW5iB8w = {
			"getAllVertices": _getAllVerticesJvdHzpW,
		"getAdjacencyMatrix": _getAdjacencyMatrixZwnkZM1,
		"getVerticesIndices": _getVerticesIndicesNkOxqPp
	}
		const _returnValueLbwmeN1 = await bfTravellingSalesman(_graphUW5iB8w)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueY5cZwU = "rUPNXbmZJcX2ZgAweSAKfBiG1LRMPbQnd8EHdfejZSV3JFswnL0k8r6bn5awAEJS0iEDkV5R";
		const _getAllVerticesmBnHTiU = () => { return _returnValueY5cZwU };
		const _returnValuea0KiZVl = true;
		const _getAdjacencyMatrixVUMuui1 = () => { return _returnValuea0KiZVl };
		const _returnValueJXT4jcP = "vsoEMFhE5sNEbEvVcA9uXedg4EeVXu6obozzuqSHGSQLNu5LISatzhvop6vpLs9hqa2FrI3DumdKzhzMFSLtziRBuuIvA";
		const _getVerticesIndicesEkpYpRA = () => { return _returnValueJXT4jcP };
		const _graphoudbg2y = {
			"getAllVertices": _getAllVerticesmBnHTiU,
		"getAdjacencyMatrix": _getAdjacencyMatrixVUMuui1,
		"getVerticesIndices": _getVerticesIndicesEkpYpRA
	}
		const _returnValuei3PToWT = await bfTravellingSalesman(_graphoudbg2y)
	});
})