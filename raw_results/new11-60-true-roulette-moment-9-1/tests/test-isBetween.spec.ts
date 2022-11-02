export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _arrayValueVfwMBib = "zxHeXHK41UCBq7mWjePKoqV59cC7tFXBqS2MBxtoKEAQ4L1L7BktAjtDdamJeFxgG7qCsG81Av2PdWpZzYFbyz";
		const _arrayValuehybNR2a = true;
		const _fromd4EhFGn = [_arrayValueVfwMBib, _arrayValuehybNR2a]
		const _tooLxwXQ1 = false;
		const _arrayValuejhG8EV = null;
		const _arrayValueQ7isuy2 = undefined;
		const _arrayValue559vB0 = {
		
	}
		const _unitsA7o5PWD = [_arrayValuejhG8EV, _arrayValueQ7isuy2, _arrayValue559vB0]
		const _arrayValueWujjXQk = false;
		const _returnValue6iEcTF = -7.490861026544351;
		const _arrayValuePKpAhuB = () => { return _returnValue6iEcTF };
		const _arrayValueJaqQ5t = "pWLqmaxkUX49kRCdGkOIH4ojfi2XWAhlodk1FfPpKU9hfejqiZpAvI98hy9qIIGeEpQUQYa8TlqSRy9DhezJOy8Er3i0u9qXT";
		const _arrayValueg0MHyX8 = undefined;
		const _arrayValuetLEFI9 = "mFDR6LWclX7i5SFySLrZSSjWkXmAxQzThg7kyEP8a4hNA8q2EHvEZNzVNojSCocg5huP8r8vaPIq8XOvercGLa2gYQYE0qa";
		const _arrayValueO2s1sR7 = [_arrayValueJaqQ5t, _arrayValueg0MHyX8, _arrayValuetLEFI9]
		const _inclusivityFYtRDds = [_arrayValueWujjXQk, _arrayValuePKpAhuB, _arrayValueO2s1sR7]
		const _returnValuevRXOIZO = await isBetween(_fromd4EhFGn, _tooLxwXQ1, _unitsA7o5PWD, _inclusivityFYtRDds)
	});
})