export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _arrayValueSxtmmFN = 9.50296795757772;
		const _arrayValuel4yMlmb = 7.542984225015282;
		const _arrayValuegXc28Mp = "tx64UF7Lz0d4T573pU4orR6Ooc5nEDCsotupxeBXp";
		const _arrayValueaiXgBrh = false;
		const _inputQPrasor = [_arrayValueSxtmmFN, _arrayValuel4yMlmb, _arrayValuegXc28Mp, _arrayValueaiXgBrh]
		const _unitsgNJuy9E = {
		
	}
		const _arrayValuegKXY7lc = true;
		const _arrayValueNK4Undf = null;
		const _asFloatpzvNbe = [_arrayValuegKXY7lc, _arrayValueNK4Undf]
		const _returnValueL2tiEU6 = await diff(_inputQPrasor, _unitsgNJuy9E, _asFloatpzvNbe)
	});
})