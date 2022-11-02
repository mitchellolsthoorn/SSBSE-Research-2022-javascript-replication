export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValuemJKIvF = "goOOllWp4v6euuHC1yk8dJkUkrix";
		const _getAllVerticesUBEu9xl = () => { return _returnValuemJKIvF };
		const _returnValueDjXXpEd = 3.30033782045372;
		const _getVertexByKeyt9N9o6P = () => { return _returnValueDjXXpEd };
		const _getNeighborsUgiKPIB = false;
		const _returnValuepvGx4aX = "uypd8kOvgrOQ6BNBjcjRqq1HF6UmSGIGoOCQPWkEM8WnePJ2D6J6";
		const _findEdgeo4td2i3 = () => { return _returnValuepvGx4aX };
		const _graphtS8aJOG = {
			"getAllVertices": _getAllVerticesUBEu9xl,
		"getVertexByKey": _getVertexByKeyt9N9o6P,
		"getNeighbors": _getNeighborsUgiKPIB,
		"findEdge": _findEdgeo4td2i3
	}
		const _returnValueqIQhTez = true;
		const _getKeygGaOSqX = () => { return _returnValueqIQhTez };
		const _startVertexuExhp3t = {
			"getKey": _getKeygGaOSqX
	}
		const _returnValueSU3wEe = await bellmanFord(_graphtS8aJOG, _startVertexuExhp3t)
	});

	it('test for bellmanFord', async () => {
		const _returnValue7Gx0fF = []
		const _getAllVerticessKCnRk = () => { return _returnValue7Gx0fF };
		const _returnValueylW1efy = "ka";
		const _getVertexByKeyG6FzIY1 = () => { return _returnValueylW1efy };
		const _returnValueLTz4RUC = {
		
	}
		const _getNeighborsoCmMbXX = () => { return _returnValueLTz4RUC };
		const _returnValuewRFcVKj = null;
		const _findEdgeLmuI875 = () => { return _returnValuewRFcVKj };
		const _graphvnIldth = {
			"getAllVertices": _getAllVerticessKCnRk,
		"getVertexByKey": _getVertexByKeyG6FzIY1,
		"getNeighbors": _getNeighborsoCmMbXX,
		"findEdge": _findEdgeLmuI875
	}
		const _returnValueTKQ09Qt = undefined;
		const _returnValueUZSbrLP = () => { return _returnValueTKQ09Qt };
		const _getKeym7myM4U = () => { return _returnValueUZSbrLP };
		const _startVertexxtqMVeH = {
			"getKey": _getKeym7myM4U
	}
		const _returnValuexbM3Vpg = await bellmanFord(_graphvnIldth, _startVertexxtqMVeH)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedHH0IJDC = true;
		const _graphLD7vQ2U = new Graph(_isDirectedHH0IJDC)
		const _returnValuesDpr69w = await _graphLD7vQ2U.getWeight()
		const _returnValuedVFgYMP = await _graphLD7vQ2U.getWeight()
		const _returnValueGMHVsoI = "BIDQXt8BH4J";
		const _getKeyngwwNpT = () => { return _returnValueGMHVsoI };
		const _newVertexgNCk01C = {
			"getKey": _getKeyngwwNpT
	}
		const _returnValueiUwZMVH = await _graphLD7vQ2U.addVertex(_newVertexgNCk01C)
		const _returnValueLvQMJaM = await _graphLD7vQ2U.getWeight()
		const _returnValuedTlxb1G = await _graphLD7vQ2U.reverse()
		const _returnValueop0eHv = 6.689795030127726;
		const _getKeygreXv66 = () => { return _returnValueop0eHv };
		const _startVertexyZvOtYz = {
			"getKey": _getKeygreXv66
	}
		const _returnValuev1slCS = await bellmanFord(_graphLD7vQ2U, _startVertexyZvOtYz)
	});
})