import axios from "axios"

//Required informatio to handle jira api
const endpoint ="https://vidya-bharathi.atlassian.net/rest/api/2/issue"
const username="vidyar1926@gmail.com"
const apiKey="ATATT3xFfGF0c1ajxe2lhh7oXI1R11CflHmRL3UAh5J-DxyO-R51RkT3hvEocvoAM8E4CACW33u5pWpqfuA7XOEB1GXbF961QiJM5wyLhNCiCyVdcxlUL84BXzKh_44j7PzEdN1iQ1dn18tALWhdz9OilhzrJx6OXuKyWBL2TUM3A1fj849Lpok=1B6A4627"
const projectId="PF"

export async function createIssue(summary:string,description:string){

    const issueBody={
        "fields":{
            "project":{
                "key":projectId
                },
            "summary":summary,
            "description":description,
            "issuetype":{
                "name":"Bug"
            },
            // "assignee":{
            //    "id":
            // } 
            
        }
    }

    const response =await axios.post(endpoint,issueBody,{
        headers:{
            "Content-Type":"application/json"
        },
        auth:{
        username:username,
        password:apiKey
        }
    })


    console.log(response.status)
    console.log(response.data)
    return response.data.key
}

//createIssue("Learning jira", "Using axios to create issue")