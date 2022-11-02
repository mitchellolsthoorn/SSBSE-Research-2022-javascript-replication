export {}
import {stringSet} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stringSet', () => {
	it('test for stringSet', async () => {
		const _arrayValueL0z0KO = null;
		const _unitsXiepwxw = [_arrayValueL0z0KO]
		const _valuepdhOUz = undefined;
		const _returnValueZYb45U6 = await stringSet(_unitsXiepwxw, _valuepdhOUz)
	});

	it('test for stringSet', async () => {
		const _returnValueAaGyzlB = null;
		const _unitsKlUfQpE = () => { return _returnValueAaGyzlB };
		const _valueo2m4ZSt = true;
		const _returnValueNaQHIB = await stringSet(_unitsKlUfQpE, _valueo2m4ZSt)
	});
})