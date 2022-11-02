export {}
import {locale} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/locale.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('locale', () => {
	it('test for locale', async () => {
		const _returnValueBFbf22A = null;
		const _arrayValuebJEgv1 = () => { return _returnValueBFbf22A };
		const _keyQTuAgT = [_arrayValuebJEgv1]
		const _returnValueKiUtBi = await locale(_keyQTuAgT)
	});
})