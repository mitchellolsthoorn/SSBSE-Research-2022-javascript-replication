export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirecteda0vWh4R = undefined;
		const _returnValuegTjyX9m = false;
		const _getAllVerticesu8tlTIP = () => { return _returnValuegTjyX9m };
		const _graphlaJ5vjI = {
			"isDirected": _isDirecteda0vWh4R,
		"getAllVertices": _getAllVerticesu8tlTIP
	}
		const _returnValueLd3mG69 = await prim(_graphlaJ5vjI)
	});

	it('test for prim', async () => {
		const _isDirectedAxQemym = {
		
	}
		const _returnValueE4n6wEY = null;
		const _getAllVerticesDk5nVoK = () => { return _returnValueE4n6wEY };
		const _graphUCLiJg = {
			"isDirected": _isDirectedAxQemym,
		"getAllVertices": _getAllVerticesDk5nVoK
	}
		const _returnValueeAKG1lj = await prim(_graphUCLiJg)
	});

	it('test for prim', async () => {
		const _isDirectedWDUeARE = false;
		const _graphEog7Y6a = new Graph(_isDirectedWDUeARE)
		const _returnValueS7baOxQ = await _graphEog7Y6a.getAllVertices()
		const _returnValueJz4UwQ0 = null;
		const _returnValueZj0aFDb = () => { return _returnValueJz4UwQ0 };
		const _getKeygrsKqOq = () => { return _returnValueZj0aFDb };
		const _newVertexnrqtNEp = {
			"getKey": _getKeygrsKqOq
	}
		const _returnValueH3Db9ls = await _graphEog7Y6a.addVertex(_newVertexnrqtNEp)
		const _returnValueUgd0Ll6 = await _graphEog7Y6a.getAllEdges()
		const _returnValueyhWUMjy = await _graphEog7Y6a.getAllVertices()
		const _returnValueC1PLgZk = -2.8437206709258067;
		const _getNeighborsl7O7rC = () => { return _returnValueC1PLgZk };
		const _vertexOvttWLi = {
			"getNeighbors": _getNeighborsl7O7rC
	}
		const _returnValueNTfkDoG = await _graphEog7Y6a.getNeighbors(_vertexOvttWLi)
		const _returnValue9qPXKY = await prim(_graphEog7Y6a)
	});
})