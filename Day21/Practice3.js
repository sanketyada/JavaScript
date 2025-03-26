//Inheritance
class RBI{
    constructor(bankName,loanAmount){
        this.bankName=bankName;
        this.loanAmount=loanAmount;
    }
    Amount(){
        console.log(`Total Loan Amount is ${this.loanAmount}`)
    }
}
class LocalBank extends RBI{
    constructor(bankName,loanAmount,loanIntrest,clientName){
        super(bankName,loanAmount);
        this.loanIntrest = loanIntrest;
        this.clientName = clientName;
    }
    BankName(){
        console.log(`Bank Name is ${this.bankName}`)
    }
}

let bank1 = new LocalBank("Union Bank",25000,9,"Tavish Jain");
bank1.Amount()  //Parent's Method
bank1.BankName()  //child own method