export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphBF7G6b6 = -1.4270881957456396;
		const _returnValuekN5tWua = await bfTravellingSalesman(_graphBF7G6b6)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueK84cWbd = -2.5622519904631877;
		const _returnValueZAJ6flJ = () => { return _returnValueK84cWbd };
		const _getAllVerticesiFnqshm = () => { return _returnValueZAJ6flJ };
		const _returnValueTeceLdS = false;
		const _getAdjacencyMatrixISdut4 = () => { return _returnValueTeceLdS };
		const _getVerticesIndicesSxkOTPM = undefined;
		const _graphgLZRiiG = {
			"getAllVertices": _getAllVerticesiFnqshm,
		"getAdjacencyMatrix": _getAdjacencyMatrixISdut4,
		"getVerticesIndices": _getVerticesIndicesSxkOTPM
	}
		const _returnValueWoak9FR = await bfTravellingSalesman(_graphgLZRiiG)
	});
})