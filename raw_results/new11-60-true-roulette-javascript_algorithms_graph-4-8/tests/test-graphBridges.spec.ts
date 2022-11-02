export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import TrieNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/trie/TrieNode.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValuewo73P6C = 9.703645411273484;
		const _getAllVerticestboqxd = () => { return _returnValuewo73P6C };
		const _returnValueBZX8Npu = -1.7919798837971772;
		const _findEdgeW2rzRcW = () => { return _returnValueBZX8Npu };
		const _graphOIJi04 = {
			"getAllVertices": _getAllVerticestboqxd,
		"findEdge": _findEdgeW2rzRcW
	}
		const _returnValueaiz7oRJ = await graphBridges(_graphOIJi04)
	});

	it('test for graphBridges', async () => {
		const _isDirectedgjxmZVh = true;
		const _graphk1kHi0 = new Graph(_isDirectedgjxmZVh)
		const _returnValueImkgWLe = "oGsZJALtzI4zUMBhwoeaau";
		const _getKeyDsdo30Q = () => { return _returnValueImkgWLe };
		const _newVertexZPvQxGn = {
			"getKey": _getKeyDsdo30Q
	}
		const _returnValuegTGbCy = await _graphk1kHi0.addVertex(_newVertexZPvQxGn)
		const _arrayValuezAzzLjc = null;
		const _returnValuets1GmQt = undefined;
		const _arrayValueyhCNdK = () => { return _returnValuets1GmQt };
		const _valuepW963o3 = [_arrayValuezAzzLjc, _arrayValueyhCNdK]
		const _returnValuemB92jzF = null;
		const _keyCallbackjFFaNl = () => { return _returnValuemB92jzF };
		const _newVertexmZBesGs = new DisjointSetItem(_valuepW963o3, _keyCallbackjFFaNl)
		const _returnValuelTW2CjR = await _newVertexmZBesGs.getRank()
		const _characterbABu4xZ = null;
		const _isCompleteWordWa6iZAL = false;
		const _parentItemaKLL9ip = new TrieNode(_characterbABu4xZ, _isCompleteWordWa6iZAL)
		const _returnValueo3HQgo3 = await _parentItemaKLL9ip.suggestChildren()
		const _returnValuegP6h3GG = await _parentItemaKLL9ip.suggestChildren()
		const _returnValueevYJlDn = true;
		const _characteribttqyf = () => { return _returnValueevYJlDn };
		const _returnValueFcZv4DY = await _parentItemaKLL9ip.hasChild(_characteribttqyf)
		const _returnValueBhctPKH = await _parentItemaKLL9ip.suggestChildren()
		const _forceSettingParentChild5WBVYc = false;
		const _returnValueaO3H9AP = await _newVertexmZBesGs.setParent(_parentItemaKLL9ip, _forceSettingParentChild5WBVYc)
		const _returnValueETRdUzE = await _newVertexmZBesGs.isRoot()
		const _returnValueOZ7qmmW = await _graphk1kHi0.addVertex(_newVertexmZBesGs)
		const _returnValueNkQTjZZ = await graphBridges(_graphk1kHi0)
	});
})