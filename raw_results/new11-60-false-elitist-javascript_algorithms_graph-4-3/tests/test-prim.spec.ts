export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedXZwRZz8 = null;
		const _returnValuevm4D9Bx = null;
		const _getAllVerticeseuRSuCD = () => { return _returnValuevm4D9Bx };
		const _graphEuoFBUO = {
			"isDirected": _isDirectedXZwRZz8,
		"getAllVertices": _getAllVerticeseuRSuCD
	}
		const _returnValueG6mQeSJ = await prim(_graphEuoFBUO)
	});

	it('test for prim', async () => {
		const _arrayValuezLG56H = undefined;
		const _arrayValue5D2B9h = undefined;
		const _returnValuefP8YGT = 5.641801091618861;
		const _arrayValuekFw4NsT = () => { return _returnValuefP8YGT };
		const _arrayValueza2ixHh = [_arrayValue5D2B9h, _arrayValuekFw4NsT]
		const _arrayValueDjaY7hK = null;
		const _returnValueAHdXjf6 = false;
		const _arrayValueh9iOXNw = () => { return _returnValueAHdXjf6 };
		const _arrayValueGys72TM = [_arrayValueza2ixHh, _arrayValueDjaY7hK, _arrayValueh9iOXNw]
		const _arrayValuexwCZh0u = -5.1371419223395245;
		const _isDirectedHDZvUdT = [_arrayValuezLG56H, _arrayValueGys72TM, _arrayValuexwCZh0u]
		const _returnValuePkPUVJQ = "9VIe1rwWezXsyKJ8glnobzebTIOhv5TlYQt27pxiYyL";
		const _getAllVerticesKDDOU4K = () => { return _returnValuePkPUVJQ };
		const _grapha4ubxBY = {
			"isDirected": _isDirectedHDZvUdT,
		"getAllVertices": _getAllVerticesKDDOU4K
	}
		const _returnValueWQpWbHh = await prim(_grapha4ubxBY)
	});
})