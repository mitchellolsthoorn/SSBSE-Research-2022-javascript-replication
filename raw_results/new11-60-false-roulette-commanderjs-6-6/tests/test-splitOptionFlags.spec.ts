export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _flagsJ5O5TbE = "kxaHhUCc4wT3NLXEQsSvoYFsvF7bTqKi8tT04osvQ66lhh3x2l3zGnwIbaEb86xORYE";
		const _returnValueGhxINbe = await splitOptionFlags(_flagsJ5O5TbE)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueLjVxQVj = "snFZCQ3xaslcJ";
		const _splitfDKM7v = () => { return _returnValueLjVxQVj };
		const _flagsxpugz3e = {
			"split": _splitfDKM7v
	}
		const _returnValueLOuJXOf = await splitOptionFlags(_flagsxpugz3e)
	});
})