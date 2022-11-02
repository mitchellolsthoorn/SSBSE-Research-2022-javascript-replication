export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputSUVI7qB = 4.618084311345708;
		const _arrayValueXr9rRCu = "pJyjklSY8an29YxpafierMc8ObbAm4BDIMg9xpStkLddwalYVYMHdh11";
		const _arrayValueZS0lyw = "ve23gon1ogCcc";
		const _arrayValueJdnZ3Mi = "L7tNKpqvekMNW6WJ";
		const _arrayValueh89BMQU = [_arrayValueXr9rRCu, _arrayValueZS0lyw, _arrayValueJdnZ3Mi]
		const _arrayValuesy4YsZ = "5dY1arQXcplvScJvk5Hz1r594V7haElLw1ft87Cv1skcyPYyy5vNy52GHHywYt9fP36pfAsCkbrNWrQwLVAqh1uCtWHV7f";
		const _returnValuepeIKdZj = [_arrayValuesy4YsZ]
		const _arrayValueGZR1434 = () => { return _returnValuepeIKdZj };
		const _arrayValuecyJjW7o = "Loifh0BquhLKPKYO1yH659NGz9y2FoTJ3ofaqCdznJTjdemWQ";
		const _unitsBcdSMH3 = [_arrayValueh89BMQU, _arrayValueGZR1434, _arrayValuecyJjW7o]
		const _returnValueFF1pOKH = await isSameOrBefore(_inputSUVI7qB, _unitsBcdSMH3)
	});
})