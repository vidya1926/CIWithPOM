import { HomePage } from "./HomePage";

export class LeadsPage extends HomePage{
    // report(): void {
    // }
    async clickCreateLead(){
        
        await this.page.click(this.selectors.moduleLink('Create Lead'))
    }
    async clickfindLeads(){
        await this.page.click(this.selectors.leads.moduleLink('Find Leads'))
    }
    async clickMergeLeads(){
        await this.page.click(this.selectors.leads.moduleLink('Merge Lead'))
    }

}