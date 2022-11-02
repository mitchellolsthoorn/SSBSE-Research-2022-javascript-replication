export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueDSAH3rP = true;
		const _getAllVerticesUParUAU = () => { return _returnValueDSAH3rP };
		const _returnValuez2VrNM = false;
		const _getVertexByKeywcrFe1g = () => { return _returnValuez2VrNM };
		const _returnValueLfOtykq = "ln84tHhlKtX946b2MXTlw28lvq3ZDDzKV7eicseyDpm8BulfW1Tx4pGw33pBNYJgSmxQd5z";
		const _getNeighborsGLLIyZ = () => { return _returnValueLfOtykq };
		const _findEdgeMsxWG8 = null;
		const _graphTJqE7a = {
			"getAllVertices": _getAllVerticesUParUAU,
		"getVertexByKey": _getVertexByKeywcrFe1g,
		"getNeighbors": _getNeighborsGLLIyZ,
		"findEdge": _findEdgeMsxWG8
	}
		const _returnValueK194xlT = undefined;
		const _startVertexuhfetw = () => { return _returnValueK194xlT };
		const _returnValuefOz8QuV = await bellmanFord(_graphTJqE7a, _startVertexuhfetw)
	});

	it('test for bellmanFord', async () => {
		const _returnValuerQl26d = true;
		const _graphbJi3yr = () => { return _returnValuerQl26d };
		const _valueFG8cTBC = -1.4000263889588922;
		const _startVertexKm4G23j = new GraphVertex(_valueFG8cTBC)
		const _requiredEdgeKsAnboG = true;
		const _returnValuetFuUH1Q = await _startVertexKm4G23j.hasEdge(_requiredEdgeKsAnboG)
		const _edgeteH9i8C = -9.458479519911373;
		const _returnValuexupHe1D = await _startVertexKm4G23j.addEdge(_edgeteH9i8C)
		const _returnValueR7otGco = await bellmanFord(_graphbJi3yr, _startVertexKm4G23j)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedxkSdIaX = false;
		const _graphnbdPV83 = new Graph(_isDirectedxkSdIaX)
		const _returnValuekdupZf = await _graphnbdPV83.getVerticesIndices()
		const _returnValuekiOVc94 = await _graphnbdPV83.getWeight()
		const _returnValuec5nNFRo = await _graphnbdPV83.getWeight()
		const _valuehLcHra8 = undefined;
		const _returnValuelnvTxXV = {
		
	}
		const _keyCallbackOFGZiMV = () => { return _returnValuelnvTxXV };
		const _startVertexVg6fE7N = new DisjointSetItem(_valuehLcHra8, _keyCallbackOFGZiMV)
		const _returnValuezuJamzG = undefined;
		const _addChildCQ1Kkcs = () => { return _returnValuezuJamzG };
		const _parentItemvpidZMo = {
			"addChild": _addChildCQ1Kkcs
	}
		const _forceSettingParentChildX21970q = undefined;
		const _returnValue7CEYAg = await _startVertexVg6fE7N.setParent(_parentItemvpidZMo, _forceSettingParentChildX21970q)
		const _returnValuesAiRryX = await _startVertexVg6fE7N.isRoot()
		const _returnValuerm1jN3 = await bellmanFord(_graphnbdPV83, _startVertexVg6fE7N)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedVoMUvOe = false;
		const _graphtrJOrL = new Graph(_isDirectedVoMUvOe)
		const _arrayValueC9oiha = undefined;
		const _returnValueYG13yXv = []
		const _arrayValueu6DXQKh = () => { return _returnValueYG13yXv };
		const _arrayValueURrw0OS = true;
		const _vertexKeyTkXFtBv = [_arrayValueC9oiha, _arrayValueu6DXQKh, _arrayValueURrw0OS]
		const _returnValuekWaYZHr = await _graphtrJOrL.getVertexByKey(_vertexKeyTkXFtBv)
		const _arrayValuejxYgAKi = "HYT8huZ9A30JC";
		const _valueX5PiLss = [_arrayValuejxYgAKi]
		const _returnValueC9CDB4e = "mRdp";
		const _keyCallbackhcNahP = () => { return _returnValueC9CDB4e };
		const _newVertexxjQC7Zm = new DisjointSetItem(_valueX5PiLss, _keyCallbackhcNahP)
		const _returnValuee380XcZ = await _newVertexxjQC7Zm.isRoot()
		const _parentItemmrkk3Ab = null;
		const _forceSettingParentChild7KlCjK = false;
		const _returnValueIgToV1r = await _newVertexxjQC7Zm.setParent(_parentItemmrkk3Ab, _forceSettingParentChild7KlCjK)
		const _returnValueM4QA6x = await _newVertexxjQC7Zm.getRoot()
		const _returnValuenxhuAzV = await _graphtrJOrL.addVertex(_newVertexxjQC7Zm)
		const _arrayValueGKbVJU7 = true;
		const _arrayValueVQeKsx7 = 4.714059248287759;
		const _arrayValuehmfspqZ = 7.4055331229003265;
		const _returnValueFxN7aEp = "OPUSQmXRrbFkVsV4XQBmB6n2CQSsqRkggFQKfYF1E";
		const _arrayValueQ3TQBmF = () => { return _returnValueFxN7aEp };
		const _arrayValueRqs92WZ = true;
		const _arrayValueffT2lkh = [_arrayValuehmfspqZ, _arrayValueQ3TQBmF, _arrayValueRqs92WZ]
		const _arrayValueDpbnLvj = true;
		const _arrayValuenzCbWeU = [_arrayValueffT2lkh, _arrayValueDpbnLvj]
		const _arrayValueUhGWsqi = [_arrayValueGKbVJU7, _arrayValueVQeKsx7, _arrayValuenzCbWeU]
		const _valuei5Hr6L0 = [_arrayValueUhGWsqi]
		const _returnValuetYaVlG = {
		
	}
		const _keyCallbackJmuvGU5 = () => { return _returnValuetYaVlG };
		const _startVertexVt0aAQW = new DisjointSetItem(_valuei5Hr6L0, _keyCallbackJmuvGU5)
		const _returnValuesGsHrcw = await _startVertexVt0aAQW.getKey()
		const _returnValueDKCQu0l = await _startVertexVt0aAQW.isRoot()
		const _returnValuertbMzvY = await _startVertexVt0aAQW.getRoot()
		const _returnValuevvQrF18 = await bellmanFord(_graphtrJOrL, _startVertexVt0aAQW)
	});
})