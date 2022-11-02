export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _arrayValueMWzCmJE = true;
		const _returnValueoWXnHEd = undefined;
		const _arrayValueQCybSSO = () => { return _returnValueoWXnHEd };
		const _arrayValuehdGHUsQ = 0.48273079935905727;
		const _arrayValue3C9WJw = [_arrayValueQCybSSO, _arrayValuehdGHUsQ]
		const _arrayValueSBYz6ZI = 7.717436669987283;
		const _arrayValueVKzROK = undefined;
		const _arrayValuefBNaBin = [_arrayValueSBYz6ZI, _arrayValueVKzROK]
		const _graphkrk67kQ = [_arrayValueMWzCmJE, _arrayValue3C9WJw, _arrayValuefBNaBin]
		const _returnValueFdn8C8 = await detectDirectedCycle(_graphkrk67kQ)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedkfONzMQ = false;
		const _graphh1jAAUB = new Graph(_isDirectedkfONzMQ)
		const _vertexKeyGNCwDr = {
		
	}
		const _returnValueIVM87ce = await _graphh1jAAUB.getVertexByKey(_vertexKeyGNCwDr)
		const _returnValue37beg6 = await _graphh1jAAUB.reverse()
		const _returnValueYkrRvz = await _graphh1jAAUB.getVerticesIndices()
		const _returnValuergQvHBi = await detectDirectedCycle(_graphh1jAAUB)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedJOAyZvB = true;
		const _graphYlNVssP = new Graph(_isDirectedJOAyZvB)
		const _returnValueCteYRl4 = await _graphYlNVssP.getVerticesIndices()
		const _returnValuefGQQiut = await _graphYlNVssP.toString()
		const _arrayValueAHEc8Y0 = false;
		const _arrayValueKXxVpD3 = undefined;
		const _arrayValueOzmUBRu = {
		
	}
		const _valuekrPNsbG = [_arrayValueAHEc8Y0, _arrayValueKXxVpD3, _arrayValueOzmUBRu]
		const _returnValuesaEQ3i2 = undefined;
		const _keyCallbackfwSp4Dm = () => { return _returnValuesaEQ3i2 };
		const _newVertexNPFRwi7 = new DisjointSetItem(_valuekrPNsbG, _keyCallbackfwSp4Dm)
		const _returnValuekJYlpE = await _newVertexNPFRwi7.getRoot()
		const _returnValueVVidTwu = await _graphYlNVssP.addVertex(_newVertexNPFRwi7)
		const _returnValuesHujzdZ = await _graphYlNVssP.getWeight()
		const _returnValuejBNPYLw = await detectDirectedCycle(_graphYlNVssP)
	});
})