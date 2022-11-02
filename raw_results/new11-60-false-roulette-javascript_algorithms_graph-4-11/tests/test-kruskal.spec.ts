export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _arrayValueIlNl1a4 = null;
		const _arrayValueOzzt8gx = undefined;
		const _arrayValueF95Gehy = null;
		const _returnValueWdKGh4d = [_arrayValueIlNl1a4, _arrayValueOzzt8gx, _arrayValueF95Gehy]
		const _graphV25Ncvj = () => { return _returnValueWdKGh4d };
		const _returnValuenNLJ74I = await kruskal(_graphV25Ncvj)
	});

	it('test for kruskal', async () => {
		const _arrayValueKBiM7gk = 2.579492042441185;
		const _arrayValueyQz5Msp = undefined;
		const _isDirectedYkDHTTn = [_arrayValueKBiM7gk, _arrayValueyQz5Msp]
		const _returnValueSSiljgV = null;
		const _getAllEdgesMZ5KnJ = () => { return _returnValueSSiljgV };
		const _returnValuekPFB516 = {
		
	}
		const _getAllVerticesKapPNi = () => { return _returnValuekPFB516 };
		const _grapheOhQCVQ = {
			"isDirected": _isDirectedYkDHTTn,
		"getAllEdges": _getAllEdgesMZ5KnJ,
		"getAllVertices": _getAllVerticesKapPNi
	}
		const _returnValuelW9oOF = await kruskal(_grapheOhQCVQ)
	});

	it('test for kruskal', async () => {
		const _isDirectedlcmykxe = false;
		const _graphPDuNrLd = new Graph(_isDirectedlcmykxe)
		const _returnValueGPh0RFP = null;
		const _getNeighborsj5yy1oP = () => { return _returnValueGPh0RFP };
		const _vertexmwCeDy = {
			"getNeighbors": _getNeighborsj5yy1oP
	}
		const _returnValueolE9yYi = await _graphPDuNrLd.getNeighbors(_vertexmwCeDy)
		const _returnValueUMDDX6t = await _graphPDuNrLd.getWeight()
		const _returnValueuebzXSX = await kruskal(_graphPDuNrLd)
	});
})