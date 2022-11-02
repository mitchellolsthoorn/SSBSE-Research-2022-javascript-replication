export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuePzB0Lv0 = null;
		const _returnValuebjfr7Wu = () => { return _returnValuePzB0Lv0 };
		const _getAllEdgesBA5P8PV = () => { return _returnValuebjfr7Wu };
		const _returnValueiJTzDzb = null;
		const _getAllVerticesKPylOh8 = () => { return _returnValueiJTzDzb };
		const _returnValueJiRSiLi = 8.556065488691683;
		const _deleteEdgeRVEdKpp = () => { return _returnValueJiRSiLi };
		const _graphtRczxbN = {
			"getAllEdges": _getAllEdgesBA5P8PV,
		"getAllVertices": _getAllVerticesKPylOh8,
		"deleteEdge": _deleteEdgeRVEdKpp
	}
		const _returnValueD9KujM = await eulerianPath(_graphtRczxbN)
	});

	it('test for eulerianPath', async () => {
		const _returnValuenUe5wlm = []
		const _getAllEdgesTBkJF2o = () => { return _returnValuenUe5wlm };
		const _arrayValueUq1weB = -6.071129883309602;
		const _arrayValueq7xioUH = true;
		const _arrayValueY3KSYpa = [_arrayValueUq1weB, _arrayValueq7xioUH]
		const _arrayValueI6CRpp = false;
		const _arrayValueltlhwsG = true;
		const _returnValueyq0SsY8 = [_arrayValueY3KSYpa, _arrayValueI6CRpp, _arrayValueltlhwsG]
		const _getAllVerticesTjLqGOI = () => { return _returnValueyq0SsY8 };
		const _deleteEdgeaxGeJAR = null;
		const _graphU1DYiqV = {
			"getAllEdges": _getAllEdgesTBkJF2o,
		"getAllVertices": _getAllVerticesTjLqGOI,
		"deleteEdge": _deleteEdgeaxGeJAR
	}
		const _returnValuexHAuB6s = await eulerianPath(_graphU1DYiqV)
	});
})