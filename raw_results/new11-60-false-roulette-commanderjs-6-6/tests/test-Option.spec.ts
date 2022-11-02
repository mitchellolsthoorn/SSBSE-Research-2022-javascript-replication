export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Option', () => {
	it('test for Option', async () => {
		const _flagsY5lEu8m = "OsDoYQSO4LiEutegvVVgtp76l3XbVvPpmA18PWFPRlwWxXzf9DCI29LGeKWMfaYH56msa1zivws1Yxr";
		const _descriptionxFvH65p = "4HlLVkVQBH1pehUdeBh4A";
		const _OptionSXLxBCp = new Option(_flagsY5lEu8m, _descriptionxFvH65p)
		const _valueNQydkvR = undefined;
		const _descriptionHvuX4uS = undefined;
		const _returnValueFxJ7FRU = await _OptionSXLxBCp.default(_valueNQydkvR, _descriptionHvuX4uS)
		const _returnValuekwAXtXZ = await _OptionSXLxBCp.attributeName()
		const _returnValueZEepkfm = await _OptionSXLxBCp.name()
		const _valueFzcQWrG = true;
		const _previousxLxWju = "mntVtzrqwigA75bw7EvgVbtOFhOtYDl4PeEAFQA7QgbOy3aTdVZyBEh2fCB5hrpxw3O8z";
		const _returnValueznSQS8C = await _OptionSXLxBCp._concatValue(_valueFzcQWrG, _previousxLxWju)
	});

	it('test for Option', async () => {
		const _flagsaCIy0Qg = "ULTIige7m2hi6T4l6VgO3tjuWcMYuPB2XLwp8Czswa7L8lXRwZtE";
		const _descriptiondyC6y22 = null;
		const _OptionMRqZdnj = new Option(_flagsaCIy0Qg, _descriptiondyC6y22)
		const _arrayValueDg9xxA = 5.865372750961013;
		const _valuesSojaPiQ = [_arrayValueDg9xxA]
		const _returnValueOkmWPt7 = await _OptionMRqZdnj.choices(_valuesSojaPiQ)
		const _mandatoryxqoJiSh = false;
		const _returnValuenTjMxvf = await _OptionMRqZdnj.makeOptionMandatory(_mandatoryxqoJiSh)
	});

	it('test for Option', async () => {
		const _flagsYw9SEmk = "yHRwelMXNj7J2dS0jxxdbrXaevLXIb1aZLcpWh47j6zqTkUGtngU3JoGL62A3LdrTfBNjnwO8JYl1nQ8naRCdXd";
		const _descriptionKPXmBFh = {
		
	}
		const _OptionVzoqGjG = new Option(_flagsYw9SEmk, _descriptionKPXmBFh)
		const _returnValueWNgdiz = await _OptionVzoqGjG.attributeName()
		const _hide8UGuoD = true;
		const _returnValueTCrIGsm = await _OptionVzoqGjG.hideHelp(_hide8UGuoD)
	});

	it('test for Option', async () => {
		const _flagsb0FGES2 = "5IGBsS4ABu8sM37mc02gvEW6y0gBgAzx5hDYSOQ";
		const _descriptionvFAZ0un = null;
		const _OptionDLXa63t = new Option(_flagsb0FGES2, _descriptionvFAZ0un)
		const _returnValueo3KQB5t = await _OptionDLXa63t.attributeName()
		const _returnValuevlpViDN = await _OptionDLXa63t.attributeName()
		const _returnValuetwVIvOJ = await _OptionDLXa63t.attributeName()
		const _valueMgMBcNM = "q8E54AIoMFvKTYk1tDdXJFX8CQrSMpDg8m1zTRS4hnROIHKmXGSUCH7io3J9ChZl4xEwSr3KJ3NqswPiGuney3dfgFORYRsI";
		const _returnValueVswfRMl = undefined;
		const _arrayValueKPYWPVz = () => { return _returnValueVswfRMl };
		const _arrayValueE5WJ7bd = null;
		const _arrayValueYystm4h = true;
		const _previousHmZIC8b = [_arrayValueKPYWPVz, _arrayValueE5WJ7bd, _arrayValueYystm4h]
		const _returnValuevXyURPi = await _OptionDLXa63t._concatValue(_valueMgMBcNM, _previousHmZIC8b)
	});

	it('test for Option', async () => {
		const _flagsQcUckwV = "ZQfj3zFWqhSd7Gli6IBKCXxW3MVUmPLVdG1B7jBamPYEgEaNTnIbFf3e616Q7sAbkr2gczk";
		const _descriptionejXM5m = null;
		const _OptionfGleJcK = new Option(_flagsQcUckwV, _descriptionejXM5m)
		const _nameBNyj5s4 = undefined;
		const _returnValuepdZkftX = await _OptionfGleJcK.env(_nameBNyj5s4)
		const _returnValueNKgGo2X = await _OptionfGleJcK.attributeName()
	});

	it('test for Option', async () => {
		const _flagsu4XMuh = "kMziVtmx7gV8wPwxAeT1HHDE4nPJ6hOOyRXMbS8XvCQ7tvYOUzqVnxY";
		const _descriptionwIFvvZf = -1.4592152203244009;
		const _OptionvjoNRm = new Option(_flagsu4XMuh, _descriptionwIFvvZf)
		const _arrayValuetzJh8VR = true;
		const _arrayValuetlQ38og = {
		
	}
		const _arrayValuechlcY2X = "dg2cUfLm7ECbzTaDa5rXYhfyPnBpM2GOhLofJRVhQS8ACcEHY6PDSbknKjEHv4se";
		const _valuesEQwQBJ1 = [_arrayValuetzJh8VR, _arrayValuetlQ38og, _arrayValuechlcY2X]
		const _returnValueWNmyK1M = await _OptionvjoNRm.choices(_valuesEQwQBJ1)
		const _argIGK4bKV = "m3kR5cEId6LMKSvF7DyaezDM7MTbLy7dq";
		const _returnValueGqDSvXV = await _OptionvjoNRm.is(_argIGK4bKV)
		const _arrayValueL7v6aZU = 9.075202473606861;
		const _arrayValueazQV5hp = 5.936344537381197;
		const _name7Zt1oG = [_arrayValueL7v6aZU, _arrayValueazQV5hp]
		const _returnValuexXd6lZ = await _OptionvjoNRm.env(_name7Zt1oG)
		const _fnu2RcuEc = undefined;
		const _returnValuef6PZTh = await _OptionvjoNRm.argParser(_fnu2RcuEc)
	});
})