export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _arrayValueiW9RRWU = false;
		const _arrayValuehW3Z4Ma = "dJ";
		const _arrayValuexdnLQaJ = [_arrayValuehW3Z4Ma]
		const _arrayValuez4RQG1W = -9.929414071534238;
		const _timelZ2Y4cU = [_arrayValueiW9RRWU, _arrayValuexdnLQaJ, _arrayValuez4RQG1W]
		const _withoutSuffixyfzMlj = false;
		const _returnValuevhZ8rT8 = await from(_timelZ2Y4cU, _withoutSuffixyfzMlj)
	});
})