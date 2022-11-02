export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuewv8fszI = undefined;
		const _getAllVerticesRxk7o9y = () => { return _returnValuewv8fszI };
		const _arrayValueF5uqsSB = 0.010225161395620574;
		const _returnValueppZvgis = [_arrayValueF5uqsSB]
		const _getAllEdgesVcuG5Jk = () => { return _returnValueppZvgis };
		const _graphNZeucH9 = {
			"getAllVertices": _getAllVerticesRxk7o9y,
		"getAllEdges": _getAllEdgesVcuG5Jk
	}
		const _returnValuehTW2hGh = await detectUndirectedCycleUsingDisjointSet(_graphNZeucH9)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedlKKFrcg = null;
		const _graphgiJHbkl = new Graph(_isDirectedlKKFrcg)
		const _returnValueKNLytNH = await _graphgiJHbkl.getVerticesIndices()
		const _returnValuepAduhSU = await _graphgiJHbkl.getVerticesIndices()
		const _arrayValuefxVp3xs = null;
		const _arrayValueHmCJ73d = 4.226386326467736;
		const _arrayValueqVq6V1K = "gisg5FBKfidIdemY7MlIIm4sdjxuQs5UQbjxBu8blBNCxsSFcMkkxx9rXKbJAf9mmyy2upZucdpTAKcd41j74";
		const _arrayValuey9A5RPn = [_arrayValueqVq6V1K]
		const _arrayValueaWEUmDJ = [_arrayValueHmCJ73d, _arrayValuey9A5RPn]
		const _vertexKey7WUg6y = [_arrayValuefxVp3xs, _arrayValueaWEUmDJ]
		const _returnValuek1njNmg = await _graphgiJHbkl.getVertexByKey(_vertexKey7WUg6y)
		const _returnValueTfIoXUT = await _graphgiJHbkl.toString()
		const _returnValueMvUc4G7 = await detectUndirectedCycleUsingDisjointSet(_graphgiJHbkl)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuepKMmAWi = []
		const _getAllVerticesA8zxLBx = () => { return _returnValuepKMmAWi };
		const _arrayValueyvOA2u = undefined;
		const _arrayValueEVVdRUm = 5.038996002391849;
		const _returnValueHnxjvbI = [_arrayValueyvOA2u, _arrayValueEVVdRUm]
		const _getAllEdgeslZKpQu6 = () => { return _returnValueHnxjvbI };
		const _graphmkEwdwM = {
			"getAllVertices": _getAllVerticesA8zxLBx,
		"getAllEdges": _getAllEdgeslZKpQu6
	}
		const _returnValuesEgHGKS = await detectUndirectedCycleUsingDisjointSet(_graphmkEwdwM)
	});
})