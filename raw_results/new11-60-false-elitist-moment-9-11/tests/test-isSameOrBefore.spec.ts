export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputSLIKZHw = "IjFpsKZb7yyYUBnYLmG5L4kROgalJIBNTnKuANSCM5xqGqqiGG73QKoBctvg9UhXeMS9fy8osNuiEHG";
		const _unitsD0l9mi = "UrI3RcrTmIm2M6n6AT6xj9SVdveWbQfh4iAzq6eimInIcBWDzCXHJN8seqc31PjYgIFJ";
		const _returnValuei4ixptn = await isSameOrBefore(_inputSLIKZHw, _unitsD0l9mi)
	});
})