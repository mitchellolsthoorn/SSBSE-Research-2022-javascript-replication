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
		const _graph5jxU1c = "MwQpXRmB8di3Uc60MNl03XyXc6PU6J5IlybsZbdBqaU7yvC8UH1FY7efUnsKcWza2VX6CMAkrJtsiOBUFxo";
		const _startVertexehCOXfC = -5.453957625301723;
		const _returnValueuTm2nd6 = await bellmanFord(_graph5jxU1c, _startVertexehCOXfC)
	});

	it('test for bellmanFord', async () => {
		const _graphLskLbFm = null;
		const _arrayValueWP30oom = {
		
	}
		const _arrayValuex3aDmxK = true;
		const _arrayValueTGsRjhE = "psja9CMfKOP6FcArKHmN1hC5spXth5J467bgmCtJEbAnm2NGnG6bDWdX9hkxCIr9UzQc5e7LaUE8cBQqGdKR";
		const _returnValueJ4LjsXc = [_arrayValueWP30oom, _arrayValuex3aDmxK, _arrayValueTGsRjhE]
		const _returnValueZyy1gXd = () => { return _returnValueJ4LjsXc };
		const _returnValueOaaRxmn = () => { return _returnValueZyy1gXd };
		const _getKeyfMjbJGa = () => { return _returnValueOaaRxmn };
		const _startVertexK64uvdd = {
			"getKey": _getKeyfMjbJGa
	}
		const _returnValuenYgtkDM = await bellmanFord(_graphLskLbFm, _startVertexK64uvdd)
	});

	it('test for bellmanFord', async () => {
		const _returnValuen4U6dY7 = []
		const _getAllVerticesXuDqjl7 = () => { return _returnValuen4U6dY7 };
		const _arrayValueBoVdScO = {
		
	}
		const _arrayValuelaVExW = -6.850098771483686;
		const _returnValueqqERDt = [_arrayValueBoVdScO, _arrayValuelaVExW]
		const _getVertexByKeyN9YY56 = () => { return _returnValueqqERDt };
		const _arrayValuekAF7WlW = false;
		const _arrayValueCVP023S = 8.219860535426456;
		const _returnValueA2QzsUD = [_arrayValuekAF7WlW, _arrayValueCVP023S]
		const _getNeighborsBceqiw9 = () => { return _returnValueA2QzsUD };
		const _returnValueukCkKS = "szlKnNfJ89m";
		const _findEdgecj5xuYz = () => { return _returnValueukCkKS };
		const _graphm7ODu1h = {
			"getAllVertices": _getAllVerticesXuDqjl7,
		"getVertexByKey": _getVertexByKeyN9YY56,
		"getNeighbors": _getNeighborsBceqiw9,
		"findEdge": _findEdgecj5xuYz
	}
		const _returnValuerfSVid = undefined;
		const _getKeywqtXzwB = () => { return _returnValuerfSVid };
		const _startVertexr1DROPv = {
			"getKey": _getKeywqtXzwB
	}
		const _returnValueZAto1tx = await bellmanFord(_graphm7ODu1h, _startVertexr1DROPv)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedybBR7M = false;
		const _graphJEZ7TeV = new Graph(_isDirectedybBR7M)
		const _returnValuesGI8SH0 = await _graphJEZ7TeV.getVerticesIndices()
		const _returnValueSuGluxw = await _graphJEZ7TeV.getWeight()
		const _returnValueyypsUz8 = -0.030035296061459604;
		const _getKeyQJudRYu = () => { return _returnValueyypsUz8 };
		const _newVertexg1aZ1cP = {
			"getKey": _getKeyQJudRYu
	}
		const _returnValueTjzJLfj = await _graphJEZ7TeV.addVertex(_newVertexg1aZ1cP)
		const _returnValueKlUnhox = "UPVT3KubDbqq5B3qK5PwOlf9CRKxcXzcP8LTFRUpjIpeUCCAY9bSF7qwGnqRks";
		const _valueK5kfJ1B = () => { return _returnValueKlUnhox };
		const _returnValuesHdBYPp = null;
		const _keyCallbackR7yOPRd = () => { return _returnValuesHdBYPp };
		const _startVertexwZtQal2 = new DisjointSetItem(_valueK5kfJ1B, _keyCallbackR7yOPRd)
		const _returnValueyCUQi9w = await _startVertexwZtQal2.getRank()
		const _returnValueCo7zZYm = await _startVertexwZtQal2.getRoot()
		const _returnValueuD0QpA8 = await _startVertexwZtQal2.isRoot()
		const _returnValueBSRGyrZ = await _startVertexwZtQal2.getRoot()
		const _returnValueYsIyM75 = await bellmanFord(_graphJEZ7TeV, _startVertexwZtQal2)
	});
})