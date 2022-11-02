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
		const _graphU19bqaM = 4.787262330239919;
		const _returnValueMCIT0yj = await detectDirectedCycle(_graphU19bqaM)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedSniTfat = true;
		const _graphdafQbu = new Graph(_isDirectedSniTfat)
		const _vertexKeytanByY = []
		const _returnValueDn94Tg = await _graphdafQbu.getVertexByKey(_vertexKeytanByY)
		const _returnValueHEQx4Or = await _graphdafQbu.getVerticesIndices()
		const _returnValuewvqQWei = await detectDirectedCycle(_graphdafQbu)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedPaOUBw0 = false;
		const _graphmKCfBo1 = new Graph(_isDirectedPaOUBw0)
		const _valueQirgsvV = undefined;
		const _returnValuefiEYk5N = null;
		const _keyCallbackfGHx4eZ = () => { return _returnValuefiEYk5N };
		const _newVertexa5ollEQ = new DisjointSetItem(_valueQirgsvV, _keyCallbackfGHx4eZ)
		const _returnValueT8JjlkR = await _newVertexa5ollEQ.getChildren()
		const _returnValueVefQOuu = await _newVertexa5ollEQ.getKey()
		const _returnValuePxQ96mU = await _newVertexa5ollEQ.getRoot()
		const _returnValueTYoYIC = await _graphmKCfBo1.addVertex(_newVertexa5ollEQ)
		const _returnValueRHE8umP = await detectDirectedCycle(_graphmKCfBo1)
	});
})