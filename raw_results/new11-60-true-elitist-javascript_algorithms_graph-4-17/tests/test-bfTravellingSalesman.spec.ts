export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValuePdSE6NB = undefined;
		const _getAllVerticesLxbEPHd = () => { return _returnValuePdSE6NB };
		const _getAdjacencyMatrixgBZxdFH = undefined;
		const _returnValueB3AA5gK = null;
		const _getVerticesIndiceskKNJ55r = () => { return _returnValueB3AA5gK };
		const _graphWEehFRp = {
			"getAllVertices": _getAllVerticesLxbEPHd,
		"getAdjacencyMatrix": _getAdjacencyMatrixgBZxdFH,
		"getVerticesIndices": _getVerticesIndiceskKNJ55r
	}
		const _returnValueFLXfqwT = await bfTravellingSalesman(_graphWEehFRp)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuehOA9Rwe = -3.4617382927160474;
		const _returnValue1gB3mX = () => { return _returnValuehOA9Rwe };
		const _returnValueB4jdh9M = () => { return _returnValue1gB3mX };
		const _getAllVerticespMibVUU = () => { return _returnValueB4jdh9M };
		const _returnValueoJH15a3 = undefined;
		const _getAdjacencyMatrixa28zXi = () => { return _returnValueoJH15a3 };
		const _returnValueH3y7Uxz = false;
		const _getVerticesIndicesbFtnAD2 = () => { return _returnValueH3y7Uxz };
		const _graphoifkq6 = {
			"getAllVertices": _getAllVerticespMibVUU,
		"getAdjacencyMatrix": _getAdjacencyMatrixa28zXi,
		"getVerticesIndices": _getVerticesIndicesbFtnAD2
	}
		const _returnValueQunubad = await bfTravellingSalesman(_graphoifkq6)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedVtltLNU = false;
		const _graphio7VkTv = new Graph(_isDirectedVtltLNU)
		const _returnValueXCAFpyR = -4.801256474952282;
		const _valueUzZ0mLa = () => { return _returnValueXCAFpyR };
		const _returnValuelBhNyqW = undefined;
		const _keyCallbackOTr1mKM = () => { return _returnValuelBhNyqW };
		const _newVertextRAKZIc = new DisjointSetItem(_valueUzZ0mLa, _keyCallbackOTr1mKM)
		const _returnValueikfq0gL = await _newVertextRAKZIc.getRoot()
		const _valueVkceq6K = "6KTGmEFbE5AsnsBRAhAMmVhnv1xVFkhkhKhIQVbEgk70BAzsxHXO6jWQr1KXVJypmHuE72TbPnakNBM5pxgihZQU6UhFWSF";
		const _returnValuegirjbU2 = null;
		const _keyCallbackSGfqg9h = () => { return _returnValuegirjbU2 };
		const _parentItembDxjBcK = new DisjointSetItem(_valueVkceq6K, _keyCallbackSGfqg9h)
		const _returnValueboHqL6S = await _parentItembDxjBcK.getRank()
		const _returnValueiOgtzNa = await _parentItembDxjBcK.getRoot()
		const _returnValueUXFRQ9 = await _parentItembDxjBcK.getRoot()
		const _forceSettingParentChildPwtgBxx = true;
		const _returnValuerHE6UhI = await _newVertextRAKZIc.setParent(_parentItembDxjBcK, _forceSettingParentChildPwtgBxx)
		const _returnValueivOJVI = await _newVertextRAKZIc.getRank()
		const _returnValuedX70zWV = await _newVertextRAKZIc.getRoot()
		const _returnValueFXVNDj6 = await _graphio7VkTv.addVertex(_newVertextRAKZIc)
		const _returnValuebBOhZXv = await _graphio7VkTv.getAllVertices()
		const _returnValueOwtl7Rn = await bfTravellingSalesman(_graphio7VkTv)
	});
})