export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedSJpJsCG = "CoujAHTi3YYSzhDWy7eBgd1z1fZrwnDQuKtVny9TjEzfNbPlvJDvPm7aArj2Okr3fUqKYSiFqrfseAe9XCFs0sPUrVs6";
		const _returnValueBWO3AkT = "svzWpnBqVPpA6ebj";
		const _getAllEdges7kKI0F = () => { return _returnValueBWO3AkT };
		const _returnValuekUAz2Ey = true;
		const _getAllVerticesMxQhDvu = () => { return _returnValuekUAz2Ey };
		const _graphcP3YaNV = {
			"isDirected": _isDirectedSJpJsCG,
		"getAllEdges": _getAllEdges7kKI0F,
		"getAllVertices": _getAllVerticesMxQhDvu
	}
		const _returnValueT6cy3Ss = await kruskal(_graphcP3YaNV)
	});

	it('test for kruskal', async () => {
		const _isDirectediEQvRZ6 = undefined;
		const _returnValuenLdrHCH = "aDUbfy2wI";
		const _getAllEdgesYMkNQlM = () => { return _returnValuenLdrHCH };
		const _returnValuen6poNKK = -1.4557377717570752;
		const _getAllVerticesUDJmSru = () => { return _returnValuen6poNKK };
		const _graphkoXQ94e = {
			"isDirected": _isDirectediEQvRZ6,
		"getAllEdges": _getAllEdgesYMkNQlM,
		"getAllVertices": _getAllVerticesUDJmSru
	}
		const _returnValueKBAqbow = await kruskal(_graphkoXQ94e)
	});
})