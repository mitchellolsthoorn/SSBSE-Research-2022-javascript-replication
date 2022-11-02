export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _returnValuewZW7ILu = true;
		const _valRYYqyB = () => { return _returnValuewZW7ILu };
		const _returnValueSKEoq8a = await compileQueryParser(_valRYYqyB)
	});

	it('test for compileQueryParser', async () => {
		const _val5wc7oT = "yGxTC6VN33BYcrJk";
		const _returnValuePW3JBx8 = await compileQueryParser(_val5wc7oT)
	});
})