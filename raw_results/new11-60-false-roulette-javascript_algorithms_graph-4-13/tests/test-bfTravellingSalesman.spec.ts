export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _graphyzujr3Q = "QUPonb6PFKLJ4bqUtJMzunYlsmNfPcYfNuOwzJ6ogllJtkCiuHgS795TyUi5KzSJGDQCclWobvfXJnKckw6KLEsKH";
		const _returnValueVq0a8UY = await bfTravellingSalesman(_graphyzujr3Q)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueDm9Wk8y = false;
		const _getAllVerticesuB1YpW0 = () => { return _returnValueDm9Wk8y };
		const _returnValueZfOuc3N = -0.8893230021846996;
		const _getAdjacencyMatrixUfLO2Ei = () => { return _returnValueZfOuc3N };
		const _returnValueDlr7aQx = "xW1HL543QzxNjEY7u4P2YJ";
		const _getVerticesIndicesCeZKV7j = () => { return _returnValueDlr7aQx };
		const _graphT7jYi0I = {
			"getAllVertices": _getAllVerticesuB1YpW0,
		"getAdjacencyMatrix": _getAdjacencyMatrixUfLO2Ei,
		"getVerticesIndices": _getVerticesIndicesCeZKV7j
	}
		const _returnValueTxvcl1N = await bfTravellingSalesman(_graphT7jYi0I)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedE66UOXV = false;
		const _graph5Ypbti = new Graph(_isDirectedE66UOXV)
		const _returnValueXKJlmzY = await _graph5Ypbti.getAllVertices()
		const _returnValueIGM6pC = await _graph5Ypbti.getWeight()
		const _returnValueyM33llV = false;
		const _getKey65fDe8 = () => { return _returnValueyM33llV };
		const _newVertexHnI7kEY = {
			"getKey": _getKey65fDe8
	}
		const _returnValueBiVeiK4 = await _graph5Ypbti.addVertex(_newVertexHnI7kEY)
		const _returnValueZIbsH5g = await bfTravellingSalesman(_graph5Ypbti)
	});
})