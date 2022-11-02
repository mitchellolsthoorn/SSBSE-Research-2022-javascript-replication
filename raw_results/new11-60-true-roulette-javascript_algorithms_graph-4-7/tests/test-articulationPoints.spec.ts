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
		const _returnValueyjn0yf = 2.0949850533119516;
		const _getAllVerticesADaHNy3 = () => { return _returnValueyjn0yf };
		const _graphlmZWNrs = {
			"getAllVertices": _getAllVerticesADaHNy3
	}
		const _returnValueYEO8hZ1 = await articulationPoints(_graphlmZWNrs)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedPiLPkX = false;
		const _graphA3aiBHR = new Graph(_isDirectedPiLPkX)
		const _valuet43z4bQ = false;
		const _returnValueOIkZT8 = {
		
	}
		const _keyCallbackvTmFQGP = () => { return _returnValueOIkZT8 };
		const _newVertexeR9WlLD = new DisjointSetItem(_valuet43z4bQ, _keyCallbackvTmFQGP)
		const _returnValueCMci4iZ = await _newVertexeR9WlLD.getChildren()
		const _returnValueR8Ak4cF = await _newVertexeR9WlLD.getRoot()
		const _returnValueKzovqq0 = undefined;
		const _addChildhv7yFIh = () => { return _returnValueKzovqq0 };
		const _parentItemVfO6v8 = {
			"addChild": _addChildhv7yFIh
	}
		const _forceSettingParentChildIpcVCyS = true;
		const _returnValueBte9Yuj = await _newVertexeR9WlLD.setParent(_parentItemVfO6v8, _forceSettingParentChildIpcVCyS)
		const _returnValueHSeW3fg = await _newVertexeR9WlLD.isRoot()
		const _returnValueYeEqGsC = await _graphA3aiBHR.addVertex(_newVertexeR9WlLD)
		const _returnValuedupFJTw = await _graphA3aiBHR.getVerticesIndices()
		const _returnValueVpAoSQU = await articulationPoints(_graphA3aiBHR)
	});
})