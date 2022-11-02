export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valwwNndjo = 7.183636243426889;
		const _returnValuenJpa5Jf = await compileQueryParser(_valwwNndjo)
	});

	it('test for compileQueryParser', async () => {
		const _returnValuew8UjJV4 = true;
		const _valQpL8jUL = () => { return _returnValuew8UjJV4 };
		const _returnValueSqvhIT = await compileQueryParser(_valQpL8jUL)
	});
})