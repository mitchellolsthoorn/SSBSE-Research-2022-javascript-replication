export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueGUgum25 = null;
		const _getAllVerticesjPO4zx = () => { return _returnValueGUgum25 };
		const _graphcaxPBAi = {
			"getAllVertices": _getAllVerticesjPO4zx
	}
		const _returnValueWPTlhCB = await articulationPoints(_graphcaxPBAi)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedTGm6bCV = true;
		const _graphxRnjQB3 = new Graph(_isDirectedTGm6bCV)
		const _returnValueHiZ1fEk = await _graphxRnjQB3.getAllVertices()
		const _returnValuejo3sa3G = await _graphxRnjQB3.reverse()
		const _returnValueaAzWC3B = false;
		const _getKeyDkfLVxx = () => { return _returnValueaAzWC3B };
		const _newVertexEZjl4R5 = {
			"getKey": _getKeyDkfLVxx
	}
		const _returnValuegsZvUek = await _graphxRnjQB3.addVertex(_newVertexEZjl4R5)
		const _returnValuesRiRDej = await _graphxRnjQB3.getAllVertices()
		const _returnValueBXZIOF1 = await articulationPoints(_graphxRnjQB3)
	});
})