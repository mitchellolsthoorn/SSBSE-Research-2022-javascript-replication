export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuewDicCv9 = "YZyNTzxUVm3VhScNjwrwR7AuCjwOFgjzn3D33L3UnRzLvxERz16XD4NmNI3qk47wAjFC94PEODBHFM76SyKPjlAG";
		const _getAllEdgesa3JsCTQ = () => { return _returnValuewDicCv9 };
		const _returnValueW5Ojkmr = true;
		const _returnValuea6RGRtX = () => { return _returnValueW5Ojkmr };
		const _getAllVerticesmmfixqM = () => { return _returnValuea6RGRtX };
		const _arrayValueZNEtbVP = 9.286621311137388;
		const _arrayValueROY4HX4 = "bJvsYXXA1HJwvUlpIWCj3PR2BzNGcYO2fUlWmzSGflglhvlAJqjESrnTAglzCWTUDs4s1du56eNh6sgpbE1pp5RHT";
		const _arrayValueQaLZdUs = null;
		const _returnValueGVHWLcq = [_arrayValueZNEtbVP, _arrayValueROY4HX4, _arrayValueQaLZdUs]
		const _deleteEdgeKkiJRYt = () => { return _returnValueGVHWLcq };
		const _graphFolqiQA = {
			"getAllEdges": _getAllEdgesa3JsCTQ,
		"getAllVertices": _getAllVerticesmmfixqM,
		"deleteEdge": _deleteEdgeKkiJRYt
	}
		const _returnValuedV5JODB = await eulerianPath(_graphFolqiQA)
	});

	it('test for eulerianPath', async () => {
		const _isDirected6JEVX5 = false;
		const _graphI6kUgXA = new Graph(_isDirected6JEVX5)
		const _returnValueN9sw8I4 = await _graphI6kUgXA.getAllEdges()
		const _returnValueAxbBgec = await eulerianPath(_graphI6kUgXA)
	});
})