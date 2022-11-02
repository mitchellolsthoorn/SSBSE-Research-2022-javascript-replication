export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValueP5KBSHG = 9.498683902732957;
		const _isValids3LPoBS = () => { return _returnValueP5KBSHG };
		const _momL6jpCCa = {
			"isValid": _isValids3LPoBS
	}
		const _unitPKKFxkZ = 6.692738540919031;
		const _returnValuefI005mP = await get(_momL6jpCCa, _unitPKKFxkZ)
	});
})