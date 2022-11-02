export {}
import {set} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('set', () => {
	it('test for set', async () => {
		const _mom1fBbhc = 9.735320199790092;
		const _arrayValuefRXvoeG = "h28pdEB7anAqDdPlO1pDxpplaN3wS2JCeWZeaR4gc2zbAyxE1cjQqqrts9jqoXNWXbvPxPAyr";
		const _unitEkSgpl6 = [_arrayValuefRXvoeG]
		const _returnValueFFnIqNO = undefined;
		const _valueSK7MCDh = () => { return _returnValueFFnIqNO };
		const _returnValuelQVTct = await set(_mom1fBbhc, _unitEkSgpl6, _valueSK7MCDh)
	});
})