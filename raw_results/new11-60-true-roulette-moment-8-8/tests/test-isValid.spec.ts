export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _returnValueAryF10 = -6.0622584655942955;
		const _arrayValueDErDTw9 = () => { return _returnValueAryF10 };
		const _arrayValuecjBDwiR = undefined;
		const _arrayValueRLj04J = false;
		const _mzNkJsF = [_arrayValueDErDTw9, _arrayValuecjBDwiR, _arrayValueRLj04J]
		const _returnValuefdkuzho = await isValid(_mzNkJsF)
	});
})