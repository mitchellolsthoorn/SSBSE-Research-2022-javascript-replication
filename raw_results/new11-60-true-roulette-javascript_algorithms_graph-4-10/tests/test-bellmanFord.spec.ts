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
		const _returnValueYfuvpFo = null;
		const _getAllVerticesTs0X29i = () => { return _returnValueYfuvpFo };
		const _returnValueOBrf7S = null;
		const _getVertexByKeyjfzeTyt = () => { return _returnValueOBrf7S };
		const _returnValueWN8VxBr = "yX0Oqf6P5DIz5DE6dpNDwEgz4XaCPOG8PJnPEUegSKIRfHHFHmtoIe5r4cYyQGLkEmnxm8YUkAz3Eq4sWUK5dcDL1QUCX2rP";
		const _getNeighborss71dcJL = () => { return _returnValueWN8VxBr };
		const _returnValuer8lQDs = "5VmwV2DvxspxHVPcCBNDTeH";
		const _findEdge5wjAmt = () => { return _returnValuer8lQDs };
		const _graphRNKXu9x = {
			"getAllVertices": _getAllVerticesTs0X29i,
		"getVertexByKey": _getVertexByKeyjfzeTyt,
		"getNeighbors": _getNeighborss71dcJL,
		"findEdge": _findEdge5wjAmt
	}
		const _arrayValueWKUmiru = "SfOcsr7rOgOi144WoLMPJXk1gNqzVKpvDSS63lHoAOlKvGCovEWTqPB";
		const _arrayValuefE3P2Jp = -7.196075672557365;
		const _arrayValueNhU1Mu = -3.1688334953647637;
		const _arrayValueSa3PTx = "y4ELrB2l9rhWUyX4Hb1qgtr";
		const _arrayValueSmvVuki = [_arrayValueWKUmiru, _arrayValuefE3P2Jp, _arrayValueNhU1Mu, _arrayValueSa3PTx]
		const _returnValuefqJfwVL = [_arrayValueSmvVuki]
		const _getKeymfvhsj = () => { return _returnValuefqJfwVL };
		const _startVertexdHm0jw = {
			"getKey": _getKeymfvhsj
	}
		const _returnValuegi64ZYA = await bellmanFord(_graphRNKXu9x, _startVertexdHm0jw)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedg7ac26C = false;
		const _graphzu8wJeI = new Graph(_isDirectedg7ac26C)
		const _returnValueUexMp1f = await _graphzu8wJeI.getWeight()
		const _returnValuelDirJ1 = await _graphzu8wJeI.getAllEdges()
		const _returnValuejVI87FX = []
		const _getKeysTzph9o = () => { return _returnValuejVI87FX };
		const _startVertexEQLYSgY = {
			"getKey": _getKeysTzph9o
	}
		const _returnValueWv6APqY = await bellmanFord(_graphzu8wJeI, _startVertexEQLYSgY)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedyext8mu = true;
		const _graphzdHY4aZ = new Graph(_isDirectedyext8mu)
		const _arrayValuepa9K1T = undefined;
		const _arrayValueXMBgnzs = 7.987471723435021;
		const _valueFAAx8n3 = [_arrayValuepa9K1T, _arrayValueXMBgnzs]
		const _returnValueBMavyF5 = {
		
	}
		const _keyCallbackS9FO8LA = () => { return _returnValueBMavyF5 };
		const _newVertexkToVRCW = new DisjointSetItem(_valueFAAx8n3, _keyCallbackS9FO8LA)
		const _returnValuekCwX1O2 = await _newVertexkToVRCW.getRoot()
		const _returnValues1RhzLl = await _newVertexkToVRCW.getChildren()
		const _returnValuerLZ2ezP = await _graphzdHY4aZ.addVertex(_newVertexkToVRCW)
		const _returnValueaTzKCBC = await _graphzdHY4aZ.reverse()
		const _returnValuesyWkT9 = await _graphzdHY4aZ.getVerticesIndices()
		const _returnValuekwZEPD = await _graphzdHY4aZ.getVerticesIndices()
		const _valueyrbfM6O = -1.8704285475495332;
		const _returnValueyS20xYg = undefined;
		const _keyCallbackaUPcdg = () => { return _returnValueyS20xYg };
		const _startVertexXHUj102 = new DisjointSetItem(_valueyrbfM6O, _keyCallbackaUPcdg)
		const _returnValuenK4YSk7 = await _startVertexXHUj102.getRoot()
		const _returnValuerJ9QJuP = null;
		const _parentItemuGcBWf4 = () => { return _returnValuerJ9QJuP };
		const _forceSettingParentChildjFgQNCS = false;
		const _returnValueHyIjvvY = await _startVertexXHUj102.setParent(_parentItemuGcBWf4, _forceSettingParentChildjFgQNCS)
		const _returnValueapajhly = await _startVertexXHUj102.getRank()
		const _returnValueUqlve93 = await _startVertexXHUj102.getRank()
		const _returnValuePDqbTer = await bellmanFord(_graphzdHY4aZ, _startVertexXHUj102)
	});
})