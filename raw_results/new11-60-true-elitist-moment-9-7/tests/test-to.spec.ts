export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValuemjyvESP = true;
		const _arrayValueidCgF3x = () => { return _returnValuemjyvESP };
		const _arrayValueZULfvj2 = null;
		const _returnValuediwJE7t = [_arrayValueidCgF3x, _arrayValueZULfvj2]
		const _isValidXRL8yEC = () => { return _returnValuediwJE7t };
		const _time6fPCEy = {
			"isValid": _isValidXRL8yEC
	}
		const _withoutSuffixp8Dnwcz = undefined;
		const _returnValueTDeE8zd = await to(_time6fPCEy, _withoutSuffixp8Dnwcz)
	});
})