export {}
import {createLocalOrUTC} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-anything.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('createLocalOrUTC', () => {
	it('test for createLocalOrUTC', async () => {
		const _lengthn62k9r5 = -4.339897240175795;
		const _inputn5INW8c = {
			"length": _lengthn62k9r5
	}
		const _formatY3wP6Gs = true;
		const _localeN2SM6R = true;
		const _strictEZZNMVE = false;
		const _isUTCztIiyfG = "55U";
		const _returnValuedOTxumt = await createLocalOrUTC(_inputn5INW8c, _formatY3wP6Gs, _localeN2SM6R, _strictEZZNMVE, _isUTCztIiyfG)
	});

	it('test for createLocalOrUTC', async () => {
		const _inputspIkG4y = undefined;
		const _formatSRQkz2 = true;
		const _localeDcuZHkb = true;
		const _strictuyv8cr = false;
		const _isUTCXkONKB = undefined;
		const _returnValueljzFFJk = await createLocalOrUTC(_inputspIkG4y, _formatSRQkz2, _localeDcuZHkb, _strictuyv8cr, _isUTCXkONKB)
	});

	it('test for createLocalOrUTC', async () => {
		const _inputqdMWQkb = "Kuu8OFJB2DVsE9o22h4RgS1udEgr3eeyn8uJObUDdjEgKvmbTaQFWTTBis7fFVvPN0LCKsCpC";
		const _formatZDAOFHO = false;
		const _localeckhdedP = false;
		const _arrayValueEueR2H = true;
		const _arrayValueJJjjTKC = false;
		const _arrayValueLn8CXCh = null;
		const _strictdmYP0Eq = [_arrayValueEueR2H, _arrayValueJJjjTKC, _arrayValueLn8CXCh]
		const _isUTCJ3DLfBX = null;
		const _returnValuegizUzb3 = await createLocalOrUTC(_inputqdMWQkb, _formatZDAOFHO, _localeckhdedP, _strictdmYP0Eq, _isUTCJ3DLfBX)
	});

	it('test for createLocalOrUTC', async () => {
		const _inputiyPZzeX = null;
		const _formatLGqagbT = true;
		const _localeDKxbp5q = false;
		const _strictshrZr1 = true;
		const _returnValuelcjwTBo = undefined;
		const _isUTCTt0X5i4 = () => { return _returnValuelcjwTBo };
		const _returnValueAZvIASi = await createLocalOrUTC(_inputiyPZzeX, _formatLGqagbT, _localeDKxbp5q, _strictshrZr1, _isUTCTt0X5i4)
	});

	it('test for createLocalOrUTC', async () => {
		const _arrayValueDgzUc8B = -9.090916871763461;
		const _inputkPdeWDb = [_arrayValueDgzUc8B]
		const _formatHf45hOQ = true;
		const _localez8gaGL1 = true;
		const _strictBJeQvY4 = false;
		const _arrayValueJHecKG = null;
		const _arrayValueKyznmsG = undefined;
		const _isUTCGmCkIlE = [_arrayValueJHecKG, _arrayValueKyznmsG]
		const _returnValuezXCZj7 = await createLocalOrUTC(_inputkPdeWDb, _formatHf45hOQ, _localez8gaGL1, _strictBJeQvY4, _isUTCGmCkIlE)
	});
})