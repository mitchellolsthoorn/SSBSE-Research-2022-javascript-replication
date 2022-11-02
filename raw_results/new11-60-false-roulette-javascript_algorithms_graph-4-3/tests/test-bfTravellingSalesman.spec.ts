export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValuetAJiOcc = undefined;
		const _graphe4jPLnJ = () => { return _returnValuetAJiOcc };
		const _returnValueaWG3OZs = await bfTravellingSalesman(_graphe4jPLnJ)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuer11yTSG = -0.4918948163353569;
		const _getAllVerticesc6p3k9z = () => { return _returnValuer11yTSG };
		const _returnValuebKiPGk8 = "fk9WA2PuVf2PCOiH0jChA5BHlrSz8RABWvlufaySJ";
		const _getAdjacencyMatrixydxmKO4 = () => { return _returnValuebKiPGk8 };
		const _returnValueTeCYHqx = null;
		const _getVerticesIndicesFewz5zl = () => { return _returnValueTeCYHqx };
		const _graphLRA7Bp = {
			"getAllVertices": _getAllVerticesc6p3k9z,
		"getAdjacencyMatrix": _getAdjacencyMatrixydxmKO4,
		"getVerticesIndices": _getVerticesIndicesFewz5zl
	}
		const _returnValueHuDIv9c = await bfTravellingSalesman(_graphLRA7Bp)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedxEFM3eB = false;
		const _graphcu5kyt = new Graph(_isDirectedxEFM3eB)
		const _returnValue1cw32c = await _graphcu5kyt.getAdjacencyMatrix()
		const _arrayValueyq2ZfDK = null;
		const _arrayValueIbVGLAO = [_arrayValueyq2ZfDK]
		const _arrayValueRX84FTe = "sxarH8k3fK3Sk2LdZIrM4Bq97ENpQR5CQy3J2PIgVgz5zmpic1pSPQug7dtgvTpcqd3i9pBcahNmf8tvaw5ri4zWTni";
		const _arrayValuegyEABWW = {
		
	}
		const _returnValueBhhrfm4 = [_arrayValueIbVGLAO, _arrayValueRX84FTe, _arrayValuegyEABWW]
		const _getKeyxfLYlXC = () => { return _returnValueBhhrfm4 };
		const _newVertexDXlDM8p = {
			"getKey": _getKeyxfLYlXC
	}
		const _returnValuemWo4uhe = await _graphcu5kyt.addVertex(_newVertexDXlDM8p)
		const _returnValuevykEEcd = await bfTravellingSalesman(_graphcu5kyt)
	});
})