export {}
import {prepareConfig} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-anything.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prepareConfig', () => {
	it('test for prepareConfig', async () => {
		const _configzm7tOfj = "js2qPYaDQmqQyjKA4aKzl5OTG6t5PmEBaiuybllTyHSMcOCxeSYo";
		const _returnValuehILRLLR = await prepareConfig(_configzm7tOfj)
	});

	it('test for prepareConfig', async () => {
		const _returnValueogmW2z7 = false;
		const _configMxw58R = () => { return _returnValueogmW2z7 };
		const _returnValuewejZa0f = await prepareConfig(_configMxw58R)
	});
})