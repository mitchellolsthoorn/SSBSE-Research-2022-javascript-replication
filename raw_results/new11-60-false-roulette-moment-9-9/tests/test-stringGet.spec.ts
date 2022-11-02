export {}
import {stringGet} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stringGet', () => {
	it('test for stringGet', async () => {
		const _returnValueXnKme57 = "L5XsLc4vefeQk1qCUjtjDaWd7DKHYoUZGI3Jg41oXHsTBaqgG3KxLxPwKSGh2Hc35FCkeE3wl8ONvVKSmsJry6Ojdt";
		const _returnValueL4ycxjj = () => { return _returnValueXnKme57 };
		const _unitspQfb7IM = () => { return _returnValueL4ycxjj };
		const _returnValueIBkl0NZ = await stringGet(_unitspQfb7IM)
	});
})