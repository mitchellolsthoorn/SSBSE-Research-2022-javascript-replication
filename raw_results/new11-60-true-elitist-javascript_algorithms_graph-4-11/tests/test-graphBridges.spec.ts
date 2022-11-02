export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _arrayValueMYPFzEO = undefined;
		const _arrayValueeJmyoU = undefined;
		const _arrayValuebKLelz = -3.4560806258399612;
		const _returnValuewaxHdP5 = [_arrayValueMYPFzEO, _arrayValueeJmyoU, _arrayValuebKLelz]
		const _getAllVerticesg23SbV = () => { return _returnValuewaxHdP5 };
		const _returnValuePJncYlN = 4.570955364936857;
		const _findEdgeCxYZzVW = () => { return _returnValuePJncYlN };
		const _graphbJIphiK = {
			"getAllVertices": _getAllVerticesg23SbV,
		"findEdge": _findEdgeCxYZzVW
	}
		const _returnValuejvbbdLD = await graphBridges(_graphbJIphiK)
	});

	it('test for graphBridges', async () => {
		const _isDirectedLeXSbmd = false;
		const _graphSeqZNyX = new Graph(_isDirectedLeXSbmd)
		const _returnValuexIIhSbw = await _graphSeqZNyX.getAllVertices()
		const _returnValueTG2Yz7l = await _graphSeqZNyX.getWeight()
		const _arrayValuekxSkYxV = null;
		const _arrayValueauUpquG = true;
		const _arrayValueY0VjttS = undefined;
		const _arrayValueFJoSAUB = true;
		const _valueDdEHxjc = [_arrayValuekxSkYxV, _arrayValueauUpquG, _arrayValueY0VjttS, _arrayValueFJoSAUB]
		const _keyCallback6DVr9o = undefined;
		const _newVertexkaClPkc = new DisjointSetItem(_valueDdEHxjc, _keyCallback6DVr9o)
		const _returnValuesgwy3w3 = await _newVertexkaClPkc.getChildren()
		const _returnValuelLxCLIZ = await _newVertexkaClPkc.getRank()
		const _returnValueTTihePQ = await _newVertexkaClPkc.getKey()
		const _returnValueTN7vt9 = await _newVertexkaClPkc.isRoot()
		const _returnValuelk9NOM0 = await _graphSeqZNyX.addVertex(_newVertexkaClPkc)
		const _returnValueKewsXOl = await graphBridges(_graphSeqZNyX)
	});
})