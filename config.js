const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Ghana, Accra."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Ghana/Accra";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "true" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Empire_Md" 


global.devs = "233209537809" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233209537809";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "true" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_37_02_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDYxLFxuICAgICAgICA1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDczLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkyLFxuICAgICAgICA5MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUzLFxuICAgICAgICA5NixcbiAgICAgICAgMjksXG4gICAgICAgIDEsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMxLFxuICAgICAgICA0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIllDeFdIMXpFRlNBTUg4WG1FT2RSN2ZKZi9CZFNteXpmTUZ3TkFVTXB4YzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpscVIzR0lKVEpPR00yQl9mRXJiQ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzA2Y2VmODgtYTJkNi00YWE4LWFkMWMtYjFhMWExMmMyZTIzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMjIzLFxuICAgICAgMTc4LFxuICAgICAgMjQwLFxuICAgICAgMTIsXG4gICAgICAxNDQsXG4gICAgICAyMDIsXG4gICAgICAxNDEsXG4gICAgICAxMTYsXG4gICAgICAxNTMsXG4gICAgICAxODAsXG4gICAgICAyMDUsXG4gICAgICA2NyxcbiAgICAgIDIzLFxuICAgICAgMTM1LFxuICAgICAgMTIxLFxuICAgICAgMTA2LFxuICAgICAgNCxcbiAgICAgIDEyOSxcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICA2MCxcbiAgICAgIDIyNSxcbiAgICAgIDEzOCxcbiAgICAgIDc2LFxuICAgICAgMTY5LFxuICAgICAgOTUsXG4gICAgICA1OCxcbiAgICAgIDIxMixcbiAgICAgIDAsXG4gICAgICAxODksXG4gICAgICAyMDAsXG4gICAgICA5OSxcbiAgICAgIDE1MyxcbiAgICAgIDEyLFxuICAgICAgMTMyLFxuICAgICAgMTksXG4gICAgICA4MixcbiAgICAgIDk3LFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzhFUjVXOUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI0NzkyMzUyNTozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3MTU5MzA4NTg3MTU2OjM5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wyTDlaSUJFTFBPeTcwR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibUlMOWRRRUl3cFRYUllkK1FwdHZJUnVBd0MwL2s1aFZCb040anpNSjdqbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiMU0rZEwxUXJJZzNOb2kwR0ttNUtLbVh5K1dWclJYd0tWRmxkci91WlVoeFp5WTFxb0d1RlhqSnVkNnlyaS9iYnF1VVdPTnlrQlZyTlUzY3NpVk1Cdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVS04rSTB4NUlCNDlpMjUxTVh3b0luWnlFTTgxczNCQ2xzM2I4aFhZdkF5YlI1azdKODlkcXRNMmJCWG9BVVFCU3dkb2hnT21QWmlvZHA3VlAxNnNoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNDc5MjM1MjU6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM5Nzc3ODQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1djXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLV2MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwU2hHTmxrSDlQUmh5Wi81L3J5T1VuSkFQa0xEa0xrR21GMkp3UVZLZmd3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwODEwMjU4MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM5MjUzOTY5MDExXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "MRWILL-available",
  packname: process.env.PACK_NAME || "MRWILL-available",
  botname : process.env.BOT_NAME  || "MRWILL-available",
  ownername:process.env.OWNER_NAME|| "MRWILL-available",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
