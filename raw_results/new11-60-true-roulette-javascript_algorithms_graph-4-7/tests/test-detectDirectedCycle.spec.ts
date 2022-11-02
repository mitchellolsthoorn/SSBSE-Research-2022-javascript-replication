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
		const _graphxHg8xwi = "zYMrWG7nWPqMbvNGoSN5e5pIe0Lmzh2n2HeFRF3XXsANWpWha3sGgBYXfrj2iNIS9X4vfd0KX1vcy0SBHcu";
		const _returnValuedNEvTvb = await detectDirectedCycle(_graphxHg8xwi)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedCk75Tqs = true;
		const _graphSb8chF = new Graph(_isDirectedCk75Tqs)
		const _returnValueLJ0TTDo = await _graphSb8chF.reverse()
		const _returnValueAS0PGbe = await detectDirectedCycle(_graphSb8chF)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedF2lTpaQ = true;
		const _graphJEyZX3S = new Graph(_isDirectedF2lTpaQ)
		const _valuehpUp3b = 5.7664170110758235;
		const _returnValuevCa08bs = {
		
	}
		const _keyCallbackR5GqtjL = () => { return _returnValuevCa08bs };
		const _newVertexH1QOVOb = new DisjointSetItem(_valuehpUp3b, _keyCallbackR5GqtjL)
		const _returnValuedhmagEZ = {
		
	}
		const _addChildqUzy02w = () => { return _returnValuedhmagEZ };
		const _parentItemyHom3fo = {
			"addChild": _addChildqUzy02w
	}
		const _forceSettingParentChildEUQ7D4P = true;
		const _returnValuelXvupoY = await _newVertexH1QOVOb.setParent(_parentItemyHom3fo, _forceSettingParentChildEUQ7D4P)
		const _returnValueSYf5AIs = await _newVertexH1QOVOb.getChildren()
		const _returnValuejlBLMaL = await _newVertexH1QOVOb.isRoot()
		const _returnValueiH5ahDM = await _graphJEyZX3S.addVertex(_newVertexH1QOVOb)
		const _returnValueb8mdz43 = await _graphJEyZX3S.getWeight()
		const _valuefeOXdqG = undefined;
		const _returnValuegxGltRt = -6.315532903158764;
		const _keyCallbackPwGsQ4k = () => { return _returnValuegxGltRt };
		const _newVertexneZOrr = new DisjointSetItem(_valuefeOXdqG, _keyCallbackPwGsQ4k)
		const _returnValueaCGIgxg = await _newVertexneZOrr.getRank()
		const _returnValueTdLvrzU = await _newVertexneZOrr.getKey()
		const _returnValueGJVP3FU = await _graphJEyZX3S.addVertex(_newVertexneZOrr)
		const _returnValueTbRpKzI = await detectDirectedCycle(_graphJEyZX3S)
	});
})