export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _returnValuepQLGWtm = -6.588754094643066;
		const _arrayValueMeSqWo = () => { return _returnValuepQLGWtm };
		const _arrayValueag7xgUZ = "x79nOpVxavitnykgSXy5o3RCT3wiUqC02nRT1UzUpgsKOV";
		const _inputNydiLDW = [_arrayValueMeSqWo, _arrayValueag7xgUZ]
		const _unitsF8RGF49 = false;
		const _returnValuePuRVoq1 = await isSameOrAfter(_inputNydiLDW, _unitsF8RGF49)
	});
})