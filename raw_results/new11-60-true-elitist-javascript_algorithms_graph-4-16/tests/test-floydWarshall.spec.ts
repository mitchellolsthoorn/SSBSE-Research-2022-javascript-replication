export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueMzvl7rC = -9.722925030216171;
		const _getAllVerticesO47fkH1 = () => { return _returnValueMzvl7rC };
		const _returnValueh9YVRIc = null;
		const _findEdgeJDmXOk = () => { return _returnValueh9YVRIc };
		const _graphxOj7fIb = {
			"getAllVertices": _getAllVerticesO47fkH1,
		"findEdge": _findEdgeJDmXOk
	}
		const _returnValuehP2jUSQ = await floydWarshall(_graphxOj7fIb)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuemmLNa1w = "ntuuidAnqEFBtIP9ju2rAzHLaqaR3kAUno1zKF552ATTKy6fjQ";
		const _returnValuedXXHX0D = [_arrayValuemmLNa1w]
		const _getAllVerticesQmB72y6 = () => { return _returnValuedXXHX0D };
		const _arrayValuegCfSf9z = true;
		const _arrayValueOKsU7JU = "LXgs1L49UWOvHsrpRtuZvEDmPS7r6nJ4PK36S5y7hI3MpT8vLhQOJgwN6LaGS91MxBQ5I3AcQxfMPdTSuA";
		const _arrayValueZLdIyrf = -3.286726530547023;
		const _returnValueFSmUGaF = [_arrayValuegCfSf9z, _arrayValueOKsU7JU, _arrayValueZLdIyrf]
		const _findEdgeOQmgXjJ = () => { return _returnValueFSmUGaF };
		const _graphf21qh7U = {
			"getAllVertices": _getAllVerticesQmB72y6,
		"findEdge": _findEdgeOQmgXjJ
	}
		const _returnValueYeme8If = await floydWarshall(_graphf21qh7U)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueS8mOtI1 = null;
		const _arrayValuedWShavF = "aTTGtzBaL8oN7tbPus39899wP3WgPf3fXr1YCth";
		const _returnValueoBXOvjh = [_arrayValueS8mOtI1, _arrayValuedWShavF]
		const _getAllVerticesOyCKtLj = () => { return _returnValueoBXOvjh };
		const _returnValue1tSGTf = -8.20292960315934;
		const _findEdgegVBEUwe = () => { return _returnValue1tSGTf };
		const _graphE9DpBfd = {
			"getAllVertices": _getAllVerticesOyCKtLj,
		"findEdge": _findEdgegVBEUwe
	}
		const _returnValueOPk2pu = await floydWarshall(_graphE9DpBfd)
	});
})