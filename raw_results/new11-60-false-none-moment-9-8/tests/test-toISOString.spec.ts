export {}
import {toISOString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toISOString', () => {
	it('test for toISOString', async () => {
		const _keepOffsets120xzf = "XzTR3yjibBgK3Dw5MJzPQHZHcjXb0gAQBiM5EpCy69sLllTg5IVdMPLCf2M51cSqe3ObZ62dhCTFiBcrc8";
		const _returnValueczhbedf = await toISOString(_keepOffsets120xzf)
	});
})