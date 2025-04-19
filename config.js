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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_05_04_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5LFxuICAgICAgICA5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAwLFxuICAgICAgICAzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDUzLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDUzLFxuICAgICAgICA1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MixcbiAgICAgICAgMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgxLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNixcbiAgICAgICAgMTM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzLFxuICAgICAgICA5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgODgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwickcrYXBpOVBvKzE2UlY5RTRaR0hJM2Z1bHgvYVB6OW9rL05tN214Nzl5az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaWNWSG04VjZSdDY0RnNXYmJnV1FYQVwiLFxuICBcInBob25lSWRcIjogXCI1NjMxOGQ2Ny1iZWE0LTQxMTAtYjg1ZS1kMmI3MDRiYjJlMzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgMTI5LFxuICAgICAgMjI0LFxuICAgICAgMTk2LFxuICAgICAgMTEwLFxuICAgICAgMTUyLFxuICAgICAgNDYsXG4gICAgICAxNTYsXG4gICAgICA3NixcbiAgICAgIDE4MyxcbiAgICAgIDkyLFxuICAgICAgMTQ0LFxuICAgICAgMjQxLFxuICAgICAgNjEsXG4gICAgICAyNTIsXG4gICAgICAxMDcsXG4gICAgICA5OSxcbiAgICAgIDE3MixcbiAgICAgIDE2LFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MixcbiAgICAgIDI1NSxcbiAgICAgIDkyLFxuICAgICAgNzAsXG4gICAgICAxNDcsXG4gICAgICA4OCxcbiAgICAgIDY4LFxuICAgICAgMjI5LFxuICAgICAgNzUsXG4gICAgICAyMzUsXG4gICAgICAyMjIsXG4gICAgICAyNDksXG4gICAgICAxODQsXG4gICAgICA4NSxcbiAgICAgIDE5OCxcbiAgICAgIDk0LFxuICAgICAgMTE1LFxuICAgICAgMjMsXG4gICAgICAxMDIsXG4gICAgICAyNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNTRTNkY3QUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI0NzkyMzUyNTo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3MTU5MzA4NTg3MTU2OjU2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01hTDlaSUJFS2IzanNBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibUlMOWRRRUl3cFRYUllkK1FwdHZJUnVBd0MwL2s1aFZCb040anpNSjdqbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoSTlmU2N1NFFLYmR2dlhHNFA3MEUwRWgyNWRCSjdBSDZrSDZ4bFU1MmZjTUt2Qkc1Umlsb1RvRmI1dFFJQzdYckNtRU13aGtlUFo4YjZWTmJJRk5EZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0UkgwMkFCblI1bXpBUS9LT1lUa3Yrd0ZrVEpnYVdHc1ZNeDNzOGxVTzQ3anlCWXFRcTgyV2NZdGJKVHkyUzBCSldTSUNxN3lsUUJialdwQ1BMTElCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNDc5MjM1MjU6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1MDc1MTE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRGY2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEZjYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVOTlUSE0vUVp3ZEZHOElrSEhRNjA5OHlJbGlHRkR1bSsyRTcyUTQ0S3c4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwODEwMjU5NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NTA2MzM2MTk4MVwifSIKfQ=="  // PUT your SESSION_ID 


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
