
import {test as base, TestInfo} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { WelcomePage } from '../pages/WelcomePage'
import { HomePage } from '../pages/HomePage'
import { LeadsPage } from '../pages/LeadsPage'
import { FindLeadsPage } from '../pages/FindLeads'
import { createIssue } from './jiraapi'
import { logDefect } from './logDefect'



type customFixture={
    login:LoginPage,
    wp:WelcomePage,
    hp:HomePage,
    lp:LeadsPage
    fp:FindLeadsPage
}

export const test=base.extend<customFixture>(
{
 login:async({page,context},use)=>{
    const login=new LoginPage(context,page)
    await use(login)
 },
 wp:async({page,context},use)=>{
    const wp=new WelcomePage(context,page)
    await use(wp)
 },
 
 hp:async({page,context},use)=>{
    const hp=new HomePage(context,page)
    await use(hp)
 },
 
 lp:async({page,context},use)=>{
    const lp=new LeadsPage(context,page)
    await use(lp)
 },

 fp:async({page,context},use)=>{
   const fp=new FindLeadsPage(context,page)
   await use(fp)
},
})

let key:any

test.afterEach(`Defect in jira`,async({},testInfo)=>{  
 key=await logDefect(testInfo)
 console.log(key)
})


test.afterAll(``,async()=>{
    console.log("uplaod attachment "+key)
})