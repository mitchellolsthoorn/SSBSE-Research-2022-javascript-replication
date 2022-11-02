export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueLh3oJsX = "e1T67HdTQMs6QcI9stjbD1DbRKDLfr9V";
		const _isValidz6JXLo7 = () => { return _returnValueLh3oJsX };
		const _returnValuegMNZQ2 = undefined;
		const _returnValueTUf9Oib = () => { return _returnValuegMNZQ2 };
		const _cloneP2YFhHl = () => { return _returnValueTUf9Oib };
		const _returnValueHdaGa8T = undefined;
		const _toDateJKecJo = () => { return _returnValueHdaGa8T };
		const _arrayValuehCqQu4k = "FPAyS2FmbTiO1fzN4GKsMnhCQJKeELNp8iTG5dbPMM6Bh1Gc0Ydq2x0agMlngUOCncIiPXg77FfkGKYIN2wNa9PWfTgbLElY";
		const _arrayValueqeng0D = {
		
	}
		const _returnValuebA0g9l = [_arrayValuehCqQu4k, _arrayValueqeng0D]
		const _valueOfKuB8MNJ = () => { return _returnValuebA0g9l };
		const _returnValueZELWqH1 = undefined;
		const _utcOffsetGNJNOU3 = () => { return _returnValueZELWqH1 };
		const _timegKZQG0F = {
			"isValid": _isValidz6JXLo7,
		"clone": _cloneP2YFhHl,
		"toDate": _toDateJKecJo,
		"valueOf": _valueOfKuB8MNJ,
		"utcOffset": _utcOffsetGNJNOU3
	}
		const _withoutSuffixGCuigA = "vTPh4XjsWsxBeHdzQX1vP9U1Pjw7LHzwjjIGggs1J3RAUbz8W3l8PdVNs6Ek3sHxlO6rVAT2iKzqjcf1O";
		const _returnValueuy7Z4nd = await from(_timegKZQG0F, _withoutSuffixGCuigA)
	});
})