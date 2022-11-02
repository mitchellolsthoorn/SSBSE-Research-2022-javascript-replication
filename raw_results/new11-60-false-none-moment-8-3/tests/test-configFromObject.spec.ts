export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _configKprmSOi = "QxeCtHEU7OXWalKVDevNKUyJbgPiqmaFV4a53IMFSay6D9";
		const _returnValuePOXLKVP = await configFromObject(_configKprmSOi)
	});
})