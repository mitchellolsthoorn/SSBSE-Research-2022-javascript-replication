export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _arrayValueQGkr44 = "VxJDPu2LMQ2kTk44YV22gw9UdnTbInlet6GnIWK4GAtAvasESMIVhRsdXTvk3i8CMlEig1";
		const _arrayValueOGMdBXj = false;
		const _graph4QwVc2 = [_arrayValueQGkr44, _arrayValueOGMdBXj]
		const _returnValuecC8ycdJ = await articulationPoints(_graph4QwVc2)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedLTt5cxC = false;
		const _graphiKy8qG5 = new Graph(_isDirectedLTt5cxC)
		const _returnValueAvXju9F = null;
		const _getNeighborsaAHkaXm = () => { return _returnValueAvXju9F };
		const _vertexWu9FefI = {
			"getNeighbors": _getNeighborsaAHkaXm
	}
		const _returnValuemXWIBWc = await _graphiKy8qG5.getNeighbors(_vertexWu9FefI)
		const _valueliaE1oH = null;
		const _returnValueEz4JxDL = false;
		const _keyCallbackwTdSliY = () => { return _returnValueEz4JxDL };
		const _newVertextH4Bf7F = new DisjointSetItem(_valueliaE1oH, _keyCallbackwTdSliY)
		const _returnValuePrlqVjc = await _newVertextH4Bf7F.getChildren()
		const _returnValuen0y6K8Q = await _graphiKy8qG5.addVertex(_newVertextH4Bf7F)
		const _returnValueQ5503kD = await articulationPoints(_graphiKy8qG5)
	});
})