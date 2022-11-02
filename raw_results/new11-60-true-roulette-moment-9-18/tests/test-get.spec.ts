export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValuepbbWF6P = true;
		const _isValidhFehraf = () => { return _returnValuepbbWF6P };
		const _momov2UqfQ = {
			"isValid": _isValidhFehraf
	}
		const _unitJEtwLqs = "eN9QUOQ4HvNiOB7GDPUREiNhkL7OQW83APK1F5cEBGfeITczVQGqVP6uuMc95AtJCOqHQCDMP96v2kDmwpX7fH9bOJ2n20HH7O";
		const _returnValuewRiYn5 = await get(_momov2UqfQ, _unitJEtwLqs)
	});
})