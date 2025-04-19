import {BrowserContext, expect, Page} from '@playwright/test'
import { URLConstants } from '../data/urlconstants'
import { PlaywrightWrapper } from '../utility/pwWrapper';


export class LoginPage extends PlaywrightWrapper{

    page:Page 
    context:BrowserContext

   public selectors={
        usernameField:"#username",
        pwdField:"#password",
        loginButton:"//input[@class='decorativeSubmit']",
        crmSfaLink:"text=CRM/SFA",
        moduleLink:(linkText:string)=>`//a[text()=${linkText}]`,
      //   leads:{
      //        createLeadLink:"//a[text()='Create Lead']",
      //        findLeads:"//a[text()='Find Leads']",
      //         },
   
      //   accountsLink:""
     };
   constructor(context:BrowserContext,page:Page){ 
    super(page,context) 
    this.page=page
    this.context=context
   }

   async navigate():Promise<string>{
      await this.loadApp(URLConstants.baseUrl)
      return this.page.url()
   }

   async enterCredentials(username:string,password:string){
    await this.KeyboardType(this.selectors.usernameField,username)
    await this.KeyboardType(this.selectors.pwdField,password)
     }
   async doLogin(){
           await this.validateandClick(this.selectors.loginButton,"Login Button")
       //    await this.handleAlerts()
   }

   async verifyUrl(){
    console.log(this.page.url())
   }

}