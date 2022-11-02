export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _graphFMdbp0i = "fYOrOq8HJ5fHYhITrlJXAIqWIjWnfK";
		const _returnValuex3FCgmy = await kruskal(_graphFMdbp0i)
	});

	it('test for kruskal', async () => {
		const _arrayValueaeTXL1C = "ABxVVSNfvioAwSS45zwVqaJ1JAtjyXY9elxcsF0Dt6IwTojPSh4h";
		const _isDirectedP0RLWaJ = [_arrayValueaeTXL1C]
		const _getAllEdgeszyWJr29 = -0.5806314172755211;
		const _returnValueIimMv5u = undefined;
		const _getAllVerticesnvBCNA = () => { return _returnValueIimMv5u };
		const _graphg7YRNcY = {
			"isDirected": _isDirectedP0RLWaJ,
		"getAllEdges": _getAllEdgeszyWJr29,
		"getAllVertices": _getAllVerticesnvBCNA
	}
		const _returnValueRPqD7yq = await kruskal(_graphg7YRNcY)
	});

	it('test for kruskal', async () => {
		const _isDirectedrvm31y = false;
		const _graphFB3lKFC = new Graph(_isDirectedrvm31y)
		const _returnValuec62Lx0 = await _graphFB3lKFC.toString()
		const _returnValueT1QXu25 = await kruskal(_graphFB3lKFC)
	});
})