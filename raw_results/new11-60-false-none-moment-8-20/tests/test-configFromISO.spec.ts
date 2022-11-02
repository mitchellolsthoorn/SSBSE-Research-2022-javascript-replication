export {}
import {configFromISO} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromISO', () => {
	it('test for configFromISO', async () => {
		const _configStHY3Pk = "fyMF3FkzXl9aJ5t2GiDE1yeROGgFvchdKAozaFAC3KRHrAVEvDlqb1CMcUy6XUGtp9rbBDG6FRPOw5mIsRR5DD";
		const _returnValueLDYUJcW = await configFromISO(_configStHY3Pk)
	});
})