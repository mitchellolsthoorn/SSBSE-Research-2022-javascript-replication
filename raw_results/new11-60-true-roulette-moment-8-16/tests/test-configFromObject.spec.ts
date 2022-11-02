export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const __iF5fwQs = "kLQDthBBeztDJv9MtF3hSdsgDyTXUFjIw6X6CkFnK7qW";
		const _returnValueVSsuvNm = undefined;
		const _isValidphkIgN9 = () => { return _returnValueVSsuvNm };
		const _returnValueKpymElK = null;
		const _isLocalTglEZW0 = () => { return _returnValueKpymElK };
		const _returnValue6zRQfK = "ncEPYAgd80lgwYjN7koePZf6zRiz9HfCBCUaNu8hfhCTurjQx";
		const _utcOffsetsiUHTlI = () => { return _returnValue6zRQfK };
		const _returnValueJX5eCF7 = {
		
	}
		const _year4hV794 = () => { return _returnValueJX5eCF7 };
		const _returnValueUItYYas = false;
		const _formatUw37XZ9 = () => { return _returnValueUItYYas };
		const _configRQOe72y = {
			"_i": __iF5fwQs,
		"isValid": _isValidphkIgN9,
		"isLocal": _isLocalTglEZW0,
		"utcOffset": _utcOffsetsiUHTlI,
		"year": _year4hV794,
		"format": _formatUw37XZ9
	}
		const _returnValuekBsLZ6 = await configFromObject(_configRQOe72y)
	});
})