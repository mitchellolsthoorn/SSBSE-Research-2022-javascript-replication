export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import TrieNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/trie/TrieNode.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _isDirectednf6LRae = false;
		const _graphVTiPIVu = new Graph(_isDirectednf6LRae)
		const _returnValueecGNsWK = await _graphVTiPIVu.getWeight()
		const _returnValuev2Q5CVK = await bfTravellingSalesman(_graphVTiPIVu)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirecteddzdcr74 = true;
		const _graphNhN251q = new Graph(_isDirecteddzdcr74)
		const _returnValuex9yEON7 = await _graphNhN251q.reverse()
		const _returnValueqXk3zMx = "2qJQb75VwqxpiPvcHj1iE3jUX1uhjLXYM";
		const _getNeighbors4bV6OF = () => { return _returnValueqXk3zMx };
		const _vertexPhQRpVf = {
			"getNeighbors": _getNeighbors4bV6OF
	}
		const _returnValueuq03XTu = await _graphNhN251q.getNeighbors(_vertexPhQRpVf)
		const _valueHmyLWl = true;
		const _returnValueVjoG2Eg = 2.583404273093082;
		const _keyCallbacknMjmWHz = () => { return _returnValueVjoG2Eg };
		const _newVertexiGzD2a8 = new DisjointSetItem(_valueHmyLWl, _keyCallbacknMjmWHz)
		const _returnValueEuBfs8D = await _newVertexiGzD2a8.getChildren()
		const _parentItemPlJXGeO = null;
		const _forceSettingParentChilddDytWOS = false;
		const _returnValuezv74qsv = await _newVertexiGzD2a8.setParent(_parentItemPlJXGeO, _forceSettingParentChilddDytWOS)
		const _returnValueyH3C6tL = await _newVertexiGzD2a8.getRoot()
		const _valueb9tadBv = 5.867314097521838;
		const _returnValuem4TyY3 = -4.342862766957404;
		const _keyCallbackmJv914 = () => { return _returnValuem4TyY3 };
		const _childItemNgtHQt9 = new DisjointSetItem(_valueb9tadBv, _keyCallbackmJv914)
		const _returnValueII2r9ah = await _childItemNgtHQt9.getChildren()
		const _characterosDf4lT = []
		const _isCompleteWordIizxVbb = false;
		const _parentItemUWLfPO = new TrieNode(_characterosDf4lT, _isCompleteWordIizxVbb)
		const _characterT3sDOxI = 7.733053117338912;
		const _isCompleteWordoJKiKI = true;
		const _returnValueHD8iqvE = await _parentItemUWLfPO.addChild(_characterT3sDOxI, _isCompleteWordoJKiKI)
		const _returnValuetorJzWG = await _parentItemUWLfPO.toString()
		const _returnValueaNxOyYQ = await _parentItemUWLfPO.suggestChildren()
		const _forceSettingParentChildNEnjuVm = false;
		const _returnValueSvo8DWq = await _childItemNgtHQt9.setParent(_parentItemUWLfPO, _forceSettingParentChildNEnjuVm)
		const _returnValueIsRs32a = await _childItemNgtHQt9.isRoot()
		const _returnValuef6bYmZr = await _newVertexiGzD2a8.addChild(_childItemNgtHQt9)
		const _returnValuecga8dJ = await _graphNhN251q.addVertex(_newVertexiGzD2a8)
		const _returnValuexUhV203 = await _graphNhN251q.reverse()
		const _returnValueKK7PbrM = await _graphNhN251q.getAllEdges()
		const _returnValueiZKSbQM = await bfTravellingSalesman(_graphNhN251q)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedrDVhxA3 = false;
		const _graphhE7e0iP = new Graph(_isDirectedrDVhxA3)
		const _returnValuelOSSjSC = await _graphhE7e0iP.reverse()
		const _valueOa2go3n = null;
		const _newVertexJq4ywkQ = new GraphVertex(_valueOa2go3n)
		const _returnValueiGHi5Y = await _newVertexJq4ywkQ.getDegree()
		const _returnValueagadmDg = await _graphhE7e0iP.addVertex(_newVertexJq4ywkQ)
		const _returnValuelVioUkl = await _graphhE7e0iP.getAllVertices()
		const _vertexKeyG0vfiV = true;
		const _returnValuew9PPdYL = await _graphhE7e0iP.getVertexByKey(_vertexKeyG0vfiV)
		const _returnValuePtJmxyV = await bfTravellingSalesman(_graphhE7e0iP)
	});
})