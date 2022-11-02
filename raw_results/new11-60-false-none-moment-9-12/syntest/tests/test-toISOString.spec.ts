export {}
import {toISOString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toISOString', () => {
	it('test for toISOString', async () => {
		const _arrayValueHZK14TS = -2.5293539670665375;
		const _arrayValueJ6rZEqT = undefined;
		const _arrayValueeb0sLY = "b15splOxwEQMVYyZjoVBKkXlh4lOgYC36B3H";
		const _keepOffsetX7w0Hp6 = [_arrayValueHZK14TS, _arrayValueJ6rZEqT, _arrayValueeb0sLY]
		const _returnValueCP53uhJ = await toISOString(_keepOffsetX7w0Hp6)
	});
})