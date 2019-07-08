class regexValidators{
    //function to validate is zip codes in ZIP and ZIP+4 format 11222 or 48034-1234
    public static validateZipCodeUS(zip: string) :boolean{
        let regexp: RegExp = /^\d{5}(?:[-\s]\d{4})?$/;
        return regexp.test(zip);
    }
    //validate a phone number(romanian) ex +40 0773924110 10 digits must start with 0 followed by 7 
    public static validatePhoneNumber(phoneNumber: string) :boolean{
        let regexp: RegExp = /^\+40\s7\d{8}$/;
        return regexp.test(phoneNumber);
    }

    //adds padding with 0 for one digit months
    private static formatMonth(month : number) : string{
        month = month + 1;
        if(month < 10)
        {
            return `0${month}`;
        }
        else return `${month}`;
    }
    //adds padding with 0 for one digit days
    private static formatDay(day : number) : string{
        if(day < 10)
        {
            return `0${day}`;
        }
        else return `${day}`;
    }

    //get the date of today formated in the YYYY-MM-DD format
    public static getToday() : string {
        var today = new Date();
        let date : string = today.getFullYear()+'-'+regexValidators.formatMonth(today.getMonth())+'-'+regexValidators.formatDay(today.getDate());//yyyy-mm-dd;  
        return date;
    }

    //validate date of birth > 1900 <= today | dob entered as yyyy-mm-dd
    public static validateDOB(dob: string) :boolean{
        var today = new Date();
        let year : string = String(today.getFullYear());
        let month : string = regexValidators.formatMonth(today.getMonth());
        let day : string = regexValidators.formatDay(today.getDate());
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();//yyyy-mm-dd;
        let hardcoded = new RegExp('^(?:2019-07-0[1-8]|2019-(?:02-(?:[12][0-9]|0[1-9])|0[46]-(?:30|[12][0-9]|0[1-9])|0[135]-(?:3[01]|[12][0-9]|0[1-9]))|(?:201[0-8]|200[0-9]|19[0-9]{2})-(?:02-(?:[12][0-9]|0[1-9])|(?:0[469]|11)-(?:30|[12][0-9]|0[1-9])|(?:0[13578]|1[02])-(?:3[01]|[12][0-9]|0[1-9])))$');
        let regDate = new RegExp(`^(?:${year}-${month}-${day.charAt(0)}[1-${day.charAt(1)}]|${year}-(?:02-(?:[12][0-9]|0[1-9])|0[46]-(?:30|[12][0-9]|0[1-9])|0[135]-(?:3[01]|[12][0-9]|0[1-9]))|(?:20${year.charAt(2)}[0-${year.charAt(3)}]|200[0-9]|19[0-9]{2})-(?:02-(?:[12][0-9]|0[1-9])|(?:0[469]|11)-(?:30|[12][0-9]|0[1-9])|(?:0[13578]|1[02])-(?:3[01]|[12][0-9]|0[1-9])))$`);
        return regDate.test(dob);
    }

}

export default regexValidators;