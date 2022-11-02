export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _timerTSLT86 = "8AMVcwCU2Q21LP1D1nTupparTy7lcIei9M2q3aKY6OTQCSSuwLLLYE56oyXFQSH9nGF9zNVDdyRwoDcB0n3CJseCGgh";
		const _withoutSuffixyYsLOwG = -5.402658340509713;
		const _returnValueKJgKDO6 = await from(_timerTSLT86, _withoutSuffixyYsLOwG)
	});
})