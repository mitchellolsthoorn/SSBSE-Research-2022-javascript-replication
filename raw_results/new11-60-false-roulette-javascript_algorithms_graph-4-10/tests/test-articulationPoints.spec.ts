export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _isDirectedj5nlsQN = true;
		const _graphEV9tp0i = new Graph(_isDirectedj5nlsQN)
		const _returnValuevT0d7TK = await _graphEV9tp0i.getWeight()
		const _returnValuewjid8VT = await articulationPoints(_graphEV9tp0i)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedu7DdEyy = true;
		const _graphyGIUhfm = new Graph(_isDirectedu7DdEyy)
		const _returnValuenvRJyFK = "FEEPpSwq08CdLZcxRdae7e9OETlJ0c1D1u3ZiC5D5BMIC2DC7w3xY8fqcxQ2SAWuLLOSW8of6lVKQfsHl8rv";
		const _getKeywz9Lhnn = () => { return _returnValuenvRJyFK };
		const _newVertexkSgUFQ5 = {
			"getKey": _getKeywz9Lhnn
	}
		const _returnValueVB9vlqU = await _graphyGIUhfm.addVertex(_newVertexkSgUFQ5)
		const _returnValueGuV2ciF = await articulationPoints(_graphyGIUhfm)
	});
})