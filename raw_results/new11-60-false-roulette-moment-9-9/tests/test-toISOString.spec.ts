export {}
import {toISOString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toISOString', () => {
	it('test for toISOString', async () => {
		const _keepOffsetBX1GM2X = false;
		const _returnValued9gPAeC = await toISOString(_keepOffsetBX1GM2X)
	});
})