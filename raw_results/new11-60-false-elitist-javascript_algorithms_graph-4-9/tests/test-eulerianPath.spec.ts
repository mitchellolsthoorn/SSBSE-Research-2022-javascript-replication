export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _graphBi9HvKe = null;
		const _returnValuehrkNSNN = await eulerianPath(_graphBi9HvKe)
	});

	it('test for eulerianPath', async () => {
		const _returnValuevLCst0y = []
		const _getAllEdgesOFla5M9 = () => { return _returnValuevLCst0y };
		const _returnValueVXZyqe9 = null;
		const _getAllVerticespqb32us = () => { return _returnValueVXZyqe9 };
		const _returnValuehdJBYuu = "b1apo8qjIgOUyRDowbp4izc9gM5NNQOrQcJvIjq9nrOHyFjuN2znNnU";
		const _deleteEdgeQjrlEoA = () => { return _returnValuehdJBYuu };
		const _graphIp8S5H6 = {
			"getAllEdges": _getAllEdgesOFla5M9,
		"getAllVertices": _getAllVerticespqb32us,
		"deleteEdge": _deleteEdgeQjrlEoA
	}
		const _returnValueZHYhzL7 = await eulerianPath(_graphIp8S5H6)
	});
})