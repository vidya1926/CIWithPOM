import {test} from '../utility/myFixture'
import { LeadsPage } from "../pages/LeadsPage";
import fs from 'fs'
import { URLConstants } from "../data/urlconstants";
import { createIssue } from '../utility/jiraapi';
let loginData:any[]
let leadId:any="Hari"

test.describe(``,async()=>{
   //test.describe.configure({retries:1})
test.beforeEach(``,async()=>{
   loginData=JSON.parse(fs.readFileSync("data/login.json",'utf-8'))

})


test(`Leads Module`,async({lp})=>{
   test.info().annotations.push({type:"Bug",description:""})
     await lp.navigate()  
     await lp.enterCredentials(loginData[0].Username,loginData[0].Password)
     await lp.doLogin()
     await lp.clickCRM()
   //   await lp.clickLeads()
   //   await lp.clickCreateLead()
   
    })

// test(`Edit Leads Module`,async({lp,fp})=>{
//    await lp.navigate()  
//    await lp.enterCredentials(loginData[0].Username,loginData[0].Password)
//    await lp.doLogin()
//    await lp.clickCRM()
//    await lp.clickLeads()
//    await lp.clickfindLeads()   
//    await fp.searchFirstname(leadId)
// })

})