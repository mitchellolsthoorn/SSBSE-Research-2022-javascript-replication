export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _configRnDHXQy = "DCtkbf5kAkxYG1mYvXcOkUbEh9JEei3RmgEzv7MqqtisSuhjylmSQ7Ay5osd5AvmGInGxFgE";
		const _returnValueHxXtpkT = await configFromObject(_configRnDHXQy)
	});
})