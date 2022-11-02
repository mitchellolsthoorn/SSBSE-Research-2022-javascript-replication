export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _graphFwRS9Xk = null;
		const _returnValuenkfjyBU = await eulerianPath(_graphFwRS9Xk)
	});

	it('test for eulerianPath', async () => {
		const _returnValueg8TBbY6 = []
		const _getAllEdgesd0Timw0 = () => { return _returnValueg8TBbY6 };
		const _arrayValuekp8CA2 = {
		
	}
		const _arrayValuejmJb6Y = undefined;
		const _arrayValuelZ0PyQ5 = -1.5888049694691304;
		const _returnValueTaZNHnI = [_arrayValuekp8CA2, _arrayValuejmJb6Y, _arrayValuelZ0PyQ5]
		const _getAllVerticesJLBE1uu = () => { return _returnValueTaZNHnI };
		const _returnValueIVdRL5e = {
		
	}
		const _deleteEdgeEvPJreA = () => { return _returnValueIVdRL5e };
		const _graphbFtJQeG = {
			"getAllEdges": _getAllEdgesd0Timw0,
		"getAllVertices": _getAllVerticesJLBE1uu,
		"deleteEdge": _deleteEdgeEvPJreA
	}
		const _returnValued4fLnD = await eulerianPath(_graphbFtJQeG)
	});

	it('test for eulerianPath', async () => {
		const _returnValueeqKhdeH = []
		const _getAllEdgesRDb99yP = () => { return _returnValueeqKhdeH };
		const _returnValueaEC49Pr = []
		const _getAllVerticesn3EEUOg = () => { return _returnValueaEC49Pr };
		const _returnValueK0d83G8 = undefined;
		const _deleteEdgeNsmw9n = () => { return _returnValueK0d83G8 };
		const _graphCGif06i = {
			"getAllEdges": _getAllEdgesRDb99yP,
		"getAllVertices": _getAllVerticesn3EEUOg,
		"deleteEdge": _deleteEdgeNsmw9n
	}
		const _returnValueFkgbyjm = await eulerianPath(_graphCGif06i)
	});
})