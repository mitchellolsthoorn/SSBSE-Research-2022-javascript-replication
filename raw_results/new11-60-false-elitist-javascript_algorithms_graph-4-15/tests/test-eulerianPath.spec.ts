export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _graphR4SLE0k = true;
		const _returnValueW4kllzg = await eulerianPath(_graphR4SLE0k)
	});

	it('test for eulerianPath', async () => {
		const _returnValuezN9fyhi = []
		const _getAllEdgesmF0ORVI = () => { return _returnValuezN9fyhi };
		const _arrayValueGTsftp = null;
		const _arrayValuez3LHKj = -8.514018545762724;
		const _arrayValuemZRKivP = undefined;
		const _returnValueFLpCTo4 = [_arrayValueGTsftp, _arrayValuez3LHKj, _arrayValuemZRKivP]
		const _getAllVerticesYTQ1JXW = () => { return _returnValueFLpCTo4 };
		const _returnValueg4Kb4v4 = undefined;
		const _deleteEdgepZVsrbs = () => { return _returnValueg4Kb4v4 };
		const _graphk4jfk7O = {
			"getAllEdges": _getAllEdgesmF0ORVI,
		"getAllVertices": _getAllVerticesYTQ1JXW,
		"deleteEdge": _deleteEdgepZVsrbs
	}
		const _returnValuegSVrViw = await eulerianPath(_graphk4jfk7O)
	});
})