import test, { BrowserContext, expect, Page } from "@playwright/test";

export abstract class PlaywrightWrapper{

  page:Page
  context:BrowserContext

  constructor(page:Page,context:BrowserContext){
    this.page=page
    this.context=context
  }


  async loadApp(url:string){
    await test.step(`Application is launched using ${url}`,async()=>{       
          await this.page.goto(url)      
       //   await this.page.screenshot({path:`screenshots/img ${new Date().getMilliseconds()}`})

        })
  }

  async validateandClick(locator:string,name:string){
        await test.step(`Validate the Element ${name} and Click`,async()=>{
        const ele= this.page.locator(locator)
       try{        
         await expect(ele).toBeVisible()
         await ele.click({timeout:3000})
         }catch(error){
        await ele.screenshot({path:`screenshots/img ${new Date().getMilliseconds()}`})
       }
       })     
  }
     // abstract  report():void

  async typeAndEnter(locator:string,data:string){
    await test.step(`Textbox is cleared and filled with ${data}`,async()=>{
          await this.page.locator(locator).fill(data)
          await this.page.locator(locator).focus()
          await this.page.keyboard.press('Enter')
        })
  }
  
  async type(locator:string,data:string){
    await test.step(`Textbox is cleared and filled with ${data}`,async()=>{
          await this.page.locator(locator).fill(data)        
        })
  }

  async KeyboardType(locator:string,data:string){
    await test.step(`Textbox is cleared and filled with ${data}`,async()=>{
        await this.page.locator(locator).focus()
        await this.page.keyboard.type(data)
      })
  }

  async handleAlerts(){
       //Event listener
  this.page.on('dialog',async(dialog:any)=>{

    const message= dialog.message();
    console.log(message);
    
    const type = dialog.type();
    console.log(`The type pf alert ${type}`);
    
    if(type==='confirm'){
    await dialog.accept();
    }
    else if(type==='prompt'){
        await dialog.accept("Ravindran");
    } else
    
    dialog.dismiss();
    })
    

  }
  


}