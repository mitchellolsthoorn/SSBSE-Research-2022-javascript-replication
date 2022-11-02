export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _returnValuem3MY0OC = -6.10897345069556;
		const _graphoAWVcoX = () => { return _returnValuem3MY0OC };
		const _returnValueDwGPtKk = await kruskal(_graphoAWVcoX)
	});

	it('test for kruskal', async () => {
		const _isDirectedX89guIn = true;
		const _returnValueU1rYd3t = false;
		const _getAllEdgesTmnPRMi = () => { return _returnValueU1rYd3t };
		const _arrayValueJj0fNi7 = undefined;
		const _arrayValuemMR5BNZ = undefined;
		const _arrayValueXyumYTl = [_arrayValuemMR5BNZ]
		const _arrayValueF7lZPMr = null;
		const _arrayValueLEMWUfV = -9.632749810122847;
		const _arrayValueHkF6MVJ = [_arrayValueJj0fNi7, _arrayValueXyumYTl, _arrayValueF7lZPMr, _arrayValueLEMWUfV]
		const _returnValuejsvsWEb = [_arrayValueHkF6MVJ]
		const _getAllVerticesNEkEqli = () => { return _returnValuejsvsWEb };
		const _graphR2FTaTb = {
			"isDirected": _isDirectedX89guIn,
		"getAllEdges": _getAllEdgesTmnPRMi,
		"getAllVertices": _getAllVerticesNEkEqli
	}
		const _returnValueiia4Vf = await kruskal(_graphR2FTaTb)
	});

	it('test for kruskal', async () => {
		const _isDirectedfSzamrl = false;
		const _graphZThOyO = new Graph(_isDirectedfSzamrl)
		const _returnValueoPueWaq = await _graphZThOyO.getAllEdges()
		const _returnValueJQfklht = await _graphZThOyO.getAllEdges()
		const _returnValueouSPehR = await _graphZThOyO.getAllVertices()
		const _vertexKeyGdM1ILP = {
		
	}
		const _returnValueZBlgy7K = await _graphZThOyO.getVertexByKey(_vertexKeyGdM1ILP)
		const _returnValueNWqaNk = await kruskal(_graphZThOyO)
	});
})