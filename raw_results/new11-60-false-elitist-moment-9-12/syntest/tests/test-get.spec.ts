export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValueYMHXf2b = "hWGLkRHTxT68XzGfmgHcHnfvCFbNM";
		const _isValidTADGXUn = () => { return _returnValueYMHXf2b };
		const _momd0YST8O = {
			"isValid": _isValidTADGXUn
	}
		const _unittETUaN0 = -0.10222275581451434;
		const _returnValueBwth6jK = await get(_momd0YST8O, _unittETUaN0)
	});
})