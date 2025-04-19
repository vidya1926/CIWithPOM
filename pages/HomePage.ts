import { WelcomePage } from "./WelcomePage";

export class HomePage extends WelcomePage{

    async clickLeads(){
        await this.page.click(this.selectors.moduleLink('Leads'))
    }
      
    async clickContact(){
        await this.page.click(this.selectors.contactLink)
    }

}