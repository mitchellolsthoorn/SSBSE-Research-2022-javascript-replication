export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _arrayValueese6u6l = undefined;
		const _arrayValued6jD2TE = "RymNcnbCuIQ5Fi9xiIsjV9vk05itE0kyCwGVgJRUuTgTS1kYrM4us9HAapMXvBaL7viIbONClmg1U";
		const _returnValueKNauP6p = [_arrayValueese6u6l, _arrayValued6jD2TE]
		const _getAllVerticeswUvDn6e = () => { return _returnValueKNauP6p };
		const _returnValuedKiqshM = "CnJB36MrcTrcWwVnr6owvInkU7TBxc7OOnvzp8f8ITzVc54yreBcKdoxWpoLkWat8zDKp34bfUkYSnFHIcv5cicKeekHC2";
		const _getAdjacencyMatrixBvdGsyM = () => { return _returnValuedKiqshM };
		const _arrayValuef8p3Ol = "8s7PYsXIOQFMXRiV7K8XNGMBKgjrAzNQLGf3LCRExkwlUWrm2ASxnt2auTDtljryMDmHCmPJOmQnYHU1bxAqykLdgVG";
		const _arrayValuenblyUu = true;
		const _arrayValuetsn2MKr = {
		
	}
		const _arrayValuewVRfxOL = "3XsMQPj4p2ktBE7wITjw";
		const _returnValuerwyyl0 = [_arrayValuef8p3Ol, _arrayValuenblyUu, _arrayValuetsn2MKr, _arrayValuewVRfxOL]
		const _getVerticesIndices6IcqnK = () => { return _returnValuerwyyl0 };
		const _graphAaR8Ppo = {
			"getAllVertices": _getAllVerticeswUvDn6e,
		"getAdjacencyMatrix": _getAdjacencyMatrixBvdGsyM,
		"getVerticesIndices": _getVerticesIndices6IcqnK
	}
		const _returnValuemAaMXO3 = await bfTravellingSalesman(_graphAaR8Ppo)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedqwRaV41 = true;
		const _graphdSKeduI = new Graph(_isDirectedqwRaV41)
		const _returnValueMlarHuc = false;
		const _getKeyIuwjqaY = () => { return _returnValueMlarHuc };
		const _newVertexNOmgCaZ = {
			"getKey": _getKeyIuwjqaY
	}
		const _returnValueS7RPOg = await _graphdSKeduI.addVertex(_newVertexNOmgCaZ)
		const _returnValueenvLxlf = await _graphdSKeduI.reverse()
		const _returnValueo0pWjph = await _graphdSKeduI.getAllVertices()
		const _returnValuefjhmiVw = {
		
	}
		const _getKeyFxpUY5 = () => { return _returnValuefjhmiVw };
		const _startVertexUSqmj9F = {
			"getKey": _getKeyFxpUY5
	}
		const _endVertexTPjVy3G = false;
		const _returnValuedFYm51o = await _graphdSKeduI.findEdge(_startVertexUSqmj9F, _endVertexTPjVy3G)
		const _returnValueKVjQbiF = await bfTravellingSalesman(_graphdSKeduI)
	});
})