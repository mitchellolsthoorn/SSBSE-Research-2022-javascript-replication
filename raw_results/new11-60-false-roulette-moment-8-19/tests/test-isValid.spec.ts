export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _returnValueZptS5A = "dTON9QNtISv1NmAdNnF9m3qmVpzo0hyzchGeeobphYB5yh3";
		const _mwUPx6Y1 = () => { return _returnValueZptS5A };
		const _returnValueSpaEiM3 = await isValid(_mwUPx6Y1)
	});
})