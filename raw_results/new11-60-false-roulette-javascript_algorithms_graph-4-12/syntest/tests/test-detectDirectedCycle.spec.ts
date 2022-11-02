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
		const _graphy62DSdU = "486If9HpEGkjUpn7Rgtuqxr0TOFfZaX7W3naVMQJVp7Odo8j7";
		const _returnValuelrS7xPn = await detectDirectedCycle(_graphy62DSdU)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirected0SuthV = true;
		const _graphqSRbn6k = new Graph(_isDirected0SuthV)
		const _returnValueZnOKZuD = await _graphqSRbn6k.getAdjacencyMatrix()
		const _returnValueQscSwSB = await detectDirectedCycle(_graphqSRbn6k)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedYwwcAJE = true;
		const _graphtrYPgM = new Graph(_isDirectedYwwcAJE)
		const _valueU9Bn1Ic = {
		
	}
		const _returnValueGIVCC0v = null;
		const _keyCallbackbnEpsUe = () => { return _returnValueGIVCC0v };
		const _newVertexqhr6C1Z = new DisjointSetItem(_valueU9Bn1Ic, _keyCallbackbnEpsUe)
		const _returnValuezLHcw3G = await _newVertexqhr6C1Z.getRoot()
		const _returnValueQdbB4Wq = await _newVertexqhr6C1Z.getRank()
		const _parentItemGBsMdcv = "2PX94wwuUrlTpeLk99CzsP18IVeqKMlJ1Qmunm7NfYSqNxXPBHWYgibmgZl9OgARTKdXy6eGKjiQiCds3F";
		const _forceSettingParentChildShHY4uW = false;
		const _returnValueZBxsj1s = await _newVertexqhr6C1Z.setParent(_parentItemGBsMdcv, _forceSettingParentChildShHY4uW)
		const _returnValuerVH62kn = await _newVertexqhr6C1Z.getRank()
		const _returnValueCfQXBjQ = await _graphtrYPgM.addVertex(_newVertexqhr6C1Z)
		const _returnValuecoPkjXh = "4zXBeGdUvne4rxUkIbwDYke";
		const _getKeyQP3vAro = () => { return _returnValuecoPkjXh };
		const _startVertexkgVw4up = {
			"getKey": _getKeyQP3vAro
	}
		const _endVertexIWoVnFT = "W0Txd540";
		const _returnValueGF2YnZe = await _graphtrYPgM.findEdge(_startVertexkgVw4up, _endVertexIWoVnFT)
		const _returnValueJlHOXMx = await detectDirectedCycle(_graphtrYPgM)
	});
})