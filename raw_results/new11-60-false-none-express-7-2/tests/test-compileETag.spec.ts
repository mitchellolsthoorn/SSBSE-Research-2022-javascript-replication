export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _arrayValueTxAjfx = null;
		const _arrayValueeOOskB3 = null;
		const _returnValuedvHGr1A = false;
		const _arrayValueG5LcBqw = () => { return _returnValuedvHGr1A };
		const _arrayValueZzBjqv = "qwpCAywK2j1aewhdRyygqJCrLQg";
		const _valJ6ceFuz = [_arrayValueTxAjfx, _arrayValueeOOskB3, _arrayValueG5LcBqw, _arrayValueZzBjqv]
		const _returnValueaxgk95 = await compileETag(_valJ6ceFuz)
	});

	it('test for compileETag', async () => {
		const _returnValueSbqv2XV = "XUcU73HL9WtuMSs7t1oYFX";
		const _valol1lEDg = () => { return _returnValueSbqv2XV };
		const _returnValueZ8lUjoV = await compileETag(_valol1lEDg)
	});
})