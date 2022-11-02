export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import TrieNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/trie/TrieNode.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _graphKzZIfT4 = undefined;
		const _returnValuexY4Z08 = await detectUndirectedCycleUsingDisjointSet(_graphKzZIfT4)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedw3D6lrM = false;
		const _graphY5e0BKL = new Graph(_isDirectedw3D6lrM)
		const _returnValue3YzgwT = await _graphY5e0BKL.getAdjacencyMatrix()
		const _valuesuLnqxB = false;
		const _returnValueVv1GWn8 = {
		
	}
		const _keyCallbackbXIrKN7 = () => { return _returnValueVv1GWn8 };
		const _newVertexkPMQrzi = new DisjointSetItem(_valuesuLnqxB, _keyCallbackbXIrKN7)
		const _returnValuepTElNC = await _newVertexkPMQrzi.getChildren()
		const _returnValuexHso1hI = await _newVertexkPMQrzi.getRank()
		const _returnValuen4965ET = await _newVertexkPMQrzi.getRoot()
		const _characterIXgiCWn = {
		
	}
		const _isCompleteWordS2LMcIN = true;
		const _parentItemQ6aNSr7 = new TrieNode(_characterIXgiCWn, _isCompleteWordS2LMcIN)
		const _returnValueUdKsgLm = await _parentItemQ6aNSr7.toString()
		const _returnValueKkdufpx = await _parentItemQ6aNSr7.hasChildren()
		const _characterwpljMlw = "C7Mngf8KUeOz7QlY1lUHchUY";
		const _returnValuePsXnVQ9 = await _parentItemQ6aNSr7.hasChild(_characterwpljMlw)
		const _characterQdsSmNV = -6.055932550745373;
		const _returnValueuYlKQH = await _parentItemQ6aNSr7.removeChild(_characterQdsSmNV)
		const _arrayValueChGhJKz = "nx69B6sQugGQ8E";
		const _arrayValueRfDU9MI = true;
		const _arrayValueLV0M432 = 1.970919879394252;
		const _arrayValueMUab5AA = "UuJgPjzXsPBayNOYVJNZaOPBrDppON9uWbkn5D9Bp5Vco1CDVVLWT2E79rQANivWhf039ulQPh";
		const _returnValueHgwKdfC = [_arrayValueChGhJKz, _arrayValueRfDU9MI, _arrayValueLV0M432, _arrayValueMUab5AA]
		const _characterLQuRU5O = () => { return _returnValueHgwKdfC };
		const _returnValueo7WORx5 = await _parentItemQ6aNSr7.getChild(_characterLQuRU5O)
		const _forceSettingParentChildTuMn1t = true;
		const _returnValueMxXYePr = await _newVertexkPMQrzi.setParent(_parentItemQ6aNSr7, _forceSettingParentChildTuMn1t)
		const _returnValuewDge85 = await _graphY5e0BKL.addVertex(_newVertexkPMQrzi)
		const _returnValuez8SkgBR = await detectUndirectedCycleUsingDisjointSet(_graphY5e0BKL)
	});
})