export {}
import {getCalendarFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCalendarFormat', () => {
	it('test for getCalendarFormat', async () => {
		const _arrayValueEcipYv6 = true;
		const _arrayValueM2tkfCi = true;
		const _arrayValuejReJEQ9 = [_arrayValueEcipYv6, _arrayValueM2tkfCi]
		const _arrayValuei7YKVP1 = "qBNhEkIq559SphWyRRrUGCwCb8f32kA7L2BonkOqTYQTR6JudmecXjnhYrJt";
		const _arrayValueekVpRM4 = true;
		const _arrayValueqQXgWk4 = false;
		const _myMomentoo8cDcp = [_arrayValuejReJEQ9, _arrayValuei7YKVP1, _arrayValueekVpRM4, _arrayValueqQXgWk4]
		const _nowmZo6LL2 = "NhzX9P";
		const _returnValueCcNpqt8 = await getCalendarFormat(_myMomentoo8cDcp, _nowmZo6LL2)
	});
})