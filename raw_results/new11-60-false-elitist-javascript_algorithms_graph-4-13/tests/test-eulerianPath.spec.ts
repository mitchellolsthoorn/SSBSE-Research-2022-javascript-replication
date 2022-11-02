export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueMVc8Gk = false;
		const _getAllEdgeskYVoXu0 = () => { return _returnValueMVc8Gk };
		const _returnValueYJd9TJ = 7.369707866657322;
		const _getAllVerticesEcyczqa = () => { return _returnValueYJd9TJ };
		const _returnValueKCPC66e = []
		const _deleteEdgeOfvYZLM = () => { return _returnValueKCPC66e };
		const _graphuZBLuX7 = {
			"getAllEdges": _getAllEdgeskYVoXu0,
		"getAllVertices": _getAllVerticesEcyczqa,
		"deleteEdge": _deleteEdgeOfvYZLM
	}
		const _returnValueN73RzUT = await eulerianPath(_graphuZBLuX7)
	});

	it('test for eulerianPath', async () => {
		const _returnValueOIkSK7C = []
		const _getAllEdgesa8i7JzR = () => { return _returnValueOIkSK7C };
		const _returnValueQO6DOg = undefined;
		const _getAllVerticesAF7eyR0 = () => { return _returnValueQO6DOg };
		const _returnValueZAs0aHz = "3WS67Ln9hOV1wX2RwzNnH7k6omyuEnaEVd9i";
		const _deleteEdgeCHSiIgn = () => { return _returnValueZAs0aHz };
		const _graphmZf3rPc = {
			"getAllEdges": _getAllEdgesa8i7JzR,
		"getAllVertices": _getAllVerticesAF7eyR0,
		"deleteEdge": _deleteEdgeCHSiIgn
	}
		const _returnValueMUkVEou = await eulerianPath(_graphmZf3rPc)
	});
})