export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _graphuYeiVt3 = "SvdjBMXnDfb3ckMGn0PPQJqMueTrDaEPwJAnXg6QkupazDenSgCf4uzyi5OfN1krb34UK5UHhNzSpYAmNHTWNxLtvBG";
		const _returnValuejfCKrvN = await articulationPoints(_graphuYeiVt3)
	});

	it('test for articulationPoints', async () => {
		const _isDirecteduuflHKO = false;
		const _graphMsWxnmF = new Graph(_isDirecteduuflHKO)
		const _returnValueopWdf5S = await _graphMsWxnmF.reverse()
		const _valuexFJcrn = {
		
	}
		const _keyCallbacklP6xUL = null;
		const _newVertexjrsF7X = new DisjointSetItem(_valuexFJcrn, _keyCallbacklP6xUL)
		const _returnValueKz7T1SU = await _newVertexjrsF7X.getChildren()
		const _returnValueXqLQqW6 = await _newVertexjrsF7X.getKey()
		const _returnValueaGvqdSU = await _graphMsWxnmF.addVertex(_newVertexjrsF7X)
		const _vertexKeyzyGS0eg = {
		
	}
		const _returnValuewZZyFz = await _graphMsWxnmF.getVertexByKey(_vertexKeyzyGS0eg)
		const _returnValueiwI7Vib = await articulationPoints(_graphMsWxnmF)
	});
})