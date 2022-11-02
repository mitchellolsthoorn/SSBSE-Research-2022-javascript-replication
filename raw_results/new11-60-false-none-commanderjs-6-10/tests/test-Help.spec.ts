export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _Helpn1wSkL = new Help()
		const _cmddg1vetx = {
		
	}
		const _returnValuevAQT63i = await _Helpn1wSkL.visibleOptions(_cmddg1vetx)
		const _returnValueKVoESJ = null;
		const _returnValueZ4M5EvF = () => { return _returnValueKVoESJ };
		const _arrayValuehfr6BF6 = () => { return _returnValueZ4M5EvF };
		const _argumentwBpYZgp = [_arrayValuehfr6BF6]
		const _returnValueK0VapcH = await _Helpn1wSkL.argumentDescription(_argumentwBpYZgp)
	});

	it('test for Help', async () => {
		const _HelpEM2YDNc = new Help()
		const _cmdGxWEb0Q = true;
		const _helper4SFgIt = false;
		const _returnValuePcs34y = await _HelpEM2YDNc.longestArgumentTermLength(_cmdGxWEb0Q, _helper4SFgIt)
		const _cmdGOfI81a = -6.304257729975199;
		const _helperwsElz1U = -5.443585728993964;
		const _returnValueOJfOGg7 = await _HelpEM2YDNc.longestSubcommandTermLength(_cmdGOfI81a, _helperwsElz1U)
		const _returnValuezVSQA0d = "1tEQ5ps8Ojh016GnIMUUPGA2yehzfuPsJhj";
		const _optionerFh4yF = () => { return _returnValuezVSQA0d };
		const _returnValueBOV6A4C = await _HelpEM2YDNc.optionTerm(_optionerFh4yF)
	});

	it('test for Help', async () => {
		const _HelpMBNT0Yb = new Help()
		const _arrayValuecrxlL7p = "15yDAEBu9bIjd7DbX6i2Fg3TXSFecDpOWE9WeUufdv5TnB6y0ITnWH8JW4soqM3XGesvdwnMfj";
		const _arrayValueiX8Cr7 = undefined;
		const _returnValuea70WO4K = [_arrayValuecrxlL7p, _arrayValueiX8Cr7]
		const _cmduvEC3aw = () => { return _returnValuea70WO4K };
		const _returnValueJz4bZDz = await _HelpMBNT0Yb.visibleCommands(_cmduvEC3aw)
		const _cmdxSo52UL = false;
		const _returnValueKjNeyqW = "PamYVgnThzCMbkjn3zpGkUuYMA7So1zk8vQ9GmmsCy6IK7p536tPN6HRwyJ3TWCKMKA";
		const _helperv6pPQad = () => { return _returnValueKjNeyqW };
		const _returnValueKJixErP = await _HelpMBNT0Yb.longestArgumentTermLength(_cmdxSo52UL, _helperv6pPQad)
		const _arrayValuez8Hwqj = "dPB4njzzB2I0vtedOLOJIUIt6U3beRdoKzZ4OFKEVeKnfskj3r4XnBp63zC5k";
		const _cmdSfNeR1M = [_arrayValuez8Hwqj]
		const _helpercqfoafJ = "3f5rVdc3rE2mEtFNQVyiSS0OaHuv3P";
		const _returnValueuUcvWyV = await _HelpMBNT0Yb.longestOptionTermLength(_cmdSfNeR1M, _helpercqfoafJ)
		const _argumentZX6MmXU = "PN2BT3wnZf3OzzeKMmKwvTOVnD137IOz6S1nEBJe";
		const _returnValuexzRvBcQ = await _HelpMBNT0Yb.argumentTerm(_argumentZX6MmXU)
		const _cmdkPNXh64 = undefined;
		const _returnValuezmO07wM = await _HelpMBNT0Yb.subcommandDescription(_cmdkPNXh64)
	});

	it('test for Help', async () => {
		const _HelpVw5zTPR = new Help()
		const _cmdm4x0Cxb = null;
		const _helperjQHAe87 = undefined;
		const _returnValueU0ZhBAG = await _HelpVw5zTPR.longestOptionTermLength(_cmdm4x0Cxb, _helperjQHAe87)
		const _argumentA02g5q0 = {
		
	}
		const _returnValueWMfiNjZ = await _HelpVw5zTPR.argumentTerm(_argumentA02g5q0)
		const _returnValuemUFuW1w = null;
		const _cmdfjliIsl = () => { return _returnValuemUFuW1w };
		const _returnValue8svGvO = await _HelpVw5zTPR.visibleArguments(_cmdfjliIsl)
	});

	it('test for Help', async () => {
		const _HelpilKVtKg = new Help()
		const _returnValueiVLZBBr = null;
		const _optionNESmoLF = () => { return _returnValueiVLZBBr };
		const _returnValueOeQ8yxa = await _HelpilKVtKg.optionTerm(_optionNESmoLF)
		const _cmdUmzQ6zZ = true;
		const _helperkxzUsz = "O";
		const _returnValuetgtprNy = await _HelpilKVtKg.longestArgumentTermLength(_cmdUmzQ6zZ, _helperkxzUsz)
		const _returnValuekknnwoK = true;
		const _argumentCLl2sTq = () => { return _returnValuekknnwoK };
		const _returnValueXyJNY8Y = await _HelpilKVtKg.argumentTerm(_argumentCLl2sTq)
		const _cmddtLQ9P8 = undefined;
		const _helperL1ArTS9 = "jtmUo1DfnQ2h74kf39x4Dwuakf5TDRNhI5S45FUiRXnVR24KKqE05k0419uYOrXpETa";
		const _returnValueg4QK53L = await _HelpilKVtKg.formatHelp(_cmddtLQ9P8, _helperL1ArTS9)
		const _argumentgK4UUhQ = true;
		const _returnValuewyhPPOH = await _HelpilKVtKg.argumentDescription(_argumentgK4UUhQ)
	});

	it('test for Help', async () => {
		const _HelpjJ9XeGC = new Help()
		const _returnValueS7OhOE0 = undefined;
		const _strCPBL76p = () => { return _returnValueS7OhOE0 };
		const _width4ZwctK = "VO6jw35Yja5";
		const _indentp457GP = "2AML7Oh4T4CRjeVY4SxgIdpMDNTYPHQKMQfVK5cLTYy6SPvFMaeNYr2LuAOUNRTGP5WzOiyQPagGiEUjJyRtwsjhj7GDbFSMg7";
		const _minColumnWidthODQm6ZH = -0.10481899418672036;
		const _returnValueP89wSQH = await _HelpjJ9XeGC.wrap(_strCPBL76p, _width4ZwctK, _indentp457GP, _minColumnWidthODQm6ZH)
		const _cmdKmhuSD = null;
		const _returnValueV2aqQ1 = await _HelpjJ9XeGC.subcommandTerm(_cmdKmhuSD)
		const _cmdsMQwUR9 = undefined;
		const _returnValuesnxM66s = await _HelpjJ9XeGC.subcommandTerm(_cmdsMQwUR9)
		const _cmdWWpI2yN = undefined;
		const _returnValueoBvxhud = await _HelpjJ9XeGC.visibleOptions(_cmdWWpI2yN)
		const _cmdo2KcNI6 = "Ksq1BCMs";
		const _returnValueGNlXwPc = await _HelpjJ9XeGC.commandUsage(_cmdo2KcNI6)
	});

	it('test for Help', async () => {
		const _HelpR6wKP1c = new Help()
		const _cmdmC1s7EL = undefined;
		const _helperjegCLzG = null;
		const _returnValueapuzu2x = await _HelpR6wKP1c.padWidth(_cmdmC1s7EL, _helperjegCLzG)
		const _argumentGsVkUf = 4.5868212734787495;
		const _returnValuegHA0Q2r = await _HelpR6wKP1c.argumentDescription(_argumentGsVkUf)
		const _cmdIcyw7uK = "AR6Piw9LTt7PgAN6iRMPR7I2gdIjHOOaVRvj7hbh7iIrhhAvPNdB2In1QUFF8FOiB9qniSx";
		const _arrayValueVNDkSWT = {
		
	}
		const _arrayValueyf437j4 = 8.497314285024917;
		const _arrayValueSGcJ026 = null;
		const _arrayValueEfUizlj = [_arrayValueVNDkSWT, _arrayValueyf437j4, _arrayValueSGcJ026]
		const _arrayValueiVZCKSU = {
		
	}
		const _helperwCQOTIP = [_arrayValueEfUizlj, _arrayValueiVZCKSU]
		const _returnValueSARPqZx = await _HelpR6wKP1c.longestSubcommandTermLength(_cmdIcyw7uK, _helperwCQOTIP)
		const _arrayValueNyXxziT = 5.667637657655158;
		const _returnValueC7IrYyc = [_arrayValueNyXxziT]
		const _arrayValueEJvCsx = () => { return _returnValueC7IrYyc };
		const _arrayValueQgkpon = null;
		const _arrayValueEXlPaIY = "IgVPPwPSvvefEt";
		const _argumentpNr2wFc = [_arrayValueEJvCsx, _arrayValueQgkpon, _arrayValueEXlPaIY]
		const _returnValueIQCD1Nz = await _HelpR6wKP1c.argumentTerm(_argumentpNr2wFc)
	});

	it('test for Help', async () => {
		const _Helpl6zjTwV = new Help()
		const _argumentx0SB5Uw = "VYiXaohdWGKj4Kid7eIruI5tmapgcQLJ579";
		const _returnValuep7yn1O0 = await _Helpl6zjTwV.argumentTerm(_argumentx0SB5Uw)
		const _cmduhemOYi = "03zBVrU9ENAi6E5S5wo55nr1NAzfDK6ThzyrAYAk72tQPJvQSq3wd8iNAdHoRlNc82WjpOoz3U";
		const _helperT3tRu0X = "uGYIIg5ptw";
		const _returnValueRyyJMMj = await _Helpl6zjTwV.longestArgumentTermLength(_cmduhemOYi, _helperT3tRu0X)
	});

	it('test for Help', async () => {
		const _HelpjrnrEBh = new Help()
		const _cmdixnbqR = -4.365016190916256;
		const _returnValuehz7xKCV = await _HelpjrnrEBh.subcommandTerm(_cmdixnbqR)
		const _arrayValueUDcsR2U = "a3HpMZdUKr";
		const _arrayValuedRLswdr = undefined;
		const _arrayValuezhsP7ZG = {
		
	}
		const _arrayValuegPyVuTj = [_arrayValuedRLswdr, _arrayValuezhsP7ZG]
		const _arrayValueViK4mN6 = undefined;
		const _cmdasHnxx = [_arrayValueUDcsR2U, _arrayValuegPyVuTj, _arrayValueViK4mN6]
		const _helperpt88IJv = -7.002993007338676;
		const _returnValuepBsgS8 = await _HelpjrnrEBh.longestOptionTermLength(_cmdasHnxx, _helperpt88IJv)
	});

	it('test for Help', async () => {
		const _HelpDu4IX1 = new Help()
		const _cmdSUuUOtZ = true;
		const _returnValueD6ONVpC = await _HelpDu4IX1.visibleArguments(_cmdSUuUOtZ)
		const _argumentNr6EDaO = false;
		const _returnValuexz0WLL7 = await _HelpDu4IX1.argumentDescription(_argumentNr6EDaO)
		const _optionsg9o5bc = -0.007859773361536426;
		const _returnValuesrl0i9o = await _HelpDu4IX1.optionTerm(_optionsg9o5bc)
	});

	it('test for Help', async () => {
		const _HelprqQEoL = new Help()
		const _arrayValuedTdDv32 = {
		
	}
		const _cmdTpKeZcw = [_arrayValuedTdDv32]
		const _returnValuepUAGgsn = await _HelprqQEoL.subcommandDescription(_cmdTpKeZcw)
		const _cmdITXFOSD = undefined;
		const _returnValuelt4BXlU = await _HelprqQEoL.visibleArguments(_cmdITXFOSD)
		const _argumentYzNNThE = {
		
	}
		const _returnValuezr59wDZ = await _HelprqQEoL.argumentDescription(_argumentYzNNThE)
		const _argumentAgKsEqs = undefined;
		const _returnValueURqlTtY = await _HelprqQEoL.argumentTerm(_argumentAgKsEqs)
	});

	it('test for Help', async () => {
		const _HelpDNA9oh9 = new Help()
		const _arrayValueG40CDYz = true;
		const _arrayValuelwluk9G = 8.831453014209881;
		const _arrayValueMjveFzW = -6.382869236678572;
		const _arrayValuenBRpsEg = 7.657753928100416;
		const _arrayValuechcoXJj = "sjgqj5Nowaizb0Wxb1bD4AqKqkndN4LMkMOdTF2gNfFIEDmxXIufPOAEKOLFBMuBCepwdjlIJDduPHgbAQsj2F3ag28XA";
		const _arrayValuePPOGcFQ = [_arrayValuenBRpsEg, _arrayValuechcoXJj]
		const _argumentqK0slh4 = [_arrayValueG40CDYz, _arrayValuelwluk9G, _arrayValueMjveFzW, _arrayValuePPOGcFQ]
		const _returnValueulzgVWY = await _HelpDNA9oh9.argumentDescription(_argumentqK0slh4)
		const _cmdXEcBUF1 = "y98DkWsV6rLyNdbINxsmUko4yxHLtUdbY5JYHNx01YIKH8nFERaaiEvE6RBn6PHuVe7ezkcurFW8dHfommvHMdAHgeUQ7i3";
		const _helperOK04Jdr = undefined;
		const _returnValueNBZllF0 = await _HelpDNA9oh9.formatHelp(_cmdXEcBUF1, _helperOK04Jdr)
	});

	it('test for Help', async () => {
		const _HelpokaWmt4 = new Help()
		const _cmdN6hwZw0 = true;
		const _arrayValueFSMVt8C = undefined;
		const _arrayValueZi84izY = undefined;
		const _arrayValueJuxIioD = -0.7128826395769465;
		const _arrayValuek6RVJ9 = false;
		const _arrayValue3ZGreH = [_arrayValueJuxIioD, _arrayValuek6RVJ9]
		const _helperDAUyMFZ = [_arrayValueFSMVt8C, _arrayValueZi84izY, _arrayValue3ZGreH]
		const _returnValuepz0of7Y = await _HelpokaWmt4.longestSubcommandTermLength(_cmdN6hwZw0, _helperDAUyMFZ)
	});

	it('test for Help', async () => {
		const _HelptjUmqzN = new Help()
		const _returnValueqAFSeFR = {
		
	}
		const _optionXnrqebW = () => { return _returnValueqAFSeFR };
		const _returnValueKzDFndL = await _HelptjUmqzN.optionDescription(_optionXnrqebW)
		const _cmdbIhbk5m = "3SuCPIQgPp";
		const _helperXRdQvhr = -7.551145745902186;
		const _returnValueRZg8NYx = await _HelptjUmqzN.longestArgumentTermLength(_cmdbIhbk5m, _helperXRdQvhr)
		const _optionHpQFQiv = false;
		const _returnValueL33PGKD = await _HelptjUmqzN.optionDescription(_optionHpQFQiv)
		const _cmdwoo4QfO = 5.248022668563358;
		const _returnValueJZLGVLV = await _HelptjUmqzN.commandDescription(_cmdwoo4QfO)
	});

	it('test for Help', async () => {
		const _HelpLSwGXSU = new Help()
		const _cmdqvoFe85 = 7.065136088931492;
		const _returnValuenJ688dp = await _HelpLSwGXSU.commandDescription(_cmdqvoFe85)
	});

	it('test for Help', async () => {
		const _HelpZ7sdzz5 = new Help()
		const _cmdTGKJjic = false;
		const _returnValuebwBdNKQ = await _HelpZ7sdzz5.commandUsage(_cmdTGKJjic)
		const _cmdkXrTeLj = -9.942828740542335;
		const _returnValuea87usnt = await _HelpZ7sdzz5.commandDescription(_cmdkXrTeLj)
		const _cmdOeRT4YY = undefined;
		const _helperPUeEBBJ = "7E5EUkt1MFyNswiCL9MJ81T2tiNOCBYZ9NLZRG9JoQTfPGKYaLLAPRjg20";
		const _returnValueXz155Wo = await _HelpZ7sdzz5.formatHelp(_cmdOeRT4YY, _helperPUeEBBJ)
	});

	it('test for Help', async () => {
		const _Helpc0tbdjK = new Help()
		const _strQaSZk9q = "o9Bb";
		const _arrayValueEujlrjl = -7.9071596692057025;
		const _arrayValueCnZe2U = undefined;
		const _arrayValueXQNe4Lb = "Gd3vo2LeEVubj6NOOXlnWokE4189PS1LsziBeTOkEfQWdG96eNQ1br";
		const _widthSujmoUp = [_arrayValueEujlrjl, _arrayValueCnZe2U, _arrayValueXQNe4Lb]
		const _indentamgFS4 = "w50fS9se70UVfwxKjvEyaEv8pfxNMkty95La5N7MOzUrlXrJ20VGk8GKr84nUCMA3ogAL6lP";
		const _minColumnWidthevyOye = "1UPfjxXykVEI2vGJebMFOUWQMSjo6pLi115HlwxVeSyNmoMBCUnqWSnFxPm4lOkZb7es8wdNdZEbm7RzNYKPQKfckYr2RHWKQ3";
		const _returnValued83i4VJ = await _Helpc0tbdjK.wrap(_strQaSZk9q, _widthSujmoUp, _indentamgFS4, _minColumnWidthevyOye)
		const _argumentdgDeGw = true;
		const _returnValueLwxJ0hk = await _Helpc0tbdjK.argumentDescription(_argumentdgDeGw)
		const _cmduYtC1I = true;
		const _returnValuezWo0nuq = await _Helpc0tbdjK.visibleOptions(_cmduYtC1I)
		const _cmdBVkzrnF = {
		
	}
		const _helperHp9yDEz = "ToUpAAN6pRwylT1BFpx1XL3stCT7zF5qV5VsNkA1c0EHu9XIRJwivsvMft";
		const _returnValueAEpTv7q = await _Helpc0tbdjK.longestOptionTermLength(_cmdBVkzrnF, _helperHp9yDEz)
	});

	it('test for Help', async () => {
		const _Helparb7fW8 = new Help()
		const _strbRgnMDO = "AMJnsJ14TsZi5gh5BMbyH7ztxsXLtS7X7BJIGxtWbHXgXoeij8P";
		const _widthws5FWSK = null;
		const _indentAKFdFy4 = -1.9522640571770395;
		const _minColumnWidthhgLDLDu = 7.144472134610908;
		const _returnValueK82RlT8 = await _Helparb7fW8.wrap(_strbRgnMDO, _widthws5FWSK, _indentAKFdFy4, _minColumnWidthhgLDLDu)
		const _cmdgFU0mcd = "NnVgci5hgDVKfnougJK9bs5PzJYBXtNcdk9X4UbNfSOBL927yQtg9hg0MGaeO2qGibQzVd0nCgaFsu1eH4ENWTVOHl";
		const _returnValuemJuz7BY = await _Helparb7fW8.visibleOptions(_cmdgFU0mcd)
		const _cmdKdTowxy = "NaFJ8uR4Cs9nKSekx86QapegBEDg";
		const _returnValueP7ZXOpi = await _Helparb7fW8.commandUsage(_cmdKdTowxy)
	});
})