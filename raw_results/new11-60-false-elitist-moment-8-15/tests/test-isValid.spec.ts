export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _inputBhYxKK3 = "GceoYSPmeJspSAbLvFxu3Tos1Wv69HnakoY7a9X87F9b0FAvwGnsDH2BjmwnrmJJHc3dwjpOnj126sgSkdfUTGXkWocyp24kmEs";
		const _formatG5UtSL = 3.116050349192152;
		const _localekO8rrsT = false;
		const _isUTCnAy9KRQ = null;
		const _strictC1rTsqR = true;
		const __ihmuabOL = -5.448602063276815;
		const __fQMeVsZN = 5.609505250654877;
		const _arrayValuerve82ey = 1.1991209306148871;
		const _arrayValuewdL3Pve = "v91FdAdSdRKqJzMeXekSxdfO8WuzvNJeLejtDnyXsH9PhVDVmDQgD9gYoBNTX1HFEZ9SY6m0cXcSl";
		const _arrayValueZgZ8T8Y = [_arrayValuerve82ey, _arrayValuewdL3Pve]
		const _arrayValueoYK5Csv = null;
		const _arrayValueOLU1Xm = "mfTZjQQ1DCbazmmnfWp0OZ9ufYXAkM0R6N";
		const _arrayValueBGD6w70 = "frlhutbQehOUdJsluc9dbPgPRIMmDxj9kOFrR5mEbrXVdYuKfLISWutFthBpMMEyrSGaEDrpwbjz1u62E";
		const __localeIyeTSAN = [_arrayValueZgZ8T8Y, _arrayValueoYK5Csv, _arrayValueOLU1Xm, _arrayValueBGD6w70]
		const __isUTCDAuZbb3 = null;
		const _arrayValueAPnbbg = null;
		const _arrayValueh9K3arY = false;
		const _arrayValueZSEi2O2 = false;
		const _arrayValuevuhHtYe = false;
		const _arrayValueiMGM4kx = [_arrayValueZSEi2O2, _arrayValuevuhHtYe]
		const _returnValueljCdhCx = null;
		const _arrayValueuCE5Z3g = () => { return _returnValueljCdhCx };
		const __strictmq7CFaD = [_arrayValueAPnbbg, _arrayValueh9K3arY, _arrayValueiMGM4kx, _arrayValueuCE5Z3g]
		const _medGrDvO = {
			"input": _inputBhYxKK3,
		"format": _formatG5UtSL,
		"locale": _localekO8rrsT,
		"isUTC": _isUTCnAy9KRQ,
		"strict": _strictC1rTsqR,
		"_i": __ihmuabOL,
		"_f": __fQMeVsZN,
		"_locale": __localeIyeTSAN,
		"_isUTC": __isUTCDAuZbb3,
		"_strict": __strictmq7CFaD
	}
		const _returnValuej03T80 = await isValid(_medGrDvO)
	});
})