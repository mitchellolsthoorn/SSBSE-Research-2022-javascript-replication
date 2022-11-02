export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphftetcWp = undefined;
		const _returnValuewbBMhZQ = await bfTravellingSalesman(_graphftetcWp)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueMSGK1f = "8oLeq6seLpLVRCnkoTqhpL9qBT4eeJn5dRSRMLQrMPRbSrY5wLbwAlPQAQUAyZgP5";
		const _getAllVerticesXPXkyfd = () => { return _returnValueMSGK1f };
		const _returnValueh8PgSCq = {
		
	}
		const _getAdjacencyMatrixxqer6Zj = () => { return _returnValueh8PgSCq };
		const _returnValuenmHN9Ov = "Cjoq232DzJfBDpruki5zLUQVa7vuADeTz7I45BYc972vt9uRuj5NLLQGJboRX4mW4AD3XAeygUs2y";
		const _getVerticesIndicesb9hChDw = () => { return _returnValuenmHN9Ov };
		const _graph3WZ3aE = {
			"getAllVertices": _getAllVerticesXPXkyfd,
		"getAdjacencyMatrix": _getAdjacencyMatrixxqer6Zj,
		"getVerticesIndices": _getVerticesIndicesb9hChDw
	}
		const _returnValuexYX0atL = await bfTravellingSalesman(_graph3WZ3aE)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirecteddmNajas = true;
		const _graphoT3lFRi = new Graph(_isDirecteddmNajas)
		const _returnValuegJnsjki = 5.075047791967775;
		const _getKeypAWUmmm = () => { return _returnValuegJnsjki };
		const _newVertexuFH7kgc = {
			"getKey": _getKeypAWUmmm
	}
		const _returnValueLzhlIQF = await _graphoT3lFRi.addVertex(_newVertexuFH7kgc)
		const _arrayValueF8ELdzJ = "khTjeWIaLTEMHffr9QomCz1fymGnUacM7Vftl7VaiW3FJLR7Xf7LkX";
		const _returnValue8D7DIV = [_arrayValueF8ELdzJ]
		const _getKeyNHelqvv = () => { return _returnValue8D7DIV };
		const _startVertexfO7rtIs = {
			"getKey": _getKeyNHelqvv
	}
		const _endVertexOLxMKJZ = "sMfdyJTDMbQ9E1zZRfJlOozhBeaoaflzAGo";
		const _returnValueZ1ZsuBs = await _graphoT3lFRi.findEdge(_startVertexfO7rtIs, _endVertexOLxMKJZ)
		const _returnValueY7K6X3C = await bfTravellingSalesman(_graphoT3lFRi)
	});
})