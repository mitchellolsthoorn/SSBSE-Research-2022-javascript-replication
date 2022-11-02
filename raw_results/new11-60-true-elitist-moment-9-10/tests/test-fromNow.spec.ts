export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _returnValue68zLeL = "jlWkiWvumxFc2TRdtoJtfZTt7SdGmA6qguhw85jzIAgsMnVgGY2pAoA9JIg6VhOZuJbfi3GG4rlRtWV";
		const _withoutSuffixOz6ddM2 = () => { return _returnValue68zLeL };
		const _returnValuex3kze1R = await fromNow(_withoutSuffixOz6ddM2)
	});
})