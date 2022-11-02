export {}
import {configFromRFC2822} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromRFC2822', () => {
	it('test for configFromRFC2822', async () => {
		const _inputvtBiQUW = undefined;
		const _formatFVtrjzG = {
		
	}
		const _locale8i6lpN = null;
		const _returnValuevMhGHQs = null;
		const _returnValueQLHwRmA = () => { return _returnValuevMhGHQs };
		const _isUTCri2K6sN = () => { return _returnValueQLHwRmA };
		const _strictoozLzK = {
		
	}
		const __iBsv1S7R = null;
		const __f5YdW7U = undefined;
		const __localebLPUqRT = undefined;
		const _returnValueJbKfhKa = "nTiwapo8kIgMUn0YvAyKuNK6VjzA83kdH9w4Nus69kfWRCxWrGfaq3jNtGsWCd";
		const __isUTCmkw10xC = () => { return _returnValueJbKfhKa };
		const _arrayValuesGcbzGa = {
		
	}
		const _arrayValueTgyATYs = "ffNOKY";
		const _arrayValueiIFOMQM = [_arrayValueTgyATYs]
		const __strictzZEMo6Q = [_arrayValuesGcbzGa, _arrayValueiIFOMQM]
		const _configz7DMseK = {
			"input": _inputvtBiQUW,
		"format": _formatFVtrjzG,
		"locale": _locale8i6lpN,
		"isUTC": _isUTCri2K6sN,
		"strict": _strictoozLzK,
		"_i": __iBsv1S7R,
		"_f": __f5YdW7U,
		"_locale": __localebLPUqRT,
		"_isUTC": __isUTCmkw10xC,
		"_strict": __strictzZEMo6Q
	}
		const _returnValueeHHPwmN = await configFromRFC2822(_configz7DMseK)
	});

	it('test for configFromRFC2822', async () => {
		const __iPdyKnfg = "A4xeIajNOUe7NQyzTGjNLBFqoXCNlvDnSiQw7ecFf22OOsR";
		const _returnValueVcRpTAF = {
		
	}
		const _isValidKot3fsW = () => { return _returnValueVcRpTAF };
		const _returnValueTgmeFqE = null;
		const _isLocalrEjCR2 = () => { return _returnValueTgmeFqE };
		const _returnValueiJW3Iim = {
		
	}
		const _utcOffsetYeFuCq = () => { return _returnValueiJW3Iim };
		const _arrayValueUlKF0WD = -2.7960447047602006;
		const _arrayValueThF0oJx = false;
		const _arrayValueEqJ2Y3R = [_arrayValueUlKF0WD, _arrayValueThF0oJx]
		const _arrayValueXNQKeM7 = []
		const _arrayValueGZv0cTP = false;
		const _arrayValueZdcGH3H = [_arrayValueEqJ2Y3R, _arrayValueXNQKeM7, _arrayValueGZv0cTP]
		const _arrayValueXAZl2c = null;
		const _arrayValuenXj1gpU = "AHcqFOBXiijasEfNXY4FYGPLAVDfrg982YlFRYi2Gw4c7PoW5NlVCTwmut2LKm2WFuHFrBtcX7a";
		const _returnValuewOT00bL = [_arrayValueZdcGH3H, _arrayValueXAZl2c, _arrayValuenXj1gpU]
		const _yearvl35Efd = () => { return _returnValuewOT00bL };
		const _returnValuejzfEW9m = undefined;
		const _formatlkcClg4 = () => { return _returnValuejzfEW9m };
		const _configWl3jMkE = {
			"_i": __iPdyKnfg,
		"isValid": _isValidKot3fsW,
		"isLocal": _isLocalrEjCR2,
		"utcOffset": _utcOffsetYeFuCq,
		"year": _yearvl35Efd,
		"format": _formatlkcClg4
	}
		const _returnValueCVVs2h4 = await configFromRFC2822(_configWl3jMkE)
	});
})