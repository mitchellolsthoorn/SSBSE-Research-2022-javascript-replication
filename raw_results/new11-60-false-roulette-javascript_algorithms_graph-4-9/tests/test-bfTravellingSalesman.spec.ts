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
		const _arrayValuevCmqRl = 0.35887440415445404;
		const _arrayValuePZHj0V7 = true;
		const _arrayValueBIjD9h = 1.7433611762506374;
		const _arrayValueUTQyViU = [_arrayValuePZHj0V7, _arrayValueBIjD9h]
		const _arrayValuePM0mOoq = "w3EkO1eiXS8gPHu7s6V7HmqHYYFtF2ml9md41YcWzM84nsFBRwt8ej7YCU9mQ5kWsPFrsUa";
		const _graphFvP97An = [_arrayValuevCmqRl, _arrayValueUTQyViU, _arrayValuePM0mOoq]
		const _returnValueatmld7B = await bfTravellingSalesman(_graphFvP97An)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueb4UommC = "6NcWZVn8";
		const _returnValueybBnFl9 = () => { return _returnValueb4UommC };
		const _getAllVerticeslKkqWXC = () => { return _returnValueybBnFl9 };
		const _arrayValuecO4zWEK = {
		
	}
		const _arrayValueCoJGcpm = undefined;
		const _returnValuesM7Cxgq = [_arrayValuecO4zWEK, _arrayValueCoJGcpm]
		const _getAdjacencyMatrixvUbeVFd = () => { return _returnValuesM7Cxgq };
		const _returnValueINekeYz = false;
		const _getVerticesIndicesNExZPOO = () => { return _returnValueINekeYz };
		const _graphEVMZtYV = {
			"getAllVertices": _getAllVerticeslKkqWXC,
		"getAdjacencyMatrix": _getAdjacencyMatrixvUbeVFd,
		"getVerticesIndices": _getVerticesIndicesNExZPOO
	}
		const _returnValuerpJyJ9o = await bfTravellingSalesman(_graphEVMZtYV)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirected7zjduc = true;
		const _graphBwKs7n = new Graph(_isDirected7zjduc)
		const _returnValuedwsOUiN = await _graphBwKs7n.getAllVertices()
		const _returnValueNy1dsgV = await _graphBwKs7n.getVerticesIndices()
		const _returnValuekha0j4V = await _graphBwKs7n.getAllVertices()
		const _valueF1iWpt = undefined;
		const _arrayValueUiY4nYY = -6.858113897910824;
		const _arrayValueFZ9azG = [_arrayValueUiY4nYY]
		const _returnValueVW1g9MI = true;
		const _arrayValueYLd3EuU = () => { return _returnValueVW1g9MI };
		const _returnValueSOmIRvv = [_arrayValueFZ9azG, _arrayValueYLd3EuU]
		const _keyCallbackCUkUdg = () => { return _returnValueSOmIRvv };
		const _newVertexqFZG0d8 = new DisjointSetItem(_valueF1iWpt, _keyCallbackCUkUdg)
		const _returnValueFRNgr75 = await _newVertexqFZG0d8.getKey()
		const _returnValuePwVidow = await _graphBwKs7n.addVertex(_newVertexqFZG0d8)
		const _returnValueqTrYfj = await bfTravellingSalesman(_graphBwKs7n)
	});
})