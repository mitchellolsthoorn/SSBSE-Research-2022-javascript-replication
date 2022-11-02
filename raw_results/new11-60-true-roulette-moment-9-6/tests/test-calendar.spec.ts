export {}
import {calendar} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('calendar', () => {
	it('test for calendar', async () => {
		const _arrayValueTUKSm4X = "6H2no4HAgDPAXdioSIfMNnoiHr9SWRjuM6oTYgmkvtI9FpO6NwV7rlP9k4VcMyW9Ttuf";
		const _arrayValueRhq83NZ = null;
		const _arrayValuepnbJQ1m = [_arrayValueRhq83NZ]
		const _arrayValues33R0n8 = [_arrayValueTUKSm4X, _arrayValuepnbJQ1m]
		const _arrayValueKn6OTYF = "LaWgVSoXsrKfcflzCQT4MPqEzTU673y3oQ2UqAeyRBB1jHqVnlacg3VAvTlA5j1Vz1n";
		const _arrayValuesePRqBW = true;
		const _arrayValueLSwcRI = [_arrayValuesePRqBW]
		const _timeB1bFFvs = [_arrayValues33R0n8, _arrayValueKn6OTYF, _arrayValueLSwcRI]
		const _formatscpmWizI = null;
		const _returnValueBZY5Vvq = await calendar(_timeB1bFFvs, _formatscpmWizI)
	});
})