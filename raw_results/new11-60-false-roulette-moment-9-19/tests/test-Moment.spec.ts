export {}
import {Moment} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/constructor.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Moment', () => {
	it('test for Moment', async () => {
		const _arrayValueXUzBoT = "462zQNjPHEMCC2joNjw7S4wMR8";
		const _arrayValueTqpV1nk = null;
		const _arrayValueGPuwC8V = [_arrayValueXUzBoT, _arrayValueTqpV1nk]
		const _arrayValuemBeRyFz = -5.891352858136908;
		const _configLoXXTPD = [_arrayValueGPuwC8V, _arrayValuemBeRyFz]
		const _returnValueblBnzpZ = await Moment(_configLoXXTPD)
	});
})