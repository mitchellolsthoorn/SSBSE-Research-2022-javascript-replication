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
		const _returnValueur3Nnu3 = null;
		const _getAllVerticesbfZEv65 = () => { return _returnValueur3Nnu3 };
		const _graphebQjtnK = {
			"getAllVertices": _getAllVerticesbfZEv65
	}
		const _returnValuefB6VecW = await detectDirectedCycle(_graphebQjtnK)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedc0dJ4x6 = false;
		const _graphy0sJp2K = new Graph(_isDirectedc0dJ4x6)
		const _returnValueYLZClZv = await _graphy0sJp2K.getAllEdges()
		const _returnValueoW7SMdj = await _graphy0sJp2K.getAdjacencyMatrix()
		const _vertexKeyV7oAP6 = 1.9926871725150068;
		const _returnValueoSr2lo7 = await _graphy0sJp2K.getVertexByKey(_vertexKeyV7oAP6)
		const _returnValuecEZggtc = await _graphy0sJp2K.getWeight()
		const _returnValuebbYzpp = await _graphy0sJp2K.getAllVertices()
		const _returnValuedYfLdEp = await detectDirectedCycle(_graphy0sJp2K)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedQ447nv = true;
		const _graphWbAoqS1 = new Graph(_isDirectedQ447nv)
		const _returnValueK9zZAec = await _graphWbAoqS1.getVerticesIndices()
		const _valueKcKnXaw = false;
		const _returnValuep0NhOgz = true;
		const _keyCallbackNnraiT = () => { return _returnValuep0NhOgz };
		const _newVertexllnu4xm = new DisjointSetItem(_valueKcKnXaw, _keyCallbackNnraiT)
		const _returnValueAy5eT2R = "IU2tNI8lucvpyVjowS3zhJkDEErTongTAORV7B10aWcdfxV3P6iH62yoDFrahl2b8YdhLBBv6KFRlgiPJLCTvPvTeh2H";
		const _addChildRy2ObNk = () => { return _returnValueAy5eT2R };
		const _parentItemR19cifC = {
			"addChild": _addChildRy2ObNk
	}
		const _forceSettingParentChildoSzgsKj = false;
		const _returnValueYcRbeS2 = await _newVertexllnu4xm.setParent(_parentItemR19cifC, _forceSettingParentChildoSzgsKj)
		const _returnValueDv8XHg4 = await _graphWbAoqS1.addVertex(_newVertexllnu4xm)
		const _returnValuesyQg1Ey = await _graphWbAoqS1.getWeight()
		const _returnValuezAcIB0g = await detectDirectedCycle(_graphWbAoqS1)
	});
})