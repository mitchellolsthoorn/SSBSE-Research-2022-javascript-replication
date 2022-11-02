export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValuekBVOSnX = null;
		const _getAllVerticesrFmvFBr = () => { return _returnValuekBVOSnX };
		const _graphZ1057Ft = {
			"getAllVertices": _getAllVerticesrFmvFBr
	}
		const _returnValueRBs37NZ = await detectDirectedCycle(_graphZ1057Ft)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedsHJexk = true;
		const _graphsuq9NS2 = new Graph(_isDirectedsHJexk)
		const _returnValueejoGS7P = await _graphsuq9NS2.reverse()
		const _returnValuenU9I2fB = await detectDirectedCycle(_graphsuq9NS2)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedw9EXmrU = false;
		const _graphBbpLbAL = new Graph(_isDirectedw9EXmrU)
		const _returnValuet8B4TcQ = await _graphBbpLbAL.getAdjacencyMatrix()
		const _returnValueB1pGolu = 3.2801605375811267;
		const _getNeighborsbYoyd7s = () => { return _returnValueB1pGolu };
		const _vertexSSCFqIQ = {
			"getNeighbors": _getNeighborsbYoyd7s
	}
		const _returnValueESQj21A = await _graphBbpLbAL.getNeighbors(_vertexSSCFqIQ)
		const _valuesYLD9P = "1745HZ37RnQbYpG6m9vY9nCDmESnqtcQhXVql5C0CJ5ioxEmAllRM";
		const _arrayValuetbJ0w70 = false;
		const _arrayValuejSY21xH = undefined;
		const _arrayValuek2fTCRq = undefined;
		const _returnValueWNxNW1U = [_arrayValuetbJ0w70, _arrayValuejSY21xH, _arrayValuek2fTCRq]
		const _keyCallbackeDSrMdl = () => { return _returnValueWNxNW1U };
		const _newVertexb9bcTNT = new DisjointSetItem(_valuesYLD9P, _keyCallbackeDSrMdl)
		const _returnValuepvZyvNd = await _newVertexb9bcTNT.getRoot()
		const _returnValuenoiNxm = await _graphBbpLbAL.addVertex(_newVertexb9bcTNT)
		const _returnValuelk84kEI = await _graphBbpLbAL.getAllVertices()
		const _returnValueZiXxiXk = await detectDirectedCycle(_graphBbpLbAL)
	});
})