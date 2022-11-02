export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValueJxwn2y0 = 0.5433545849133239;
		const _arrayValueV3I1H9z = "xH8LDGaDYGG9uCgK0zEsA8qnrMfs";
		const _flagsEmcl1iS = [_arrayValueJxwn2y0, _arrayValueV3I1H9z]
		const _returnValuefQ0MARi = await splitOptionFlags(_flagsEmcl1iS)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsJNBJpnY = "LFofW4oex3ovGr7veyfPazTGqum1";
		const _returnValueOqo6hvy = await splitOptionFlags(_flagsJNBJpnY)
	});
})