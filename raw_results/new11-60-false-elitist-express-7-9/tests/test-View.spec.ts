export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nametNF4lrL = 4.373108162218035;
		const _optionsRyZobL = null;
		const _ViewlFv6d0U = new View(_nametNF4lrL, _optionsRyZobL)
		const _dirfTBauH8 = -5.610243507132317;
		const _filededJ0S = true;
		const _returnValueAFhtm1v = await _ViewlFv6d0U.resolve(_dirfTBauH8, _filededJ0S)
		const _optionswl3nQeN = false;
		const _callbacksgsRjuD = {
		
	}
		const _returnValueHgABVC9 = await _ViewlFv6d0U.render(_optionswl3nQeN, _callbacksgsRjuD)
		const _namesuwuA3r = "aNMlmhVcnfjnkvEa4CLO9nDH6NsqCauTapnmB4GQtq6v65EB2POZA";
		const _returnValuexY3kDrJ = await _ViewlFv6d0U.lookup(_namesuwuA3r)
	});

	it('test for View', async () => {
		const _namebJmpbHy = "hcnFGigkh8hkMMTPyNxbdymug6J6A8CVYMHcsdzM";
		const _returnValueswIMPhr = null;
		const _optionsazIIG7B = () => { return _returnValueswIMPhr };
		const _ViewXa9Kp4 = new View(_namebJmpbHy, _optionsazIIG7B)
		const _arrayValueMl3kmIL = undefined;
		const _arrayValueJtLbclh = "EmuYms6OdWDx4DahL9KeOGY9UAqPDeR1urAYZSfYTDlojC0KS4YYGWQ7Xj5JF0v9sKqfylh6qvDVdy8jxK8VrLWubWrrDiQXUM";
		const _dirSFr1uSN = [_arrayValueMl3kmIL, _arrayValueJtLbclh]
		const _fileLKUyrHw = "TujnIMMKDtPvfJ5KTuDVgqzWa";
		const _returnValueYCyPLY = await _ViewXa9Kp4.resolve(_dirSFr1uSN, _fileLKUyrHw)
		const _nameeicn96W = false;
		const _returnValueqnhH1xj = await _ViewXa9Kp4.lookup(_nameeicn96W)
		const _optionsGsnzcvO = false;
		const _returnValueTiISw6 = {
		
	}
		const _callbackWsRrzpO = () => { return _returnValueTiISw6 };
		const _returnValueMuAdacm = await _ViewXa9Kp4.render(_optionsGsnzcvO, _callbackWsRrzpO)
	});
})