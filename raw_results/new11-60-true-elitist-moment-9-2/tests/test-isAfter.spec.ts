export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _arrayValuebWJQ2u4 = 8.56630305723371;
		const _arrayValueVQhuvgY = "bfFI8XelUDhy7T5Qkk9TAlNrAFO7cBJp8PpjnITKLOPuNolxIiRKpjOGlFydPVElG3koLOwQ2nUFDjSRgM4";
		const _arrayValueXNZK4RT = "Y7T612308mmZHajZ2HbfOYXwtTnKHCICwCWHjTL9ynGOWL7mTEJLAgaUAtkEWSCrAoKODrikcm";
		const _inputisWc3dq = [_arrayValuebWJQ2u4, _arrayValueVQhuvgY, _arrayValueXNZK4RT]
		const _unitsUOKAwX1 = {
		
	}
		const _returnValueCHJyDD7 = await isAfter(_inputisWc3dq, _unitsUOKAwX1)
	});

	it('test for isAfter', async () => {
		const _inputhkiEOKb = null;
		const _unitsCI4qX9C = {
		
	}
		const _returnValuewg32Lov = await isAfter(_inputhkiEOKb, _unitsCI4qX9C)
	});
})