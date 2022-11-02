export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _returnValuepNMmh1g = "N4HlnATwpn1IEly54MGnDF4edmbYQi6cjeEej7I3L7o2cJmzCTazepE4mByoVEn";
		const _graphS9wowey = () => { return _returnValuepNMmh1g };
		const _returnValue1Bq4Bb = await prim(_graphS9wowey)
	});
})