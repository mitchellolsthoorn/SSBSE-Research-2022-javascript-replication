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
		const _returnValuewxszje = null;
		const _getAllVerticess4OJZwG = () => { return _returnValuewxszje };
		const _graphZjaelV3 = {
			"getAllVertices": _getAllVerticess4OJZwG
	}
		const _returnValuerWzuvcy = await detectDirectedCycle(_graphZjaelV3)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedKfaX8g = true;
		const _graphhl7QzvG = new Graph(_isDirectedKfaX8g)
		const _returnValuepVagXc = null;
		const _vertexKeyGqs8Glr = () => { return _returnValuepVagXc };
		const _returnValueQ9vIIvo = await _graphhl7QzvG.getVertexByKey(_vertexKeyGqs8Glr)
		const _returnValueQ38t9id = await _graphhl7QzvG.getWeight()
		const _returnValueeddbQ75 = await _graphhl7QzvG.getAllEdges()
		const _returnValueOKBzVRu = await detectDirectedCycle(_graphhl7QzvG)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedNFII0nm = null;
		const _graphqmwDfay = new Graph(_isDirectedNFII0nm)
		const _valuevmLDKwO = true;
		const _returnValueMyHdJfn = "cDQbJfzPbCggObXoI";
		const _keyCallbackcuchg0K = () => { return _returnValueMyHdJfn };
		const _newVertexcY9IHqm = new DisjointSetItem(_valuevmLDKwO, _keyCallbackcuchg0K)
		const _returnValueGb84AIF = await _newVertexcY9IHqm.getRoot()
		const _returnValueYsJNfM = await _newVertexcY9IHqm.getRoot()
		const _returnValuerQgVuQQ = await _graphqmwDfay.addVertex(_newVertexcY9IHqm)
		const _returnValuepCnQhM = await _graphqmwDfay.getAllEdges()
		const _returnValueVtCbMAW = await detectDirectedCycle(_graphqmwDfay)
	});
})