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
		const _arrayValuelb6Uz4b = null;
		const _arrayValuenBUproN = {
		
	}
		const _arrayValueYfmDCgs = null;
		const _arrayValuepTKVc5e = [_arrayValueYfmDCgs]
		const _arrayValueTdku4BK = false;
		const _arrayValueKczOGEi = [_arrayValuelb6Uz4b, _arrayValuenBUproN, _arrayValuepTKVc5e, _arrayValueTdku4BK]
		const _arrayValueLNO7bSX = {
		
	}
		const _returnValueLaMZTOH = undefined;
		const _arrayValuefX3UFEK = () => { return _returnValueLaMZTOH };
		const _returnValueU0sAMa = [_arrayValueKczOGEi, _arrayValueLNO7bSX, _arrayValuefX3UFEK]
		const _getAllVerticesfsrbgvs = () => { return _returnValueU0sAMa };
		const _graphhvRGMYn = {
			"getAllVertices": _getAllVerticesfsrbgvs
	}
		const _returnValuebyHBmnm = await detectDirectedCycle(_graphhvRGMYn)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueAL61yVX = []
		const _getAllVerticesq9kNfxC = () => { return _returnValueAL61yVX };
		const _graphFJj5BG4 = {
			"getAllVertices": _getAllVerticesq9kNfxC
	}
		const _returnValuerLcd3OJ = await detectDirectedCycle(_graphFJj5BG4)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedU91G1to = false;
		const _graphGsjdRLf = new Graph(_isDirectedU91G1to)
		const _valueF81Ud6P = "7vYN2IQuh6O21wpidCVs19uGivpWjp0bAwAArAFXaQB4DhWb4139JikNxXYIU9vxvvH70hgmedEmkSAlhHzcDd";
		const _returnValuecQKvE49 = null;
		const _keyCallback8Cm6Ma = () => { return _returnValuecQKvE49 };
		const _newVertexvbJe92p = new DisjointSetItem(_valueF81Ud6P, _keyCallback8Cm6Ma)
		const _returnValueRhJl4p9 = await _newVertexvbJe92p.getKey()
		const _returnValueBHLQZ2Q = await _newVertexvbJe92p.isRoot()
		const _returnValueho5eY1M = await _graphGsjdRLf.addVertex(_newVertexvbJe92p)
		const _returnValueluvnJ0S = await detectDirectedCycle(_graphGsjdRLf)
	});
})