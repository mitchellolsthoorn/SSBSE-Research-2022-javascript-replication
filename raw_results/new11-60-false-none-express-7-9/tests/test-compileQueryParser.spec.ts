export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valHCgfDY = "7pi4TjMElHM3E9ODSNF4KANzo3wIAvw4puDAnKsWgop8m1RxiR";
		const _returnValuej8tsgu = await compileQueryParser(_valHCgfDY)
	});

	it('test for compileQueryParser', async () => {
		const _arrayValueOYVJDq8 = false;
		const _arrayValueMsiu1D6 = undefined;
		const _arrayValues3H24ug = 7.403033751674563;
		const _returnValueUbr18vr = [_arrayValueOYVJDq8, _arrayValueMsiu1D6, _arrayValues3H24ug]
		const _valT82x9YC = () => { return _returnValueUbr18vr };
		const _returnValueZQ5hQ5n = await compileQueryParser(_valT82x9YC)
	});
})