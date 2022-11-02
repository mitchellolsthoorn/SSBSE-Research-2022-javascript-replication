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
		const _graphEDs8ZYA = "ru5fYKeNk9Gtzmdk6yrjklRwnKpyJGQDeodAbGTehcXaGjabnVuhbUejq4lfei1KVL";
		const _returnValueR57vOQr = await articulationPoints(_graphEDs8ZYA)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedLpaRwJK = false;
		const _graphnfTUfOv = new Graph(_isDirectedLpaRwJK)
		const _valueDGLlyYF = {
		
	}
		const _arrayValuewNPQw2v = "49dFJcKoB3aztiHpaGhJEfROFCncHy2oTGVynxUo9zhB2q5NH36Ao1bL1t8HF";
		const _returnValuebdd4wpo = [_arrayValuewNPQw2v]
		const _keyCallbackIdEnU63 = () => { return _returnValuebdd4wpo };
		const _newVertexvEWE2pa = new DisjointSetItem(_valueDGLlyYF, _keyCallbackIdEnU63)
		const _returnValueTxNwTaL = await _newVertexvEWE2pa.getRoot()
		const _returnValuebcvqJYz = await _newVertexvEWE2pa.isRoot()
		const _returnValueW0aCyK8 = await _graphnfTUfOv.addVertex(_newVertexvEWE2pa)
		const _returnValueamczbnk = await articulationPoints(_graphnfTUfOv)
	});
})