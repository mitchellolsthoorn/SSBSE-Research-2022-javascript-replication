export {}
import {createLocalOrUTC} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-anything.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('createLocalOrUTC', () => {
	it('test for createLocalOrUTC', async () => {
		const _arrayValuektz0Jdl = -7.656492737100513;
		const _returnValueJtqLd10 = [_arrayValuektz0Jdl]
		const _inputApTz7VK = () => { return _returnValueJtqLd10 };
		const _formatrNCs9Cb = undefined;
		const _localeXa1eZFb = false;
		const _strictnpgudhB = true;
		const _isUTCr1heAA1 = false;
		const _returnValueUXmgRVy = await createLocalOrUTC(_inputApTz7VK, _formatrNCs9Cb, _localeXa1eZFb, _strictnpgudhB, _isUTCr1heAA1)
	});

	it('test for createLocalOrUTC', async () => {
		const _inputztdvFuW = "tFI1JHF1Gu5sSpKmBglvvgqUiBQ4aBbCeBDXx4GBRq7QLucrvCwbRPUBDcdjBgLRKZ5eniFh8l1pkhuKskB";
		const _formatziMnuyp = true;
		const _localeundmloh = true;
		const _strictuGB3qt = true;
		const _isUTCj06C5qV = "NDm6KL4gF8uidjL8HNuOI7GUdIogfvwDOxX7jwCXHCOrO0fAn9efrlPMEa7cx9VIYcwesaLBiY";
		const _returnValuexV9GQgl = await createLocalOrUTC(_inputztdvFuW, _formatziMnuyp, _localeundmloh, _strictuGB3qt, _isUTCj06C5qV)
	});

	it('test for createLocalOrUTC', async () => {
		const _arrayValuen6tQ2DJ = 0.9164003830588712;
		const _inputLwk3bLb = [_arrayValuen6tQ2DJ]
		const _formatTdaE1fb = false;
		const _localeGOzuwAG = false;
		const _strictWX6gEM = false;
		const _isUTCHD0cOWP = 8.795722806619917;
		const _returnValuey76OsmH = await createLocalOrUTC(_inputLwk3bLb, _formatTdaE1fb, _localeGOzuwAG, _strictWX6gEM, _isUTCHD0cOWP)
	});

	it('test for createLocalOrUTC', async () => {
		const _inputyf71PBe = undefined;
		const _formatHAu4aw8 = true;
		const _locale48kj5n = true;
		const _strictvqwv9Y = true;
		const _isUTCxqYwPn = null;
		const _returnValueKSvZ6iY = await createLocalOrUTC(_inputyf71PBe, _formatHAu4aw8, _locale48kj5n, _strictvqwv9Y, _isUTCxqYwPn)
	});

	it('test for createLocalOrUTC', async () => {
		const _inputI1jss6J = null;
		const _formatGiu12q7 = false;
		const _localexwnYWeM = true;
		const _strictfynUk0 = true;
		const _returnValuecflWhzg = undefined;
		const _isUTCXrACKC = () => { return _returnValuecflWhzg };
		const _returnValueDenEthI = await createLocalOrUTC(_inputI1jss6J, _formatGiu12q7, _localexwnYWeM, _strictfynUk0, _isUTCXrACKC)
	});
})