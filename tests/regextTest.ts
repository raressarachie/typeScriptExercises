import regexValidators from '../src/regex'

describe('regexValidators', () => {
    
    describe('validate zip codes USA', () => {
        it('valid ZIP format', () => {
          expect(regexValidators.validateZipCodeUS('12345')).toBeTruthy();
        });

        it('valid ZIP+4 format', () => {
            expect(regexValidators.validateZipCodeUS('12345-1234')).toBeTruthy();
        });

        it('invalid ZIP format', () => {
            expect(regexValidators.validateZipCodeUS('123456')).toBeFalsy();
        });

        it('invalid ZIP+4 format', () => {
            expect(regexValidators.validateZipCodeUS('12345-12345')).toBeFalsy();
        });

        it('no hyphen in ZIP+4', () => {
            expect(regexValidators.validateZipCodeUS('12345+1234')).toBeFalsy();
        });

        it('empty ZIP', () => {
            expect(regexValidators.validateZipCodeUS('')).toBeFalsy();
        });
        
    });

    describe('validate romanian phone number', () => {
        it('valid phone number', () => {
            expect(regexValidators.validatePhoneNumber('+40 744549812')).toBeTruthy();
        });
        it('invalid prefix', () => {
            expect(regexValidators.validatePhoneNumber('+41 744549812')).toBeFalsy();
        });
        it('phone number to long', () => {
            expect(regexValidators.validatePhoneNumber('+40 7441549812')).toBeFalsy();
        });

        it('no prefix', () => {
            expect(regexValidators.validatePhoneNumber('07441549812')).toBeFalsy();
        });
        it('empty phone number', () => {
            expect(regexValidators.validatePhoneNumber('')).toBeFalsy();
        });
    });

    describe('validate date of birth must be between 1900-today, in the YYYY-MM-DD format', () => {
        it('valid date of birth', () => {
            expect(regexValidators.validateDOB('1998-11-02')).toBeTruthy();
        });
        it('dob < 1900', () => {
            expect(regexValidators.validateDOB('1899-11-02')).toBeFalsy();
        });
        it('dob today', () => {
            let today : string = regexValidators.getToday(); 
            expect(regexValidators.validateDOB(today)).toBeTruthy();
        });
        it('dob one year after today', () => {
            let today : string[] = regexValidators.getToday().split('-');
            
            let afterToday : string = String(Number(today[0])+1) + today[1] + today[2]; 
            expect(regexValidators.validateDOB(afterToday)).toBeFalsy();
        });
        it('dob one month after today(if todays month not december)', () => {
            let today : string[] = regexValidators.getToday().split('-');
            
            if(Number(today[1]) < 12){
                let afterToday : string = today[0] + String(Number(today[1])+1) + today[2]; 
                expect(regexValidators.validateDOB(afterToday)).toBeFalsy();}
        });
        it('dob invalid day', () => {
            expect(regexValidators.validateDOB('2000-07-33')).toBeFalsy();
        });

        it('dob invalid month', () => {
            expect(regexValidators.validateDOB('2000-13-33')).toBeFalsy();
        });

        it('dob invalid day in february(30)', () => {
            expect(regexValidators.validateDOB('2000-02-30')).toBeFalsy();
        });
        it('dob invalid day in november(31)', () => {
            expect(regexValidators.validateDOB('2000-11-31')).toBeFalsy();
        });
        it('day with 00', () => {
            expect(regexValidators.validateDOB('2000-11-00')).toBeFalsy();
        });
        it('month with 00', () => {
            expect(regexValidators.validateDOB('2000-00-11')).toBeFalsy();
        });
        it('5 digit year', () => {
            expect(regexValidators.validateDOB('20001-11-00')).toBeFalsy();
        });
        it('empty date', () => {
            expect(regexValidators.validateDOB('')).toBeFalsy();
        });

    });
})