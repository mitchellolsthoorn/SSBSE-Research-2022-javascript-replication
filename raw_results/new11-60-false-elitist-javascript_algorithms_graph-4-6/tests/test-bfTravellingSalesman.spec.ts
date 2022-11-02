export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphLvQWzRT = undefined;
		const _returnValueMSAPOxs = await bfTravellingSalesman(_graphLvQWzRT)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueUJnkO5x = 7.476461275179393;
		const _getAllVerticesXzVickS = () => { return _returnValueUJnkO5x };
		const _returnValuexwj4J8 = 2.9601309060567775;
		const _arrayValuedqigddV = () => { return _returnValuexwj4J8 };
		const _arrayValueAyG3NAk = 3.3491910409767023;
		const _returnValueUYws1tj = [_arrayValuedqigddV, _arrayValueAyG3NAk]
		const _getAdjacencyMatrixy1vYMav = () => { return _returnValueUYws1tj };
		const _returnValueDOK7yV1 = false;
		const _getVerticesIndicesx2BUFva = () => { return _returnValueDOK7yV1 };
		const _graphNaAm83J = {
			"getAllVertices": _getAllVerticesXzVickS,
		"getAdjacencyMatrix": _getAdjacencyMatrixy1vYMav,
		"getVerticesIndices": _getVerticesIndicesx2BUFva
	}
		const _returnValueeFF7I8y = await bfTravellingSalesman(_graphNaAm83J)
	});
})