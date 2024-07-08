const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923083852788";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_33_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDMxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMixcbiAgICAgICAgMzQsXG4gICAgICAgIDM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDU3LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDczLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzLFxuICAgICAgICA5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExLFxuICAgICAgICA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDczLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY4LFxuICAgICAgICA5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDcyLFxuICAgICAgICA3NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMVc3bnBpZGxxenZsN1hjTmdLNUFlbjBwUDlURzFwWUZ2blVqb3YwVjhodz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwODM4NTI3ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY3RTE2NTZBNUI5OTY0MzlERjk3MDlERkE2MDc3RDk2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQ2NzE5NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA4Mzg1Mjc4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkIzMkI2NjE4N0Y4NTE3MTI0OTg3MTlFN0UyOUM0M0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDY3MTk3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDgzODUyNzg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMjA5MjBGRUNENUY0QUJFMDdGMDcwQkM4RDJDREFBMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0NjcyMDFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRmNuTEo4SUpUTW1xT3VsZXloRnNjd1wiLFxuICBcInBob25lSWRcIjogXCJlNmM4NTdjNS0wNWM4LTQ3NTQtOWUzYy02MTNjNDhmNWUzNGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODEsXG4gICAgICAyNDYsXG4gICAgICAxNCxcbiAgICAgIDIzNyxcbiAgICAgIDIwMSxcbiAgICAgIDM4LFxuICAgICAgMTMsXG4gICAgICAyNDcsXG4gICAgICA0MyxcbiAgICAgIDIzNCxcbiAgICAgIDExMSxcbiAgICAgIDIxOCxcbiAgICAgIDIwNSxcbiAgICAgIDEyNSxcbiAgICAgIDI0MCxcbiAgICAgIDE0OSxcbiAgICAgIDE5MSxcbiAgICAgIDE0LFxuICAgICAgMjYsXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDgsXG4gICAgICAxNixcbiAgICAgIDE3NCxcbiAgICAgIDE4NCxcbiAgICAgIDE5MCxcbiAgICAgIDUxLFxuICAgICAgODcsXG4gICAgICA3MSxcbiAgICAgIDIzNixcbiAgICAgIDE3OCxcbiAgICAgIDE5MSxcbiAgICAgIDE2MCxcbiAgICAgIDI0MCxcbiAgICAgIDU1LFxuICAgICAgMTQyLFxuICAgICAgMTc2LFxuICAgICAgMjE2LFxuICAgICAgMTk1LFxuICAgICAgNjQsXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUZQR1g0RFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA4Mzg1Mjc4ODozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1yXCIsXG4gICAgXCJsaWRcIjogXCIyNDMzNTcwNDE4MjgxNTozNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNS0s1dW9IRVBmOXNMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk1yTXZ5T3pxd1F1MUFSNTVtd1Q2UVRucit2TmFJSmZmaElXVkNESjRNeFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidHhMdmpQdXlJWlMvdEh6dFN4VHFNVWFNWCtrQjNjenJNckFXb0hKL2kyRHJicXZqZkJXQS9jbHNmbVh1MWphSjh1REkzTXVReFNHRHVRYm9uMGNkQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieVZUbkY0SXkxNTg5NEIxUzBFR0UrdmpvODJrakRvVGh3cjA2ckY0ZHpXenYva244WnZ3R0NiWUZpOGJKOFZ3d3RINmY2SW1PM2ZSODBHeHpSWGY5akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDgzODUyNzg4OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ2NzE5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUY1V1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjVXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVzRnQW1ZVnZIMHR1Rzd6ZEpKOVovZTJrVmd1aEJBOE9ONHE5RXh3QVZXTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTAzMDE4ODE4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0NjcxOTUwODFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sultan-Baloch",
  ownername:process.env.OWNER_NAME|| "Sultan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Sultan"  ).toUpperCase(),



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
