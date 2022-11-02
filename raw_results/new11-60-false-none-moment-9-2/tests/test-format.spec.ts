export {}
import {format} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('format', () => {
	it('test for format', async () => {
		const _inputStringWhrC6GC = "ZU4seZM7S9EkKXUiEYw84iDoySM2JNqrF4KLKu4DcXKzIyhwVK4U4L0qT8TMiODv";
		const _returnValueunbPAIz = await format(_inputStringWhrC6GC)
	});

	it('test for format', async () => {
		const _inputStringo0PRvmn = undefined;
		const _returnValuezAtFY1t = await format(_inputStringo0PRvmn)
	});
})