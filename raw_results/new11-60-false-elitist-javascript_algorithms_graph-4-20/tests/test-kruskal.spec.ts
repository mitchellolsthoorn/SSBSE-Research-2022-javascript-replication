export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedRIvL5D1 = "kUnSN";
		const _returnValueu3Xrv37 = undefined;
		const _returnValueh3XTu0S = () => { return _returnValueu3Xrv37 };
		const _getAllEdgesjUl4VCn = () => { return _returnValueh3XTu0S };
		const _returnValuef27pDOY = true;
		const _getAllVerticesDRaWZ5F = () => { return _returnValuef27pDOY };
		const _graphsWMKCXo = {
			"isDirected": _isDirectedRIvL5D1,
		"getAllEdges": _getAllEdgesjUl4VCn,
		"getAllVertices": _getAllVerticesDRaWZ5F
	}
		const _returnValueRgkwhy = await kruskal(_graphsWMKCXo)
	});

	it('test for kruskal', async () => {
		const _isDirectedrpSpYF = undefined;
		const _arrayValueBfPGVup = {
		
	}
		const _arrayValueuLYsQX5 = "EX73Z";
		const _arrayValueqjIIElM = 8.22776582986842;
		const _returnValueMMugXsK = [_arrayValueBfPGVup, _arrayValueuLYsQX5, _arrayValueqjIIElM]
		const _getAllEdgesdbqpZnd = () => { return _returnValueMMugXsK };
		const _returnValueF7MNDAV = undefined;
		const _getAllVerticesvGMBUke = () => { return _returnValueF7MNDAV };
		const _graphFrMe80N = {
			"isDirected": _isDirectedrpSpYF,
		"getAllEdges": _getAllEdgesdbqpZnd,
		"getAllVertices": _getAllVerticesvGMBUke
	}
		const _returnValueTQ5KabE = await kruskal(_graphFrMe80N)
	});
})