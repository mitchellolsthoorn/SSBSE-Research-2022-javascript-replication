export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuevRKqLPW = "gtTO4xuKJp1qbLeMIJfPYwBMrjF1CuvFnpeVpnt9OIzaD60wTd";
		const _getAllVerticeskJ5mJBP = () => { return _returnValuevRKqLPW };
		const _graphnUbqcay = {
			"getAllVertices": _getAllVerticeskJ5mJBP
	}
		const _returnValuejnM9u8Q = await topologicalSort(_graphnUbqcay)
	});

	it('test for topologicalSort', async () => {
		const _isDirectedMaFE2GY = false;
		const _graphOz2sYXl = new Graph(_isDirectedMaFE2GY)
		const _returnValueG052phH = await _graphOz2sYXl.getAllEdges()
		const _returnValueT5Aemmu = await _graphOz2sYXl.getWeight()
		const _vertexKeyNoLxveS = "HL5LRgwj3HeHGprpOFlQNGG7BgrrhwVCZfyVeJ560f4PnFrRcccxT1vW2d6TaA62Mdy4";
		const _returnValueQZKdSJf = await _graphOz2sYXl.getVertexByKey(_vertexKeyNoLxveS)
		const _returnValuejVmB9BS = {
		
	}
		const _vertexKeyi1Zwzi9 = () => { return _returnValuejVmB9BS };
		const _returnValuekVJcmgq = await _graphOz2sYXl.getVertexByKey(_vertexKeyi1Zwzi9)
		const _returnValuehonXSsC = await _graphOz2sYXl.getAllVertices()
		const _returnValueKIaVTCT = await topologicalSort(_graphOz2sYXl)
	});
})