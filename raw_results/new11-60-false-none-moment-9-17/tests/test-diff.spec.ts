export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputDpN96Zz = "6OadC0GJwTl28tRak2gLRNJdstgz1dEQwDqp6xh3Wb4xcxwR7aDCQO4KkD5iG";
		const _unitsYiUYP5q = null;
		const _asFloataeCGMIx = "UOWlb8nm47Rkq5E9yVPYhy4byhGCwV1CF4dnCSWFXSgCpI5Yrl6bqsKVmGDxizz";
		const _returnValue9bhtQX = await diff(_inputDpN96Zz, _unitsYiUYP5q, _asFloataeCGMIx)
	});
})