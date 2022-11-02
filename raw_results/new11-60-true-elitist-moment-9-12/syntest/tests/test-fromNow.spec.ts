export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _withoutSuffixZM78s0u = "S57QuRwSg77ox74G1qBfvMg1lM7Fl1kantreRlunIP9EDhUqki83vEedZA6dnT3FnuexKyRaLQ";
		const _returnValueLgfooX = await fromNow(_withoutSuffixZM78s0u)
	});
})