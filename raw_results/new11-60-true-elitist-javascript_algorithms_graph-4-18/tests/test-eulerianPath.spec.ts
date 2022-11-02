export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueqJQrqmq = 6.497750536828775;
		const _getAllEdgesOtqAxwJ = () => { return _returnValueqJQrqmq };
		const _returnValuetKcGSHU = undefined;
		const _getAllVerticesDsDwFf = () => { return _returnValuetKcGSHU };
		const _returnValuetoU5HOi = "uy3pWXal7z8AX1Gtmc8JxQAjFmedw8sq6v4kzm9SkFbGD1CyFlXNUDa3wPyqEx41Wus4L0Bj6LCvD";
		const _deleteEdgeS331eFx = () => { return _returnValuetoU5HOi };
		const _graphjFAhytG = {
			"getAllEdges": _getAllEdgesOtqAxwJ,
		"getAllVertices": _getAllVerticesDsDwFf,
		"deleteEdge": _deleteEdgeS331eFx
	}
		const _returnValueOI3I6Z4 = await eulerianPath(_graphjFAhytG)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedW4ePjEa = true;
		const _graphhhNpqDc = new Graph(_isDirectedW4ePjEa)
		const _returnValueF9q65F = await _graphhhNpqDc.getWeight()
		const _returnValueKHB6Dw = await _graphhhNpqDc.getWeight()
		const _returnValuehvJrnt = await eulerianPath(_graphhhNpqDc)
	});
})