import { LoginPage } from "./LoginPage";

export class WelcomePage extends LoginPage{
    public selectors={
       ...this.selectors,
        contactLink: "//a[text()='Contacts']"      
 };
 async clickCRM(){
        await this.page.click(this.selectors.crmSfaLink)
        }
}

//same class same methodname with diff arguments/number of arguments --overloading
//same methodname same arguments with differnt classes -->overriding -->pick the child 
//super. -->access parent 

//     page:Page 
//     context:BrowserContext

//    constructor(context:BrowserContext,page:Page){
//     super(context,page)
//     this.page=page
//     this.context=context
  
//    }

//    async navigate() {
//         await this.page.goto(URLConstants.homePageUrl)
//    }


// public selectors={
//     ...this.selectors,
//     contactLink: "//a[text()='Contacts']"   

    
//  }