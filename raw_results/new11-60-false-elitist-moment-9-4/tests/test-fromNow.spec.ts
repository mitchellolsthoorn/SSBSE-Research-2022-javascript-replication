export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _withoutSuffixBs2J2Au = "snWDYejyVenAonchxLYjPtgKeaiOrtMsuFVHGYkFVNpIkFpEQtoMCuTDWbEH6QHvQwXf2hQvPwpc15";
		const _returnValueaIcu9mi = await fromNow(_withoutSuffixBs2J2Au)
	});
})