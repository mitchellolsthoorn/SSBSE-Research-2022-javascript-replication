export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputKtUy5Lf = true;
		const _unitsOXGAdZc = "NyQdO6tL7r8mreAnIosOG8QnfiFqrlXKPzG5Gl7ayYIRsMOkzNtx2ePSe";
		const _returnValueGckztKt = await isBefore(_inputKtUy5Lf, _unitsOXGAdZc)
	});
})