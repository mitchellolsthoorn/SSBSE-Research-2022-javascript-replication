export {}
import {prepareConfig} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-anything.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prepareConfig', () => {
	it('test for prepareConfig', async () => {
		const _configJb3gWSY = "qX7DXgGYRQPfIDtBQwiUHz1HLR6L2wiaKkYG3q1rmGtl13uX";
		const _returnValueYymTBNf = await prepareConfig(_configJb3gWSY)
	});

	it('test for prepareConfig', async () => {
		const _returnValuejElQP3I = 4.285633833017197;
		const _arrayValueIxT2Zql = () => { return _returnValuejElQP3I };
		const _arrayValueLKex5Ni = undefined;
		const _configyMkzgUw = [_arrayValueIxT2Zql, _arrayValueLKex5Ni]
		const _returnValuezUl8sch = await prepareConfig(_configyMkzgUw)
	});
})