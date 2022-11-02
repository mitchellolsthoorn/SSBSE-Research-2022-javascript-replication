export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const __isUTCJIIzijx = -6.972027075463378;
		const _returnValueiJNwjnK = "A8FySV9BGAl9RhP8s92cV8UHYuTWI9H9zjjU4UNBbwVX1vpC3jFjgJVv9irXRgG3DsF4rWcoswJ53lFXCQaBqx6y3sbdBajzU";
		const _isValidUQNeH8 = () => { return _returnValueiJNwjnK };
		const _momX9aIV3 = {
			"_isUTC": __isUTCJIIzijx,
		"isValid": _isValidUQNeH8
	}
		const _unitKdLhoJp = -7.073831913803108;
		const _returnValueoMZyYLO = await get(_momX9aIV3, _unitKdLhoJp)
	});
})