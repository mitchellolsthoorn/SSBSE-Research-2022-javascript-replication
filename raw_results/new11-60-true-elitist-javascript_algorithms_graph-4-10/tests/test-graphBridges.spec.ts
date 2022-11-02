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
		const _returnValueTXUEMys = -8.415862163476756;
		const _getAllVerticestGbzS3v = () => { return _returnValueTXUEMys };
		const _findEdgerb9f1ct = false;
		const _graphbYC5in5 = {
			"getAllVertices": _getAllVerticestGbzS3v,
		"findEdge": _findEdgerb9f1ct
	}
		const _returnValue1zm9LV = await graphBridges(_graphbYC5in5)
	});

	it('test for graphBridges', async () => {
		const _isDirectedssSNxc = false;
		const _graphpL6niuN = new Graph(_isDirectedssSNxc)
		const _returnValuek1sWo0 = "cMS5CkXe90gqsKuq8gSTr58yRGlRYURh7WZIQ7OmP252rXNu1aelApg2PpFdsRbjO1JIcp7KdE";
		const _valuevAKNWSY = () => { return _returnValuek1sWo0 };
		const _returnValueBmJRdQm = undefined;
		const _keyCallbackoM1xalY = () => { return _returnValueBmJRdQm };
		const _newVertexA9MIzy2 = new DisjointSetItem(_valuevAKNWSY, _keyCallbackoM1xalY)
		const _returnValuemaioM8S = await _newVertexA9MIzy2.getChildren()
		const _returnValueqyvRXi2 = await _newVertexA9MIzy2.getRoot()
		const _returnValueD79hvfI = await _newVertexA9MIzy2.getRoot()
		const _character8S3GXg = null;
		const _isCompleteWordbyOfuFn = true;
		const _parentItemWwVMQ5l = new TrieNode(_character8S3GXg, _isCompleteWordbyOfuFn)
		const _arrayValueel9UxzZ = "ZeLmIGKzSIqWHQz3y8yDLcHIlvQLrSWnsUnh1KMBvU8yvMnNXL8pLudYyYXfG";
		const _arrayValueNoAvpd4 = 0.11773785982327567;
		const _arrayValuezW1qsKU = undefined;
		const _characteriSFALUA = [_arrayValueel9UxzZ, _arrayValueNoAvpd4, _arrayValuezW1qsKU]
		const _returnValueRN1ryu = await _parentItemWwVMQ5l.hasChild(_characteriSFALUA)
		const _returnValuee2J2jmR = await _parentItemWwVMQ5l.suggestChildren()
		const _characterpqe0TkH = true;
		const _returnValueukmdHeq = await _parentItemWwVMQ5l.getChild(_characterpqe0TkH)
		const _forceSettingParentChildEpXgslH = false;
		const _returnValuePIYHpnI = await _newVertexA9MIzy2.setParent(_parentItemWwVMQ5l, _forceSettingParentChildEpXgslH)
		const _returnValueIqM5bJJ = await _graphpL6niuN.addVertex(_newVertexA9MIzy2)
		const _returnValuet75ICBE = await graphBridges(_graphpL6niuN)
	});
})