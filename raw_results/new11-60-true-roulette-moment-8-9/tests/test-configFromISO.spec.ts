export {}
import {configFromISO} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromISO', () => {
	it('test for configFromISO', async () => {
		const _configz4PRk5W = "o8kISx9cVXh31KpdxYJxohjsjvb9F8W64k3tlXkNtbj51QJCwRHxRNuzPTIQ6Tifm518hCCgGe";
		const _returnValuecxQiIT = await configFromISO(_configz4PRk5W)
	});
})