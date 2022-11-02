export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _graphUHBC0i4 = "DLReG7k8qil8tUzwQMXsoptfWbmbTcjIIHgp7IPMPhct3x0";
		const _returnValuexUNEeK = await articulationPoints(_graphUHBC0i4)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedvcm0VuB = false;
		const _graphufGQL7e = new Graph(_isDirectedvcm0VuB)
		const _returnValuewExvcWR = "dxXW";
		const _getKeyxGfu69 = () => { return _returnValuewExvcWR };
		const _newVertexKBii5kl = {
			"getKey": _getKeyxGfu69
	}
		const _returnValueoglj5Z = await _graphufGQL7e.addVertex(_newVertexKBii5kl)
		const _returnValueNY1pu0 = {
		
	}
		const _getNeighborsZZJucW1 = () => { return _returnValueNY1pu0 };
		const _vertexzcUzseO = {
			"getNeighbors": _getNeighborsZZJucW1
	}
		const _returnValueRJBnQi = await _graphufGQL7e.getNeighbors(_vertexzcUzseO)
		const _returnValueWM6uTMD = "3LCnZTPX7aqHMZV8eo";
		const _getKeyr8Gan1u = () => { return _returnValueWM6uTMD };
		const _startVertexoOwuA6S = {
			"getKey": _getKeyr8Gan1u
	}
		const _endVertexF57ZAcR = {
		
	}
		const _returnValuecCscatX = await _graphufGQL7e.findEdge(_startVertexoOwuA6S, _endVertexF57ZAcR)
		const _returnValuesyIhP43 = await articulationPoints(_graphufGQL7e)
	});
})