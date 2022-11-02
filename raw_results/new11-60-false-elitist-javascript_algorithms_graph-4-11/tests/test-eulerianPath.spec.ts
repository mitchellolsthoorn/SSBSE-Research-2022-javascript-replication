export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuep2vpMNU = null;
		const _getAllEdgesYdYS3Oq = () => { return _returnValuep2vpMNU };
		const _getAllVerticesP5Pq2MT = -0.49860790971418467;
		const _returnValuexw1a8Mz = undefined;
		const _deleteEdgeyeblWoU = () => { return _returnValuexw1a8Mz };
		const _graphaEYWY8p = {
			"getAllEdges": _getAllEdgesYdYS3Oq,
		"getAllVertices": _getAllVerticesP5Pq2MT,
		"deleteEdge": _deleteEdgeyeblWoU
	}
		const _returnValueLqoxbgd = await eulerianPath(_graphaEYWY8p)
	});

	it('test for eulerianPath', async () => {
		const _returnValuefluno01 = []
		const _getAllEdgesIGrJ0G = () => { return _returnValuefluno01 };
		const _returnValueq0xHQYX = null;
		const _getAllVerticesUB6hzHh = () => { return _returnValueq0xHQYX };
		const _deleteEdgeQQTGEJi = []
		const _graphCElPWUV = {
			"getAllEdges": _getAllEdgesIGrJ0G,
		"getAllVertices": _getAllVerticesUB6hzHh,
		"deleteEdge": _deleteEdgeQQTGEJi
	}
		const _returnValueeznPG7u = await eulerianPath(_graphCElPWUV)
	});
})