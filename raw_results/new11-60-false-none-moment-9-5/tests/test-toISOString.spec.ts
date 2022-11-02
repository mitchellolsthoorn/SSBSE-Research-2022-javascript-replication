export {}
import {toISOString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toISOString', () => {
	it('test for toISOString', async () => {
		const _keepOffsetKFuwt0 = "jV0872y6AqEsFmrzwUuUrsQvX1dSm9Ilm1WRcZA88qrUmI4xlhl1887yHYlREmhFcTDUzOqz4KL9wvfM6FCN5EM8LkRPTV9uX1S";
		const _returnValueC6CXpu4 = await toISOString(_keepOffsetKFuwt0)
	});
})