export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthi4Bp0JN = 9.484465280003185;
		const _typesUMcDLc = {
			"length": _lengthi4Bp0JN
	}
		const _returnValuefZuHUTL = await normalizeTypes(_typesUMcDLc)
	});

	it('test for normalizeTypes', async () => {
		const _lengthOJYQJtq = -2.606395960138835;
		const _typeswytOO6p = {
			"length": _lengthOJYQJtq
	}
		const _returnValueJsZTym = await normalizeTypes(_typeswytOO6p)
	});

	it('test for normalizeTypes', async () => {
		const _typesCPpYa1s = "BFSgWPqInjkfiFmqKi0FHoxn5VCNyYVhr8Mpwe97svGjboSFulf5EoOwIL3d6EvzP5Mskj1p1Xd1dJjVC9zIbsHA";
		const _returnValuePDqfKXr = await normalizeTypes(_typesCPpYa1s)
	});
})