import test, { TestInfo } from "@playwright/test"
import { createIssue } from "./jiraapi"


export async function logDefect(info:TestInfo){
    //caputres the test annotation and compares the status of the test and then report in jira
    const nonBug=test.info().annotations.some(annoations=>annoations.type==='Bug')
    if(info.status==="timedOut" && !nonBug|| info.status==="interrupted" && !nonBug){        
        const summary=`Test ${info.title} is failed`
        const description=`Test failed due to ${info.error?.message}`  
       return await createIssue(summary,description)
    }

}