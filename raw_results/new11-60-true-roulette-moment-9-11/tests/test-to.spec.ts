export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueF5I1NXl = null;
		const _isValidMwjKuT = () => { return _returnValueF5I1NXl };
		const _returnValuec9iCnin = 4.431073962190265;
		const _valueOfexRUMI = () => { return _returnValuec9iCnin };
		const _returnValueN1aHg9z = -8.32041484431742;
		const _clonehsBuhLA = () => { return _returnValueN1aHg9z };
		const _timexqqDg3J = {
			"isValid": _isValidMwjKuT,
		"valueOf": _valueOfexRUMI,
		"clone": _clonehsBuhLA
	}
		const _withoutSuffixl5QgvRT = "We0G0q4lsdfzjfzZqolT8";
		const _returnValueY8S9Vf = await to(_timexqqDg3J, _withoutSuffixl5QgvRT)
	});
})