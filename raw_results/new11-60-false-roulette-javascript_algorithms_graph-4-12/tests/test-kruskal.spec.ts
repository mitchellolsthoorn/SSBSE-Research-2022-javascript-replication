export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _returnValuevcCLMuw = undefined;
		const _graphacFMqJ = () => { return _returnValuevcCLMuw };
		const _returnValueePpCyJF = await kruskal(_graphacFMqJ)
	});

	it('test for kruskal', async () => {
		const _isDirectedhQDcV53 = "ALT6";
		const _arrayValueNVP931e = null;
		const _arrayValuecso5TpT = null;
		const _returnValuembej23r = [_arrayValueNVP931e, _arrayValuecso5TpT]
		const _getAllEdgescfrxlvn = () => { return _returnValuembej23r };
		const _arrayValuel0TOSAX = "raYzNLblhBBAHJltpx1FnTvuS4";
		const _arrayValuecaMxjP = 0.5297454599266231;
		const _arrayValuepr1CV1i = null;
		const _getAllVerticesugwFlB9 = [_arrayValuel0TOSAX, _arrayValuecaMxjP, _arrayValuepr1CV1i]
		const _graphKcluiya = {
			"isDirected": _isDirectedhQDcV53,
		"getAllEdges": _getAllEdgescfrxlvn,
		"getAllVertices": _getAllVerticesugwFlB9
	}
		const _returnValuecQ92NXh = await kruskal(_graphKcluiya)
	});

	it('test for kruskal', async () => {
		const _isDirectedMbpm36c = undefined;
		const _graphzytkxtp = new Graph(_isDirectedMbpm36c)
		const _returnValuekPnZP0h = await _graphzytkxtp.getAllEdges()
		const _returnValueV663FP = await _graphzytkxtp.getVerticesIndices()
		const _returnValueDJIkIwN = await _graphzytkxtp.reverse()
		const _returnValueU0iwAN2 = await kruskal(_graphzytkxtp)
	});
})