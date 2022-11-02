export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _returnValueIwiUdtz = "W3advWPb3jCRRX";
		const _inputJsdSAzL = () => { return _returnValueIwiUdtz };
		const _formatbQRk8sV = "1bhs1TjgZPOeHsakcaqEBGNfrKhOA29VMTaFkCniSiioN8G9aKvA3Yofit6ACCBTi4k";
		const _localeFHqaXie = "x0qYn743zHpZwFSmVikDejdHLl28JC96U4wC9emLqCW5dzUV3OwBUwKZNreiJ6";
		const _isUTCRurS0fH = "JGbYATC350kW9gAJD17n5aCki5Vjj51W38dSE2";
		const _stricteR8O11M = "EFUh8LMXTHfjlhMRnLr3pDRz9qE8DQRW6GF2qNyRk8YWYxsn8iGl7KdAiUYl4O43nfhsafCrJmBozObjnpKY";
		const __iPyXgpWy = undefined;
		const __fgZiDVwQ = null;
		const _arrayValueRhkXiF4 = 2.5431597309191734;
		const _arrayValueCrwDkOF = undefined;
		const _arrayValued8BXlH4 = false;
		const __localevHORETD = [_arrayValueRhkXiF4, _arrayValueCrwDkOF, _arrayValued8BXlH4]
		const __isUTCpXVe7Oh = 0.28276084624903675;
		const __stricte4ZfZ1S = null;
		const _configVQDZBme = {
			"input": _inputJsdSAzL,
		"format": _formatbQRk8sV,
		"locale": _localeFHqaXie,
		"isUTC": _isUTCRurS0fH,
		"strict": _stricteR8O11M,
		"_i": __iPyXgpWy,
		"_f": __fgZiDVwQ,
		"_locale": __localevHORETD,
		"_isUTC": __isUTCpXVe7Oh,
		"_strict": __stricte4ZfZ1S
	}
		const _returnValueB2rTa6h = await configFromObject(_configVQDZBme)
	});
})