export {}
import {configFromStringAndArray} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string-and-array.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromStringAndArray', () => {
	it('test for configFromStringAndArray', async () => {
		const _arrayValueqYL9n9H = true;
		const _arrayValue9SvyVx = 1.1925272211960127;
		const _arrayValueUlnj3Kf = "o2y2pPBB2a39b6oBtzBWlfMfL4Om8g4OuQmzBp3u8NvfEq1KpzQwo7BvPEi4sbeAW5PslrSHphKnf";
		const _configg2qody0 = [_arrayValueqYL9n9H, _arrayValue9SvyVx, _arrayValueUlnj3Kf]
		const _returnValuekCJ0zH6 = await configFromStringAndArray(_configg2qody0)
	});
})