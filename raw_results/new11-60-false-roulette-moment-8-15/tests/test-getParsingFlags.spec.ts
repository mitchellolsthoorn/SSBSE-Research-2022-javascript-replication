export {}
import getParsingFlags from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/parsing-flags.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getParsingFlags', () => {
	it('test for getParsingFlags', async () => {
		const _mfEIgd4w = "wQFgtdAFIsoxQwrwz6EH0kwnJcGs260Vpxz18Hw1oJEM7T99hkNAFRwvdnGsJFD42u50tAHH3mfgN";
		const _returnValueo0HlZDS = await getParsingFlags(_mfEIgd4w)
	});
})