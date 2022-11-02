export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueOTapIYS = "UXxOvBSYI88RHtH9kNozpMOFi9DY1uG4bxkpWIw25YcZHkDELa6OpBmwMGH2UenTK2PHXrX52izlmE9pu433pOi3emOrM";
		const _getAllEdgesMKF5o35 = () => { return _returnValueOTapIYS };
		const _returnValueu8IKUEI = "pIhV9F4jQwtaCSDud5DeHFwWvhFiQo2Nx1X5lVO74qwHetXFRjWRumMmlQWnLFmxrB2bvigZNE3F1ffbrJRE3C1SAMrx";
		const _getAllVerticesFz4eKqA = () => { return _returnValueu8IKUEI };
		const _returnValueIX1BUEl = null;
		const _deleteEdgeUY0eSFk = () => { return _returnValueIX1BUEl };
		const _graphEtJCge = {
			"getAllEdges": _getAllEdgesMKF5o35,
		"getAllVertices": _getAllVerticesFz4eKqA,
		"deleteEdge": _deleteEdgeUY0eSFk
	}
		const _returnValuebHETmy = await eulerianPath(_graphEtJCge)
	});

	it('test for eulerianPath', async () => {
		const _returnValueME5k2hz = []
		const _getAllEdgesFwrTzFe = () => { return _returnValueME5k2hz };
		const _returnValueX7GTryd = "b7McA88LIbFbqrH58qtcf5vcOmhs8aOiFGSovnAFFx89jv9Ez7cA";
		const _getAllVerticestD2SmEB = () => { return _returnValueX7GTryd };
		const _returnValuetigdoRy = null;
		const _deleteEdgeW02XRnv = () => { return _returnValuetigdoRy };
		const _graphGyPKg7L = {
			"getAllEdges": _getAllEdgesFwrTzFe,
		"getAllVertices": _getAllVerticestD2SmEB,
		"deleteEdge": _deleteEdgeW02XRnv
	}
		const _returnValuewylbIsW = await eulerianPath(_graphGyPKg7L)
	});
})