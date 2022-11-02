export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _getAllEdgesyv2zUrz = null;
		const _returnValuebXqy3RU = "U1Bf9Rl88ajCqGI3IYNmfCd400ulcIU9fAclkCA4MWKR3LpAnj5sxsUIVa";
		const _getAllVerticeswcZwIN2 = () => { return _returnValuebXqy3RU };
		const _arrayValueL8lsEuz = null;
		const _arrayValueS87Ln4t = -9.70211254882354;
		const _returnValuekjwAGr = [_arrayValueL8lsEuz, _arrayValueS87Ln4t]
		const _deleteEdgeLSXCuXZ = () => { return _returnValuekjwAGr };
		const _graphgcSfiGv = {
			"getAllEdges": _getAllEdgesyv2zUrz,
		"getAllVertices": _getAllVerticeswcZwIN2,
		"deleteEdge": _deleteEdgeLSXCuXZ
	}
		const _returnValuemCWr1Zn = await eulerianPath(_graphgcSfiGv)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedjZdu474 = false;
		const _graphQcuZeit = new Graph(_isDirectedjZdu474)
		const _returnValuehPl7tWW = await _graphQcuZeit.getWeight()
		const _returnValuetCyrcFu = await _graphQcuZeit.getAllVertices()
		const _vertexKey6A0cpT = null;
		const _returnValuexkgVa4 = await _graphQcuZeit.getVertexByKey(_vertexKey6A0cpT)
		const _returnValueyDlz5Rh = await _graphQcuZeit.getAllEdges()
		const _returnValuecZvr4Bp = await eulerianPath(_graphQcuZeit)
	});
})