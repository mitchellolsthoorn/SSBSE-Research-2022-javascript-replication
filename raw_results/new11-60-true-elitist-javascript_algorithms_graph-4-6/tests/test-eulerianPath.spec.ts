export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValueGFvuTwq = undefined;
		const _arrayValueGY3sBNI = null;
		const _returnValueZKxDsn1 = [_arrayValueGFvuTwq, _arrayValueGY3sBNI]
		const _getAllEdgesY1rIobj = () => { return _returnValueZKxDsn1 };
		const _returnValueCbScT84 = 0.22098813897583902;
		const _getAllVerticesxUEAwjd = () => { return _returnValueCbScT84 };
		const _returnValuebfC54O7 = undefined;
		const _returnValuerQzvHy8 = () => { return _returnValuebfC54O7 };
		const _deleteEdgeqkpM3oz = () => { return _returnValuerQzvHy8 };
		const _grapht6xpYvD = {
			"getAllEdges": _getAllEdgesY1rIobj,
		"getAllVertices": _getAllVerticesxUEAwjd,
		"deleteEdge": _deleteEdgeqkpM3oz
	}
		const _returnValuellyq5fK = await eulerianPath(_grapht6xpYvD)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedJU4xk7 = false;
		const _graphy8yS6v0 = new Graph(_isDirectedJU4xk7)
		const _vertexKeymBenKS = undefined;
		const _returnValueEBzm7ls = await _graphy8yS6v0.getVertexByKey(_vertexKeymBenKS)
		const _returnValueqbtoqoz = await _graphy8yS6v0.toString()
		const _returnValueSkAjpYS = await _graphy8yS6v0.getAllVertices()
		const _returnValue2JVFb1 = await eulerianPath(_graphy8yS6v0)
	});
})