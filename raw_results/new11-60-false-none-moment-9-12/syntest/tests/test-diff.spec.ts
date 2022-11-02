export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputRDBWsJa = 8.937656000770659;
		const _arrayValueRWFb9cv = -9.944069573152566;
		const _unitsk5xWpCp = [_arrayValueRWFb9cv]
		const _arrayValueWJoIKn = undefined;
		const _arrayValueCXKuGLr = undefined;
		const _arrayValuep7F3mZM = "jxjodYxoLQoAVNMFzeKVJIqAdgZPod4lzgAipb0tnkNQaircdVXblQC7YeEhRUyhMwI0p";
		const _arrayValuedADj6As = -2.1509086082800444;
		const _asFloatD7nUUev = [_arrayValueWJoIKn, _arrayValueCXKuGLr, _arrayValuep7F3mZM, _arrayValuedADj6As]
		const _returnValuear2wGBn = await diff(_inputRDBWsJa, _unitsk5xWpCp, _asFloatD7nUUev)
	});
})