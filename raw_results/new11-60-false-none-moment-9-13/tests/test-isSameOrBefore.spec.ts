export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputaCY2nzF = "3pQgSBg5C8eaFzQEziscmOD";
		const _unitsPzUPJK0 = "iYtDdu7zYiUISf8CtPU6lMNQFX2DD0G3J4XwQGiEDywd3i3mr137Voy5T4QT3qR0CIjinWzD4FbYvI2aFpTtSVbaljYTxb";
		const _returnValueZ8WwNSM = await isSameOrBefore(_inputaCY2nzF, _unitsPzUPJK0)
	});
})