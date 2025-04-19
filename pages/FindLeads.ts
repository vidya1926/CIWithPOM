import { LeadsPage } from "./LeadsPage";

export class FindLeadsPage extends LeadsPage{


    public selectors={
        ...this.selectors,
        searchFname:"(//input[name='firstName'])[3]"
    }

    async searchFirstname(firstName:string){
        await this.page.fill(this.selectors.searchFname,firstName)
    }
  

}