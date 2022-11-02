export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueQQ2bVqC = null;
		const _getAllVerticesl1E9QGH = () => { return _returnValueQQ2bVqC };
		const _returnValuejFY5Qr3 = "rzlnpl7araQs6R8FmPk8dA4wwC8exZOoJn8UzgnUmEGrCuQpaOzp76AohG1c91vZFMsMFm0lxKc0YKvMKw";
		const _getAdjacencyMatrixqVwG99U = () => { return _returnValuejFY5Qr3 };
		const _returnValueHkjl9S1 = undefined;
		const _getVerticesIndicesCPWw2b = () => { return _returnValueHkjl9S1 };
		const _graphVjXbYf = {
			"getAllVertices": _getAllVerticesl1E9QGH,
		"getAdjacencyMatrix": _getAdjacencyMatrixqVwG99U,
		"getVerticesIndices": _getVerticesIndicesCPWw2b
	}
		const _returnValueW7OlcUe = await bfTravellingSalesman(_graphVjXbYf)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuebROx77m = {
		
	}
		const _getAllVerticesGOc7zaI = () => { return _returnValuebROx77m };
		const _returnValueLjaVX0m = "1ILpd1EgjV1XsISExoG7VOKncttKyaT4DD5p6VflJr0qkGOCwoC7CNSXqnbDyGinYU8slaMo4BJWf";
		const _getAdjacencyMatrixvxlv3m1 = () => { return _returnValueLjaVX0m };
		const _returnValuez42q9HX = 7.849970868855895;
		const _getVerticesIndicescB0govC = () => { return _returnValuez42q9HX };
		const _graphpRcVzdQ = {
			"getAllVertices": _getAllVerticesGOc7zaI,
		"getAdjacencyMatrix": _getAdjacencyMatrixvxlv3m1,
		"getVerticesIndices": _getVerticesIndicescB0govC
	}
		const _returnValueJuLSdXb = await bfTravellingSalesman(_graphpRcVzdQ)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedChioIxL = false;
		const _graphnmlAqUH = new Graph(_isDirectedChioIxL)
		const _returnValuexEQFHdJ = await _graphnmlAqUH.getWeight()
		const _arrayValuesgLIt5Z = {
		
	}
		const _returnValueHRz4lEW = [_arrayValuesgLIt5Z]
		const _getKeybKgQe5 = () => { return _returnValueHRz4lEW };
		const _newVertexk0wSzGl = {
			"getKey": _getKeybKgQe5
	}
		const _returnValueMeBTcoG = await _graphnmlAqUH.addVertex(_newVertexk0wSzGl)
		const _returnValueyJvrhX = await _graphnmlAqUH.getWeight()
		const _returnValuepyoGoX4 = await bfTravellingSalesman(_graphnmlAqUH)
	});
})