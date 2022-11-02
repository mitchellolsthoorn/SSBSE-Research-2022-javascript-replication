export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphUGNgxoF = null;
		const _startVertextTDtcq = "oISRKd02qjQWonwy";
		const _returnValuenHdkobL = await bellmanFord(_graphUGNgxoF, _startVertextTDtcq)
	});

	it('test for bellmanFord', async () => {
		const _graphGFVXaTA = "k0iPQxXgFXvF9F63cH9sS4oUsQmG0";
		const _returnValueMAgAMxk = {
		
	}
		const _getKey05PO9r = () => { return _returnValueMAgAMxk };
		const _startVertexhwgaMnA = {
			"getKey": _getKey05PO9r
	}
		const _returnValueM25u8R = await bellmanFord(_graphGFVXaTA, _startVertexhwgaMnA)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedxPGBbD = false;
		const _graphGYTOUv1 = new Graph(_isDirectedxPGBbD)
		const _returnValueUWw7w0s = await _graphGYTOUv1.getAllEdges()
		const _returnValuekeoCcqF = "iCmwfiCKFAc";
		const _getKeyFgKuzck = () => { return _returnValuekeoCcqF };
		const _startVertexOkZikzs = {
			"getKey": _getKeyFgKuzck
	}
		const _returnValueXWaRI4q = await bellmanFord(_graphGYTOUv1, _startVertexOkZikzs)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedYEmGBKZ = false;
		const _graphRviDnPm = new Graph(_isDirectedYEmGBKZ)
		const _returnValuec6Udggo = false;
		const _getKeyHFP3ZTq = () => { return _returnValuec6Udggo };
		const _newVertexPlGaF6g = {
			"getKey": _getKeyHFP3ZTq
	}
		const _returnValueGHM6HtS = await _graphRviDnPm.addVertex(_newVertexPlGaF6g)
		const _returnValueVe1NMH = await _graphRviDnPm.getAllEdges()
		const _vertexKeyjDVmSie = -8.006315602718084;
		const _returnValueiFl352k = await _graphRviDnPm.getVertexByKey(_vertexKeyjDVmSie)
		const _valueecxFrr = true;
		const _returnValueT3O75xC = undefined;
		const _keyCallback47WfQj = () => { return _returnValueT3O75xC };
		const _startVertexzizHQwf = new DisjointSetItem(_valueecxFrr, _keyCallback47WfQj)
		const _returnValueEJoPA3B = await _startVertexzizHQwf.getRank()
		const _returnValuervueFgl = await _startVertexzizHQwf.getRank()
		const _returnValueEC1vsc = undefined;
		const _addChildDBubZGE = () => { return _returnValueEC1vsc };
		const _parentItemt0whWgA = {
			"addChild": _addChildDBubZGE
	}
		const _forceSettingParentChildE7IOSkN = true;
		const _returnValuepzo6hBO = await _startVertexzizHQwf.setParent(_parentItemt0whWgA, _forceSettingParentChildE7IOSkN)
		const _returnValuePVgypq = await bellmanFord(_graphRviDnPm, _startVertexzizHQwf)
	});
})