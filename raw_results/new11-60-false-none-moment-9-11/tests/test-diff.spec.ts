export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputNuMEgjN = "fsKWolwXwuehMOYT55vipsY4tQIkkTV3SIjin263dXq5lU6bOOMXoiTtwtI7nsbbMHfhhwxMB0a3h1E8kD354FB";
		const _arrayValueP5sXsMp = false;
		const _arrayValueCSVElGt = "aiEB5spHf7whztwkld3NuZj76iIisWAjR9gnBNFNIkuuvK9I9v2iECk";
		const _arrayValueRKy3pzJ = undefined;
		const _arrayValueVojBj4B = undefined;
		const _unitsvETY0TZ = [_arrayValueP5sXsMp, _arrayValueCSVElGt, _arrayValueRKy3pzJ, _arrayValueVojBj4B]
		const _asFloatwTQmUcw = null;
		const _returnValue8fnt31 = await diff(_inputNuMEgjN, _unitsvETY0TZ, _asFloatwTQmUcw)
	});
})