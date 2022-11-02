export {}
import {createLocalOrUTC} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-anything.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('createLocalOrUTC', () => {
	it('test for createLocalOrUTC', async () => {
		const _arrayValueDLpJ400 = []
		const _arrayValueOFOr9f = null;
		const _returnValuer5O9xuW = [_arrayValueDLpJ400, _arrayValueOFOr9f]
		const _returnValuenoA2ze5 = () => { return _returnValuer5O9xuW };
		const _inputaHhxy7c = () => { return _returnValuenoA2ze5 };
		const _formatFI690MQ = false;
		const _localenJlNONQ = false;
		const _strictbv5pROH = false;
		const _isUTCgBYd4zb = false;
		const _returnValueSIPIJdh = await createLocalOrUTC(_inputaHhxy7c, _formatFI690MQ, _localenJlNONQ, _strictbv5pROH, _isUTCgBYd4zb)
	});

	it('test for createLocalOrUTC', async () => {
		const _inputwMJBi8a = null;
		const _formatXTbuoDF = false;
		const _localeOE3FdnC = false;
		const _stricteWPgdx = false;
		const _isUTCDSdntS6 = true;
		const _returnValueg53IW3t = await createLocalOrUTC(_inputwMJBi8a, _formatXTbuoDF, _localeOE3FdnC, _stricteWPgdx, _isUTCDSdntS6)
	});

	it('test for createLocalOrUTC', async () => {
		const _inputRl9vb74 = undefined;
		const _formatU8oGujc = true;
		const _localefKq5mHg = false;
		const _strictSKKYQg9 = false;
		const _isUTCubhByyR = null;
		const _returnValue0Muf2T = await createLocalOrUTC(_inputRl9vb74, _formatU8oGujc, _localefKq5mHg, _strictSKKYQg9, _isUTCubhByyR)
	});

	it('test for createLocalOrUTC', async () => {
		const _inputdyXr0jl = "k1jTbwDqcs9krIRjVCco1ftCD9zIovZgenpLb4e8";
		const _formatCo8sMvb = true;
		const _localeJ9dhXtE = false;
		const _strictBDcYlK7 = false;
		const _isUTCqbNmwOx = "WQOOWgFy8sKa5zKXlv58kOQyTuqGRYvhzXdVerLpohjUH5OCrQmms1ca3vFq9V8Twyb8b0Ii";
		const _returnValuephahRc6 = await createLocalOrUTC(_inputdyXr0jl, _formatCo8sMvb, _localeJ9dhXtE, _strictBDcYlK7, _isUTCqbNmwOx)
	});

	it('test for createLocalOrUTC', async () => {
		const _arrayValueqPEVcOl = undefined;
		const _inputxuCB80K = [_arrayValueqPEVcOl]
		const _formatIFdUm4u = true;
		const _localezKtFLeH = true;
		const _strictJdNUGR7 = true;
		const _isUTCtNPiF43 = 1.2361122265116293;
		const _returnValuenhwepg6 = await createLocalOrUTC(_inputxuCB80K, _formatIFdUm4u, _localezKtFLeH, _strictJdNUGR7, _isUTCtNPiF43)
	});
})