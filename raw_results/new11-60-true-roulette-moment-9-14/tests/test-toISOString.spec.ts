export {}
import {toISOString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toISOString', () => {
	it('test for toISOString', async () => {
		const _keepOffsetG9nbfHt = -6.702332646001512;
		const _returnValueR4nOJuY = await toISOString(_keepOffsetG9nbfHt)
	});
})