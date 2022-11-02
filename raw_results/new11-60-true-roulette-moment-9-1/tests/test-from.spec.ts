export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueyQIkWnp = null;
		const _timelQ82Emz = () => { return _returnValueyQIkWnp };
		const _withoutSuffixzIFzZKc = 0.9373989623959744;
		const _returnValuewWQ6J0c = await from(_timelQ82Emz, _withoutSuffixzIFzZKc)
	});
})