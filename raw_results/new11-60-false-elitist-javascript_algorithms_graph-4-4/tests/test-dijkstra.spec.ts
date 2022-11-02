export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _arrayValuePpLKRld = {
		
	}
		const _returnValueZE6emOc = [_arrayValuePpLKRld]
		const _getAllVerticesKvztHF = () => { return _returnValueZE6emOc };
		const _returnValuejIjYzkm = undefined;
		const _returnValueTkmXTH2 = () => { return _returnValuejIjYzkm };
		const _findEdgePS0NLel = () => { return _returnValueTkmXTH2 };
		const _graphRPWczuJ = {
			"getAllVertices": _getAllVerticesKvztHF,
		"findEdge": _findEdgePS0NLel
	}
		const _returnValuekOVMVaY = false;
		const _getKeyOdmEUre = () => { return _returnValuekOVMVaY };
		const _startVertexNNuMc07 = {
			"getKey": _getKeyOdmEUre
	}
		const _returnValuevgHVE9j = await dijkstra(_graphRPWczuJ, _startVertexNNuMc07)
	});

	it('test for dijkstra', async () => {
		const _returnValuekX0gaBg = []
		const _getAllVerticesrAOQJKP = () => { return _returnValuekX0gaBg };
		const _arrayValueDaySphY = null;
		const _arrayValueIsgczBa = null;
		const _arrayValueJvZ5L4E = null;
		const _arrayValuey416WFs = undefined;
		const _arrayValueBXWvGU2 = "8WoXwFry";
		const _returnValuegGumSzD = [_arrayValueDaySphY, _arrayValueIsgczBa, _arrayValueJvZ5L4E, _arrayValuey416WFs, _arrayValueBXWvGU2]
		const _findEdgeebQlZp = () => { return _returnValuegGumSzD };
		const _graphSS2RoGN = {
			"getAllVertices": _getAllVerticesrAOQJKP,
		"findEdge": _findEdgeebQlZp
	}
		const _returnValueUUnxbno = {
		
	}
		const _getKeyg2TdAsX = () => { return _returnValueUUnxbno };
		const _startVertexKuP4wj = {
			"getKey": _getKeyg2TdAsX
	}
		const _returnValuehRJOyRP = await dijkstra(_graphSS2RoGN, _startVertexKuP4wj)
	});
})