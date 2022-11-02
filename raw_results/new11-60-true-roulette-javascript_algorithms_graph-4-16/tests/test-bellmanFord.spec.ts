export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import TrieNode from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/trie/TrieNode.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueWnqZNf6 = "ve7T9CuiC";
		const _graphJelkthi = () => { return _returnValueWnqZNf6 };
		const _startVertexDEcOHEd = "cdyHsePB0Ba";
		const _returnValueVl1Aoar = await bellmanFord(_graphJelkthi, _startVertexDEcOHEd)
	});

	it('test for bellmanFord', async () => {
		const _grapheRY0PLL = "cE6BKQzP6cL44hXaKpJpnoqGvtYABLAAVChD7EJ3NyTziOh3JLEVBsoh";
		const _returnValueDWM9Uf1 = "zXQXMyqrn52dgKJG1Uz1xu4aVc69H38PoHilWlCK6iVCfbMdTh1n4Op5hAzSMaUX9kmEZdaHW5Ji3";
		const _getKeyHQq4m7q = () => { return _returnValueDWM9Uf1 };
		const _startVertexePnkQW7 = {
			"getKey": _getKeyHQq4m7q
	}
		const _returnValueSQvuPj0 = await bellmanFord(_grapheRY0PLL, _startVertexePnkQW7)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedbPYZJat = true;
		const _graphWFElpHo = new Graph(_isDirectedbPYZJat)
		const _returnValueHk2CE1C = await _graphWFElpHo.getAllVertices()
		const _returnValueZgfqBTO = undefined;
		const _getKeyTWjVl5T = () => { return _returnValueZgfqBTO };
		const _startVertexiKP2Aq = {
			"getKey": _getKeyTWjVl5T
	}
		const _returnValuewnqsuBT = await bellmanFord(_graphWFElpHo, _startVertexiKP2Aq)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedTBWxkxt = false;
		const _graphnCG6wYl = new Graph(_isDirectedTBWxkxt)
		const _returnValueGIkqJGJ = await _graphnCG6wYl.getAllEdges()
		const _returnValuemMOe7So = await _graphnCG6wYl.getAdjacencyMatrix()
		const _returnValueX7XYSfR = -2.1479693869816128;
		const _getKeypPJCufG = () => { return _returnValueX7XYSfR };
		const _newVertexEgtJtIx = {
			"getKey": _getKeypPJCufG
	}
		const _returnValueb8KCKv2 = await _graphnCG6wYl.addVertex(_newVertexEgtJtIx)
		const _valuecdOVVSl = null;
		const _returnValueyi1aPXR = true;
		const _keyCallbackbhsrAfh = () => { return _returnValueyi1aPXR };
		const _startVertexrZrYWw5 = new DisjointSetItem(_valuecdOVVSl, _keyCallbackbhsrAfh)
		const _returnValueck2oYv4 = await _startVertexrZrYWw5.getRank()
		const _returnValueJ7vAGYt = await _startVertexrZrYWw5.getRank()
		const _returnValueeDLv4dT = await _startVertexrZrYWw5.getRank()
		const _returnValuexMmJHg = undefined;
		const _addChildbdf5Cml = () => { return _returnValuexMmJHg };
		const _parentItemmuLEoI3 = {
			"addChild": _addChildbdf5Cml
	}
		const _forceSettingParentChildPZNJCxw = false;
		const _returnValuerRBrOoy = await _startVertexrZrYWw5.setParent(_parentItemmuLEoI3, _forceSettingParentChildPZNJCxw)
		const _returnValueQwigO3k = await bellmanFord(_graphnCG6wYl, _startVertexrZrYWw5)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedUg9vHAb = false;
		const _graphjxs3uqM = new Graph(_isDirectedUg9vHAb)
		const _returnValueEQq1XBF = await _graphjxs3uqM.getAllVertices()
		const _returnValueFZUjtEX = 4.651895220112657;
		const _valuejdooAuy = () => { return _returnValueFZUjtEX };
		const _returnValueCIk3gGf = []
		const _keyCallbackWegH42T = () => { return _returnValueCIk3gGf };
		const _newVertexeIVJzpk = new DisjointSetItem(_valuejdooAuy, _keyCallbackWegH42T)
		const _returnValueV7pmYVm = await _newVertexeIVJzpk.getChildren()
		const _valuekQr6T4D = undefined;
		const _returnValueGynioOX = null;
		const _keyCallbackn6pjRVE = () => { return _returnValueGynioOX };
		const _childItemlJJeq50 = new DisjointSetItem(_valuekQr6T4D, _keyCallbackn6pjRVE)
		const _returnValuedIZvN7A = await _childItemlJJeq50.getChildren()
		const _returnValueQOoHdDr = await _childItemlJJeq50.getChildren()
		const _valuejbQnQUF = "IfqVnynRPghImKRzmm2O3nyXsAv7fgsUjPMX23Fr5ncNgpuMpcBrQWyVjiEc3ZGRpHvV";
		const _arrayValuew2YuQg = -8.272875630829375;
		const _arrayValueJFUGvEr = -3.7609108503126354;
		const _returnValuerNx2YT7 = [_arrayValuew2YuQg, _arrayValueJFUGvEr]
		const _keyCallback3OBNRN = () => { return _returnValuerNx2YT7 };
		const _parentItemIMEjaT = new DisjointSetItem(_valuejbQnQUF, _keyCallback3OBNRN)
		const _returnValueg04s2T = await _parentItemIMEjaT.isRoot()
		const _returnValueFESpE1m = await _parentItemIMEjaT.isRoot()
		const _forceSettingParentChildxZenjpV = false;
		const _returnValuekziZeFk = await _childItemlJJeq50.setParent(_parentItemIMEjaT, _forceSettingParentChildxZenjpV)
		const _returnValueuGOgeXJ = await _childItemlJJeq50.getRank()
		const _returnValueCTPyMX1 = await _newVertexeIVJzpk.addChild(_childItemlJJeq50)
		const _returnValuep4FlMb8 = await _graphjxs3uqM.addVertex(_newVertexeIVJzpk)
		const _returnValueHxA3tX5 = null;
		const _getKeyYv2ctF = () => { return _returnValueHxA3tX5 };
		const _newVertexW0MkoLe = {
			"getKey": _getKeyYv2ctF
	}
		const _returnValuelwrVfqn = await _graphjxs3uqM.addVertex(_newVertexW0MkoLe)
		const _valuemxtrab5 = null;
		const _returnValuezFcAuAL = true;
		const _keyCallbackIoLWAcP = () => { return _returnValuezFcAuAL };
		const _startVertexiutGht = new DisjointSetItem(_valuemxtrab5, _keyCallbackIoLWAcP)
		const _valueyDYUzdM = null;
		const _returnValueE3ulR4t = "bTTynDdC9HRKIVqU8QdD5HeCQuiAfkjK1ZvO1SU9IKgwhmsK7tgESnqPFwWopnnS0DTdS61jCvYp3y8iOH7xws5";
		const _returnValueza4aGJz = () => { return _returnValueE3ulR4t };
		const _keyCallbackn5w6Iy8 = () => { return _returnValueza4aGJz };
		const _parentItemSikcWm6 = new DisjointSetItem(_valueyDYUzdM, _keyCallbackn5w6Iy8)
		const _arrayValuekzViMVS = {
		
	}
		const _returnValueVmBtZS2 = "f";
		const _arrayValueOPtF8xA = () => { return _returnValueVmBtZS2 };
		const _characterevdqkN = [_arrayValuekzViMVS, _arrayValueOPtF8xA]
		const _isCompleteWordRxYNXL = false;
		const _parentItemry7xbR1 = new TrieNode(_characterevdqkN, _isCompleteWordRxYNXL)
		const _returnValuerNv6Ba = await _parentItemry7xbR1.suggestChildren()
		const _returnValueHu9CfVM = await _parentItemry7xbR1.suggestChildren()
		const _characterPzGquQr = true;
		const _returnValueWrJNLTK = await _parentItemry7xbR1.hasChild(_characterPzGquQr)
		const _characterZdCmiuT = "wEUTnW6vJtVSX4KoTAoO2RMCKYfDP3M3hFXWXz6y8xiG0ZSQdkyugFRMKbnwcX4figpVJA";
		const _returnValuelFrrgaw = await _parentItemry7xbR1.hasChild(_characterZdCmiuT)
		const _forceSettingParentChildrZNJqXw = "JrpQTNCtTopYy77O9obwKjFAPtSlUiRFeMDy975FRBFVzdFbPWuFioGnoKsBoQfaRiefaHZKPbTz7fJ94GjGRidNP3WI4JM";
		const _returnValueL1eNjgd = await _parentItemSikcWm6.setParent(_parentItemry7xbR1, _forceSettingParentChildrZNJqXw)
		const _returnValueUyNV1w = await _parentItemSikcWm6.getChildren()
		const _returnValuej5AExvx = await _parentItemSikcWm6.getRank()
		const _returnValueZ1Z3Bnw = await _parentItemSikcWm6.isRoot()
		const _forceSettingParentChildSPFgvaB = false;
		const _returnValueQ4gnfvv = await _startVertexiutGht.setParent(_parentItemSikcWm6, _forceSettingParentChildSPFgvaB)
		const _returnValueHR75i87 = await bellmanFord(_graphjxs3uqM, _startVertexiutGht)
	});
})