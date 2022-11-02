export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValuePJMAv0X = null;
		const _splity06i5HQ = () => { return _returnValuePJMAv0X };
		const _flagsLq0PSkh = {
			"split": _splity06i5HQ
	}
		const _returnValueLEqHFc = await splitOptionFlags(_flagsLq0PSkh)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueYde7i03 = {
		
	}
		const _splitYDkoOH8 = () => { return _returnValueYde7i03 };
		const _flagscx0XEgG = {
			"split": _splitYDkoOH8
	}
		const _returnValuesG2E4Th = await splitOptionFlags(_flagscx0XEgG)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueGBavL6t = []
		const _arrayValuezW0nSv5 = "wDaF";
		const _arrayValuecHFj1Lr = "7Z3rvd6RVb1Vfc3NDflAY94U4CmSQm5iOAM9jQVcP9nWv2PR5BVbQP4VF4t9NJHG41LvhioCD56lJCmGXV9I4JfKshFn41f3E5";
		const _arrayValuepiLluiv = [_arrayValuezW0nSv5, _arrayValuecHFj1Lr]
		const _returnValueT1r6Roz = -7.0991743675124495;
		const _returnValueMeAv8SL = () => { return _returnValueT1r6Roz };
		const _arrayValuevb5CMUD = () => { return _returnValueMeAv8SL };
		const _returnValuev9yOtsx = [_arrayValueGBavL6t, _arrayValuepiLluiv, _arrayValuevb5CMUD]
		const _splitDS7gvzi = () => { return _returnValuev9yOtsx };
		const _flagsH8VyZA6 = {
			"split": _splitDS7gvzi
	}
		const _returnValueYvJISlP = await splitOptionFlags(_flagsH8VyZA6)
	});
})