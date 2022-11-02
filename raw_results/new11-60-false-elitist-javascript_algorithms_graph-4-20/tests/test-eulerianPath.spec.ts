export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueJj6xfID = "5DWxvRkh";
		const _getAllEdgesTdgELTC = () => { return _returnValueJj6xfID };
		const _getAllVerticesCByOXSP = true;
		const _arrayValueD0X7wM = true;
		const _arrayValueWi4evz = -7.247645766423288;
		const _arrayValuecbqgJUv = true;
		const _arrayValueBYAME4H = null;
		const _arrayValueKZF0Epo = [_arrayValuecbqgJUv, _arrayValueBYAME4H]
		const _arrayValueQ1MbND0 = [_arrayValueWi4evz, _arrayValueKZF0Epo]
		const _deleteEdgebftCoMV = [_arrayValueD0X7wM, _arrayValueQ1MbND0]
		const _graphcFLAz0F = {
			"getAllEdges": _getAllEdgesTdgELTC,
		"getAllVertices": _getAllVerticesCByOXSP,
		"deleteEdge": _deleteEdgebftCoMV
	}
		const _returnValueIMYLKdV = await eulerianPath(_graphcFLAz0F)
	});

	it('test for eulerianPath', async () => {
		const _returnValuelv0cR6J = []
		const _getAllEdgesJorlhE = () => { return _returnValuelv0cR6J };
		const _arrayValueSErPTCI = null;
		const _arrayValuelTNke74 = true;
		const _arrayValueuPK5c6Q = [_arrayValueSErPTCI, _arrayValuelTNke74]
		const _returnValuev7TzOZ3 = [_arrayValueuPK5c6Q]
		const _getAllVerticesV25uTpx = () => { return _returnValuev7TzOZ3 };
		const _deleteEdgeHOkrucH = false;
		const _graphiSrzh1I = {
			"getAllEdges": _getAllEdgesJorlhE,
		"getAllVertices": _getAllVerticesV25uTpx,
		"deleteEdge": _deleteEdgeHOkrucH
	}
		const _returnValueC1hddgb = await eulerianPath(_graphiSrzh1I)
	});

	it('test for eulerianPath', async () => {
		const _returnValueUcgf42L = []
		const _getAllEdgesGv3Y3h = () => { return _returnValueUcgf42L };
		const _returnValueLdXC86E = []
		const _getAllVerticestRhlAsT = () => { return _returnValueLdXC86E };
		const _returnValueIbL5Ror = undefined;
		const _deleteEdgeiLRNpKP = () => { return _returnValueIbL5Ror };
		const _grapht6JWTY1 = {
			"getAllEdges": _getAllEdgesGv3Y3h,
		"getAllVertices": _getAllVerticestRhlAsT,
		"deleteEdge": _deleteEdgeiLRNpKP
	}
		const _returnValueErpUMI1 = await eulerianPath(_grapht6JWTY1)
	});
})