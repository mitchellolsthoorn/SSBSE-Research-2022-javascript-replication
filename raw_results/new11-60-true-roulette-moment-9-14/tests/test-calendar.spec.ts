export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _timeFdY22Aj = {
		
	}
		const _arrayValueeQwfc0Z = null;
		const _arrayValuetlcF5ek = false;
		const _arrayValuejYWtjiD = -3.130515275886383;
		const _returnValueY58PssQ = [_arrayValueeQwfc0Z, _arrayValuetlcF5ek, _arrayValuejYWtjiD]
		const _formatsHk02GlU = () => { return _returnValueY58PssQ };
		const _returnValuecjYExJG = await calendar(_timeFdY22Aj, _formatsHk02GlU)
	});
})