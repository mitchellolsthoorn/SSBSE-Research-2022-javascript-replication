export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _req7WTWBT = req
		const _returnValueVLOtKjH = await _req7WTWBT.acceptsCharsets()
	});

	it('test for req', async () => {
		const _reqZUrtvu = req
		const _returnValueR3wUHF = await _reqZUrtvu.acceptsLanguages()
		const _nametBRyf8O = "MxfDG";
		const _defaultValueSWicoA = false;
		const _returnValueFUvRWDN = await _reqZUrtvu.param(_nametBRyf8O, _defaultValueSWicoA)
	});

	it('test for req', async () => {
		const _reqPAPuGJT = req
		const _sizeN4yr0Ex = "hjLHAE3NFMzPyJty0laDwtFCP3vNq";
		const _optionsyxRjozk = null;
		const _returnValueqRslJwy = await _reqPAPuGJT.range(_sizeN4yr0Ex, _optionsyxRjozk)
		const _namegRTE5Pj = "05X87xpCWc6LGwrmNLW9SCJZg8mumvmrhm8LcJEwYXTRQy18JtuaQv4vsoafGeKgQl5wV7WEQTxsGTV9ZE4AmEN";
		const _defaultValueionY96M = undefined;
		const _returnValuejohMWDt = await _reqPAPuGJT.param(_namegRTE5Pj, _defaultValueionY96M)
		const _arrayValueYAA8azq = null;
		const _sizeFbVTYpU = [_arrayValueYAA8azq]
		const _returnValuetr8CYMj = {
		
	}
		const _optionsqgtzCu5 = () => { return _returnValuetr8CYMj };
		const _returnValueNxisbwt = await _reqPAPuGJT.range(_sizeFbVTYpU, _optionsqgtzCu5)
	});

	it('test for req', async () => {
		const _reqt9XUawW = req
		const _typesivq2zBd = {
		
	}
		const _returnValuevMCDqc = await _reqt9XUawW.is(_typesivq2zBd)
		const _returnValuedTJVwOU = await _reqt9XUawW.acceptsCharsets()
		const _returnValuekLkdFeT = undefined;
		const _arrayValuefHVqdhU = () => { return _returnValuekLkdFeT };
		const _arrayValuePggGq6B = []
		const _arrayValueSxiklC = false;
		const _arrayValueHI32md = {
		
	}
		const _arrayValueo9HTAFI = [_arrayValueSxiklC, _arrayValueHI32md]
		const _sizeJIRSEzf = [_arrayValuefHVqdhU, _arrayValuePggGq6B, _arrayValueo9HTAFI]
		const _optionsWvj0FK = null;
		const _returnValue9suXVO = await _reqt9XUawW.range(_sizeJIRSEzf, _optionsWvj0FK)
		const _returnValueuUQeb9 = await _reqt9XUawW.acceptsCharsets()
		const _returnValueE8xU6ek = await _reqt9XUawW.acceptsCharsets()
	});

	it('test for req', async () => {
		const _reqSB7b46x = req
		const _arrayValueBsVe7zC = undefined;
		const _arrayValuecRXHNSr = {
		
	}
		const _typesK913Ucj = [_arrayValueBsVe7zC, _arrayValuecRXHNSr]
		const _returnValuehNUZde = await _reqSB7b46x.is(_typesK913Ucj)
		const _returnValuenfsv8s4 = null;
		const _toLowerCasemHeE8ua = () => { return _returnValuenfsv8s4 };
		const _nameD2WcuPn = {
			"toLowerCase": _toLowerCasemHeE8ua
	}
		const _returnValueyC4hTrc = await _reqSB7b46x.header(_nameD2WcuPn)
		const _returnValueGXVujfe = await _reqSB7b46x.accepts()
	});
})