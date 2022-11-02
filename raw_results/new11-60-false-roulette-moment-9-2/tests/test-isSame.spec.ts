export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputbhnzkw = "jxL9K8SBnZOdlLJNlZI76Ryyc5OkA6TCq74RtOrAiHXWUbz0AByfOh85FVZD7NQSJCl";
		const _unitsbFcJlMl = {
		
	}
		const _returnValueyQ75MyV = await isSame(_inputbhnzkw, _unitsbFcJlMl)
	});

	it('test for isSame', async () => {
		const _inputQmUgpzE = false;
		const _unitsdWocpfy = {
		
	}
		const _returnValueN2wUMCF = await isSame(_inputQmUgpzE, _unitsdWocpfy)
	});
})