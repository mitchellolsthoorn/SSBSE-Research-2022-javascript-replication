export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _graphmgItU5i = undefined;
		const _returnValue7kCKqR = []
		const _getKeyitbug35 = () => { return _returnValue7kCKqR };
		const _startVertexjaAcTks = {
			"getKey": _getKeyitbug35
	}
		const _returnValuenlz9euG = await dijkstra(_graphmgItU5i, _startVertexjaAcTks)
	});

	it('test for dijkstra', async () => {
		const _returnValueMFoANfM = []
		const _getAllVerticesy6i3AVp = () => { return _returnValueMFoANfM };
		const _returnValuehGusFe = "m628Uh";
		const _findEdgeAIJLUmE = () => { return _returnValuehGusFe };
		const _graphjLR4PZN = {
			"getAllVertices": _getAllVerticesy6i3AVp,
		"findEdge": _findEdgeAIJLUmE
	}
		const _returnValuesEA4HGJ = true;
		const _getKeyxSUcZOv = () => { return _returnValuesEA4HGJ };
		const _startVertexMZvpHnL = {
			"getKey": _getKeyxSUcZOv
	}
		const _returnValuesa9X901 = await dijkstra(_graphjLR4PZN, _startVertexMZvpHnL)
	});
})