export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuedgRhncU = -3.856468729544586;
		const _returnValueQdzmZKr = () => { return _returnValuedgRhncU };
		const _getNeighborsl6BVW3m = () => { return _returnValueQdzmZKr };
		const _graphcBc0hob = {
			"getNeighbors": _getNeighborsl6BVW3m
	}
		const _startVertexU9PKZZQ = undefined;
		const _originalCallbackslPer9QX = true;
		const _returnValue7bHsZ6 = await breadthFirstSearch(_graphcBc0hob, _startVertexU9PKZZQ, _originalCallbackslPer9QX)
	});

	it('test for breadthFirstSearch', async () => {
		const _graphFc9tq0q = null;
		const _startVertexbf8G76H = false;
		const _originalCallbacksMvnnQZU = {
		
	}
		const _returnValueTkUBUGp = await breadthFirstSearch(_graphFc9tq0q, _startVertexbf8G76H, _originalCallbacksMvnnQZU)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueddgDzeS = null;
		const _arrayValueNjgruhh = null;
		const _arrayValuezbvx1uO = true;
		const _returnValuefh65b7t = [_arrayValueddgDzeS, _arrayValueNjgruhh, _arrayValuezbvx1uO]
		const _getNeighborsBYah3I2 = () => { return _returnValuefh65b7t };
		const _graphecSeEA = {
			"getNeighbors": _getNeighborsBYah3I2
	}
		const _startVertexjpRd17c = null;
		const _returnValueBCenPQT = 5.62880328277325;
		const _originalCallbacksk2l00Z = () => { return _returnValueBCenPQT };
		const _returnValueC7oxap = await breadthFirstSearch(_graphecSeEA, _startVertexjpRd17c, _originalCallbacksk2l00Z)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueU8yaftv = 9.451408529181549;
		const _graphYNXhUaa = new GraphVertex(_valueU8yaftv)
		const _edgeBcKL4pX = {
		
	}
		const _returnValueqa8hoV = await _graphYNXhUaa.deleteEdge(_edgeBcKL4pX)
		const _returnValueDXA6dah = await _graphYNXhUaa.getNeighbors()
		const _returnValuemhz3mcZ = await _graphYNXhUaa.getDegree()
		const _vertexmenhPkX = undefined;
		const _returnValueumhJ3tE = await _graphYNXhUaa.hasNeighbor(_vertexmenhPkX)
		const _startVertexrF43eH = "ThSmJfsn9uUUONhsSPt2VIk";
		const _arrayValueVMpfHqi = undefined;
		const _arrayValuesMLz5SY = false;
		const _arrayValuewsJ50nY = false;
		const _originalCallbacksXMoJ4Bf = [_arrayValueVMpfHqi, _arrayValuesMLz5SY, _arrayValuewsJ50nY]
		const _returnValuear09YDo = await breadthFirstSearch(_graphYNXhUaa, _startVertexrF43eH, _originalCallbacksXMoJ4Bf)
	});
})