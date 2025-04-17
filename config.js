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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233247923525";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_33_04_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDksXG4gICAgICAgIDE2LFxuICAgICAgICAyOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDgwLFxuICAgICAgICA3OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA3LFxuICAgICAgICAxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNixcbiAgICAgICAgMjUzLFxuICAgICAgICA4NyxcbiAgICAgICAgMCxcbiAgICAgICAgODYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgODIsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MixcbiAgICAgICAgNTksXG4gICAgICAgIDM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc5LFxuICAgICAgICA5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDczLFxuICAgICAgICA1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAyLFxuICAgICAgICAxLFxuICAgICAgICA3MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDgzLFxuICAgICAgICA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQwLFxuICAgICAgICA1OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJ1ekVUY1l2WDNxQzljTmdYSUk4MDd5NW5KbXNXa3FIYVJnT1NyclpBdmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzMjQ3OTIzNTI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENzY0QjRBRTc5M0U0OUI2RDFFOEMyQjMyQzJFNzExRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDQ4OTY3ODJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzMyNDc5MjM1MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI4Rjg0NjA5QTMwNkIwNjE3QjhGMDU5Mjk3RDE2QjcwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NDg5Njc4M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwVTdIRDJ3WVM1dXltSXBMa2VMd1pnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZiOTZkOWNiLTVhMDktNGE4MS1iODg4LTkwMTg1MDMxOGI4MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDE4NSxcbiAgICAgIDQ5LFxuICAgICAgMzQsXG4gICAgICA5LFxuICAgICAgMjksXG4gICAgICAxMjcsXG4gICAgICA0OCxcbiAgICAgIDc1LFxuICAgICAgMTQ3LFxuICAgICAgMTMyLFxuICAgICAgNDYsXG4gICAgICAyOCxcbiAgICAgIDUsXG4gICAgICAxNjEsXG4gICAgICAxOTQsXG4gICAgICAyMDUsXG4gICAgICAxNTUsXG4gICAgICA1MSxcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICAzLFxuICAgICAgMjUxLFxuICAgICAgMTE1LFxuICAgICAgMTM2LFxuICAgICAgMTM4LFxuICAgICAgMTQ1LFxuICAgICAgMTcsXG4gICAgICAyMixcbiAgICAgIDU3LFxuICAgICAgMTYwLFxuICAgICAgNTksXG4gICAgICAyNTQsXG4gICAgICA0NyxcbiAgICAgIDI0NSxcbiAgICAgIDIwNyxcbiAgICAgIDE0NCxcbiAgICAgIDE2OSxcbiAgICAgIDE3NCxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktMWTcxUlgyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNDc5MjM1MjU6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzE1OTMwODU4NzE1Njo1NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn4eyIPCfh7cg8J+HvCDwn4euIPCfh7Eg8J+HsVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01TTDlaSUJFSVdHaE1BR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibUlMOWRRRUl3cFRYUllkK1FwdHZJUnVBd0MwL2s1aFZCb040anpNSjdqbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5V3hPdnlOOG5YcUZWd2o1MXRqQWhUcmUya2NHU1hEbGZiamp3SUNnWTBKa29ERFZVZHgrM2tIbWtWMTJIV0toaHVZdXQ2OGJjZFdIOGIzWHhmZFlCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiVmpBMFc0enV0RUVGcVlha3o2L0lwbjJTb0xiY01DVmdGMkE4TFptRVdkMVhPUzFieU43U1dCOURVOUY4ajZiMlR1dTFIS2tTY2hOZ2tacUlrcUpBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNDc5MjM1MjU6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0ODk2Nzc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnd6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGd3ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlWjBjbGNTam9FTVJ3RkZnVC9rNzBEcmdlcVlUWTBTY0pXU2ViSG40QmdNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwODEwMjU5NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ0ODk2NzgxMjY1XCJ9Igp9"  // PUT your SESSION_ID 


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
