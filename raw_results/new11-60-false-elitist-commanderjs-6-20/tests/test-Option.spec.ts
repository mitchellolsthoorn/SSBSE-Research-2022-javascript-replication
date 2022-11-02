export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Option', () => {
	it('test for Option', async () => {
		const _returnValueFJNdcqf = true;
		const _includesJtrgij7 = () => { return _returnValueFJNdcqf };
		const _flagsrwTK6fy = {
			"includes": _includesJtrgij7
	}
		const _descriptiont81rCby = null;
		const _OptionKiGLmuu = new Option(_flagsrwTK6fy, _descriptiont81rCby)
		const _valueO5xrNim = undefined;
		const _descriptionX6mMGTP = undefined;
		const _returnValuezQsQ7hd = await _OptionKiGLmuu.default(_valueO5xrNim, _descriptionX6mMGTP)
		const _hideVoEsRpH = true;
		const _returnValueJeJGQc = await _OptionKiGLmuu.hideHelp(_hideVoEsRpH)
		const _valueDAZgtb = 9.74554210863893;
		const _concatbkknkGp = 3.8526907894838374;
		const _previouscPM9bFS = {
			"concat": _concatbkknkGp
	}
		const _returnValuef0Yg0M = await _OptionKiGLmuu._concatValue(_valueDAZgtb, _previouscPM9bFS)
		const _mandatorytDHO3Xn = true;
		const _returnValueRJfOnCD = await _OptionKiGLmuu.makeOptionMandatory(_mandatorytDHO3Xn)
		const _valuesi6u5K1 = -5.212151854322938;
		const _returnValueKshkXsA = true;
		const _concatgH79V8l = () => { return _returnValueKshkXsA };
		const _previousYjsKvmr = {
			"concat": _concatgH79V8l
	}
		const _returnValueg7pJi8s = await _OptionKiGLmuu._concatValue(_valuesi6u5K1, _previousYjsKvmr)
	});

	it('test for Option', async () => {
		const _flagsqHm6t9S = "DGM7YvJ2YFVA3qLSfyDsY2foPbLccBDkCw6qeCHrb2SumpDtGQJek7OuFumJKMPga8ximGBIFKTO1k5mipBDijQKIFP8";
		const _descriptionjPx6RRR = null;
		const _OptioneMGFoFM = new Option(_flagsqHm6t9S, _descriptionjPx6RRR)
		const _fnmso6Ih7 = undefined;
		const _returnValueBfoMOCU = await _OptioneMGFoFM.argParser(_fnmso6Ih7)
		const _fnBHHQgcH = undefined;
		const _returnValueKJHfETw = await _OptioneMGFoFM.argParser(_fnBHHQgcH)
		const _argWRxr3M = {
		
	}
		const _returnValueW47giZ = await _OptioneMGFoFM.is(_argWRxr3M)
		const _hideMaOiKYY = true;
		const _returnValueT6VlsZx = await _OptioneMGFoFM.hideHelp(_hideMaOiKYY)
		const _fnM7K77yf = undefined;
		const _returnValueOFjAxtl = await _OptioneMGFoFM.argParser(_fnM7K77yf)
	});

	it('test for Option', async () => {
		const _flagsUwFuenQ = "XSeJQueki5Pc9B3HaUjL9GLnbisdUgEcOFE6m0XcwjbRfQXFmQ2WGCjkUHwn1GmJx68lHPwwIgzgJbjsnddyc";
		const _descriptionlBxUqWR = null;
		const _OptionlPIhxQ = new Option(_flagsUwFuenQ, _descriptionlBxUqWR)
		const _returnValueeSkUFb7 = await _OptionlPIhxQ.name()
		const _fnzy3WwHs = undefined;
		const _returnValueFYEK6ea = await _OptionlPIhxQ.argParser(_fnzy3WwHs)
	});

	it('test for Option', async () => {
		const _flagsx0BINVJ = "mThBLFDcB7BKbHIr94kekQkQHMSg7Qxmn";
		const _descriptionHJidzvM = -1.0025093557991198;
		const _OptionzErzhNp = new Option(_flagsx0BINVJ, _descriptionHJidzvM)
		const _returnValueM496ryu = await _OptionzErzhNp.attributeName()
		const _returnValuevIXZWVX = await _OptionzErzhNp.name()
		const _arrayValuerVYb7gj = "GIVRt83Xangow9i2LSEuNmp2fGVvdrkF5x2tbmeOx95Qp8iapXPiXzzVD";
		const _arrayValueMear5T0 = null;
		const _arrayValueaVRizwf = null;
		const _hideASvhxWV = [_arrayValuerVYb7gj, _arrayValueMear5T0, _arrayValueaVRizwf]
		const _returnValuel4XZL7D = await _OptionzErzhNp.hideHelp(_hideASvhxWV)
	});

	it('test for Option', async () => {
		const _flagsFXBhKC = "mxdLXssApMfyYco4WVxnkijzVYuHfI5LozBUcGBaubr3AzawEDde9CLWfpIxK92wl92jJMrxk";
		const _arrayValueO9mC1oD = null;
		const _arrayValuePMLF9qR = 8.052291343297732;
		const _arrayValues7RSpYa = {
		
	}
		const _descriptionwSVDIEZ = [_arrayValueO9mC1oD, _arrayValuePMLF9qR, _arrayValues7RSpYa]
		const _OptionkLo8OWQ = new Option(_flagsFXBhKC, _descriptionwSVDIEZ)
		const _valueGlWDxm = true;
		const _returnValueDm27Rx9 = null;
		const _concatWSMEpag = () => { return _returnValueDm27Rx9 };
		const _previousAZbZWoD = {
			"concat": _concatWSMEpag
	}
		const _returnValue2hHbSD = await _OptionkLo8OWQ._concatValue(_valueGlWDxm, _previousAZbZWoD)
		const _nameliTeoS5 = undefined;
		const _returnValueJter0nx = await _OptionkLo8OWQ.env(_nameliTeoS5)
		const _returnValueVIn15ot = await _OptionkLo8OWQ.attributeName()
	});

	it('test for Option', async () => {
		const _flagsbwrYnp5 = "mLxtgCm3NzXrGAJ2FGY";
		const _descriptionhipfEk = false;
		const _OptionVm974FC = new Option(_flagsbwrYnp5, _descriptionhipfEk)
		const _mandatoryXUM1WYK = true;
		const _returnValue7aSi7i = await _OptionVm974FC.makeOptionMandatory(_mandatoryXUM1WYK)
		const _mandatoryv8t2Tlq = true;
		const _returnValuedMq7OqI = await _OptionVm974FC.makeOptionMandatory(_mandatoryv8t2Tlq)
		const _returnValuetFzwDec = await _OptionVm974FC.name()
		const _valueedz8VmA = undefined;
		const _descriptionMQM4x5Y = undefined;
		const _returnValue8CROB4 = await _OptionVm974FC.default(_valueedz8VmA, _descriptionMQM4x5Y)
	});

	it('test for Option', async () => {
		const _flagsCkoWrPo = "51fZZTJPApYrXIoUW3w7d2XCIW4qdD4O98AWQwtVwS8xKPKqHgjF56IdLBFH9b5kD838FqQjHZor45qR3ne1RLDgP1C";
		const _descriptionLveGsma = undefined;
		const _OptionQWDJufn = new Option(_flagsCkoWrPo, _descriptionLveGsma)
		const _returnValuehx3i5x = await _OptionQWDJufn.attributeName()
		const _argvcWZ6F7 = {
		
	}
		const _returnValuebsoyJ8u = await _OptionQWDJufn.is(_argvcWZ6F7)
		const _returnValuevYbEECC = true;
		const _includesjkuKSut = () => { return _returnValuevYbEECC };
		const _returnValueXf2D6Fy = null;
		const _joine8QfB43 = () => { return _returnValueXf2D6Fy };
		const _valuesHdaQVmO = {
			"includes": _includesjkuKSut,
		"join": _joine8QfB43
	}
		const _returnValue1Y06Yv = await _OptionQWDJufn.choices(_valuesHdaQVmO)
		const _argVd7U77 = {
		
	}
		const _returnValuevqxIaxH = await _OptionQWDJufn.is(_argVd7U77)
		const _namePBe7XBE = undefined;
		const _returnValue7gxSnb = await _OptionQWDJufn.env(_namePBe7XBE)
	});
})