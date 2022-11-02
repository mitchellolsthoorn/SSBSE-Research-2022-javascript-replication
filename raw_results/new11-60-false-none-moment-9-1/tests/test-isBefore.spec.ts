export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputqZy8g8 = "F2DgWcEVmQ6odkxJTd3Hy8WSDOyVWuHSCdrvLIyvOSI7YIHGwPlSyJtNo7yPeENj1281i";
		const _unitsbAwLZHr = "ekEWSi7bX7GPCOz3ivFxVtGMzaFgLq70M4wQqUrr5rSv5x3uHwmctRK5cQSuOGeR2V4V";
		const _returnValuef4E5xgh = await isBefore(_inputqZy8g8, _unitsbAwLZHr)
	});

	it('test for isBefore', async () => {
		const _inputysKbODH = false;
		const _unitsC5RhEVY = undefined;
		const _returnValuec6Brcb5 = await isBefore(_inputysKbODH, _unitsC5RhEVY)
	});
})