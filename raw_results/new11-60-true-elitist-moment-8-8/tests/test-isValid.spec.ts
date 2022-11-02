export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputZ7yngL = -2.8981721576062567;
		const _returnValueB87KRLX = 7.84134609158281;
		const _formatwMCKSi4 = () => { return _returnValueB87KRLX };
		const _arrayValueTkNpb5Q = null;
		const _arrayValueOba5Ev = "dxb5uZ1g72suNWlI0Sk0unDHxSQwRKtDv3lM2gG2RPAkVh51zFC92puKmpRdwbE3Npi";
		const _localegzXjKEG = [_arrayValueTkNpb5Q, _arrayValueOba5Ev]
		const _arrayValuefJe1QCv = -9.452551218279492;
		const _arrayValueYJw0yx = 2.816400158712076;
		const _returnValueh0XsXKz = "y5GB1TnbsrDQotPCxUyK0uGGMvLHonzX2YnS0rgDHtFbHW80fEKBTO0ft7egoihj8mj7qbIcM6ddbVBzK1J";
		const _arrayValuewqYUrho = () => { return _returnValueh0XsXKz };
		const _arrayValuexuUUhLx = {
		
	}
		const _arrayValueF8l6TV = [_arrayValuefJe1QCv, _arrayValueYJw0yx, _arrayValuewqYUrho, _arrayValuexuUUhLx]
		const _returnValuegYz6tiB = true;
		const _arrayValueeRHnM6R = () => { return _returnValuegYz6tiB };
		const _isUTCmsptDYk = [_arrayValueF8l6TV, _arrayValueeRHnM6R]
		const _strictsIPgGiU = -2.2000729458962756;
		const _arrayValueIY80dDf = undefined;
		const _arrayValuelm80EP5 = true;
		const _arrayValue4drNeI = false;
		const _returnValueZxg0JL1 = false;
		const _arrayValueVqUYMgD = () => { return _returnValueZxg0JL1 };
		const __iig23EpO = [_arrayValueIY80dDf, _arrayValuelm80EP5, _arrayValue4drNeI, _arrayValueVqUYMgD]
		const __fFL24O3j = 5.681311218577946;
		const __localeRucQUam = undefined;
		const _arrayValueWcFoRNv = true;
		const _arrayValuesJbD1r7 = null;
		const __isUTC8M81yc = [_arrayValueWcFoRNv, _arrayValuesJbD1r7]
		const __strictZpS3Luh = false;
		const _mlYdPNvC = {
			"input": _inputZ7yngL,
		"format": _formatwMCKSi4,
		"locale": _localegzXjKEG,
		"isUTC": _isUTCmsptDYk,
		"strict": _strictsIPgGiU,
		"_i": __iig23EpO,
		"_f": __fFL24O3j,
		"_locale": __localeRucQUam,
		"_isUTC": __isUTC8M81yc,
		"_strict": __strictZpS3Luh
	}
		const _returnValueqJgBz8I = await isValid(_mlYdPNvC)
	});
})