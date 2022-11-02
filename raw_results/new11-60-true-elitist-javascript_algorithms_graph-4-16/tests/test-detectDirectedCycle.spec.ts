export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import TrieNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/trie/TrieNode.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueWCNRnOA = "YplErPdslJODHbUSsGxR7kF8oWyYtaFyie5hNK3q6KoddWHV3jXdBSNPRiefYvT7zxsQ9DRRDPsJEO1P3mjJJRCE6i";
		const _getAllVerticesQP35vHG = () => { return _returnValueWCNRnOA };
		const _graphteTzXce = {
			"getAllVertices": _getAllVerticesQP35vHG
	}
		const _returnValuegiSpUk = await detectDirectedCycle(_graphteTzXce)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValuevAnWXUW = []
		const _getAllVerticesY8iJMcW = () => { return _returnValuevAnWXUW };
		const _graphDZokIAH = {
			"getAllVertices": _getAllVerticesY8iJMcW
	}
		const _returnValueRKid4go = await detectDirectedCycle(_graphDZokIAH)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedLJ148Zh = false;
		const _graphIRbbIKt = new Graph(_isDirectedLJ148Zh)
		const _returnValuekR5mRvC = await _graphIRbbIKt.getVerticesIndices()
		const _valuejuroRBm = null;
		const _returnValuewWELACM = true;
		const _returnValuekXA9g9K = () => { return _returnValuewWELACM };
		const _keyCallbackP5LiBEz = () => { return _returnValuekXA9g9K };
		const _newVertexxUgHXZ = new DisjointSetItem(_valuejuroRBm, _keyCallbackP5LiBEz)
		const _returnValueAGEyRLY = await _newVertexxUgHXZ.getRank()
		const _returnValuekOvTAv8 = await _newVertexxUgHXZ.getKey()
		const _charactermrfbZOK = "Te7JrZXZjBvNiUaB7MS5U7griJxUOVw2BeCC9domxvYKolWGfF2DTLuAQu3SSgGbGGhiFsoNQ7o6VyxJ3qckUCCiVGTvlLlHf";
		const _isCompleteWordaige8qj = false;
		const _parentItemOt2pHHd = new TrieNode(_charactermrfbZOK, _isCompleteWordaige8qj)
		const _characterMwa67mn = "S3jxDB2aKNFNAH";
		const _returnValuej7mIwbc = await _parentItemOt2pHHd.removeChild(_characterMwa67mn)
		const _forceSettingParentChildHwaFeuQ = true;
		const _returnValueghlgdn = await _newVertexxUgHXZ.setParent(_parentItemOt2pHHd, _forceSettingParentChildHwaFeuQ)
		const _characterdzL5XP4 = true;
		const _isCompleteWordgpz4wtb = true;
		const _parentItemS8ni7qu = new TrieNode(_characterdzL5XP4, _isCompleteWordgpz4wtb)
		const _returnValue7osFlt = await _parentItemS8ni7qu.suggestChildren()
		const _returnValueNHSOTA8 = await _parentItemS8ni7qu.hasChildren()
		const _returnValuetwwJy8j = await _parentItemS8ni7qu.hasChildren()
		const _characterhmRhuMb = -7.492423502787167;
		const _returnValueBGhzNcC = await _parentItemS8ni7qu.getChild(_characterhmRhuMb)
		const _characterdNEi2W4 = 8.824750971849205;
		const _returnValuegVlxhu = await _parentItemS8ni7qu.hasChild(_characterdNEi2W4)
		const _forceSettingParentChildx5kCvz = false;
		const _returnValuefqMVoMF = await _newVertexxUgHXZ.setParent(_parentItemS8ni7qu, _forceSettingParentChildx5kCvz)
		const _returnValueTs6qMat = await _graphIRbbIKt.addVertex(_newVertexxUgHXZ)
		const _returnValuetTyQFOJ = await _graphIRbbIKt.reverse()
		const _returnValueNti5oEL = await _graphIRbbIKt.getAllEdges()
		const _returnValueAr6PaPE = await detectDirectedCycle(_graphIRbbIKt)
	});
})