export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _arrayValuefD9FT6 = -3.4892189176964763;
		const _inputk02cjAp = [_arrayValuefD9FT6]
		const _arrayValueOXSNFqm = undefined;
		const _arrayValuejGEfIhc = "9YRmUCCRYutPVFZEqbHANEK8AoQWcz7Vb0XjtRQEtE3HaOKARF5FCgGxuv";
		const _unitsTPeulN8 = [_arrayValueOXSNFqm, _arrayValuejGEfIhc]
		const _returnValueulLcmm = await isSameOrAfter(_inputk02cjAp, _unitsTPeulN8)
	});
})