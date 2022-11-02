export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuepb3ZaoO = true;
		const _getAllEdgesBTJgYpW = () => { return _returnValuepb3ZaoO };
		const _returnValueFgdU7Js = undefined;
		const _returnValueiXLQk6j = () => { return _returnValueFgdU7Js };
		const _getAllVerticesS0O22Q = () => { return _returnValueiXLQk6j };
		const _returnValueSByuOm = null;
		const _deleteEdgeEDgKAsv = () => { return _returnValueSByuOm };
		const _graphIxDXUfl = {
			"getAllEdges": _getAllEdgesBTJgYpW,
		"getAllVertices": _getAllVerticesS0O22Q,
		"deleteEdge": _deleteEdgeEDgKAsv
	}
		const _returnValuepGuFsEd = await eulerianPath(_graphIxDXUfl)
	});

	it('test for eulerianPath', async () => {
		const _returnValueo82ObDz = []
		const _getAllEdgesssKvFh = () => { return _returnValueo82ObDz };
		const _arrayValuenpOHWLW = []
		const _arrayValuelHTUcdH = true;
		const _arrayValueSTYoQc4 = [_arrayValuelHTUcdH]
		const _arrayValueJZDV1w3 = true;
		const _returnValuex5uH0e = [_arrayValuenpOHWLW, _arrayValueSTYoQc4, _arrayValueJZDV1w3]
		const _getAllVerticesnST6sq0 = () => { return _returnValuex5uH0e };
		const _returnValuediZwsIY = null;
		const _deleteEdgeR1Y2JVS = () => { return _returnValuediZwsIY };
		const _graphGW1Pa0v = {
			"getAllEdges": _getAllEdgesssKvFh,
		"getAllVertices": _getAllVerticesnST6sq0,
		"deleteEdge": _deleteEdgeR1Y2JVS
	}
		const _returnValueQspG1xO = await eulerianPath(_graphGW1Pa0v)
	});
})