export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _returnValueT7JS6ZK = true;
		const _configxJUWgQD = () => { return _returnValueT7JS6ZK };
		const _returnValuep92OAon = await configFromObject(_configxJUWgQD)
	});
})